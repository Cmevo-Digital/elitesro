<?php
header('Content-Type: application/json');

// ─── Layer B: Origin check ────────────────────────────────────────────────────
$allowed_origins = ['https://elites.ro', 'https://www.elites.ro'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$source = $origin ?: $referer;

if ($source !== '') {
    $ok = false;
    foreach ($allowed_origins as $a) {
        if (strpos($source, $a) === 0) { $ok = true; break; }
    }
    if (!$ok) {
        http_response_code(403);
        echo json_encode(['error' => 'Forbidden']);
        exit;
    }
}

// ─── Layer C: Rate limiting ───────────────────────────────────────────────────
function checkRateLimit(string $ip, int $max = 5, int $windowMin = 10): bool {
    $dir = rtrim(sys_get_temp_dir(), '/') . '/elites_rl';
    if (!is_dir($dir)) mkdir($dir, 0700, true);

    $file = $dir . '/' . md5($ip) . '.json';
    $now  = time();
    $win  = $windowMin * 60;

    $fp = fopen($file, 'c+');
    if (!$fp) return true; // fail open if we can't write (don't block the user)
    flock($fp, LOCK_EX);

    $timestamps = json_decode(stream_get_contents($fp), true) ?? [];
    $timestamps = array_values(array_filter($timestamps, fn($t) => ($now - $t) < $win));

    if (count($timestamps) >= $max) {
        flock($fp, LOCK_UN);
        fclose($fp);
        return false;
    }

    $timestamps[] = $now;
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($timestamps));
    flock($fp, LOCK_UN);
    fclose($fp);
    return true;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$ip = trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '')[0])
    ?: ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');

if (!checkRateLimit($ip)) {
    http_response_code(429);
    echo json_encode(['error' => 'Prea multe cereri. Te rugăm să aștepți câteva minute.']);
    exit;
}

// ─── Parse input ─────────────────────────────────────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// ─── Layer A: Honeypot ────────────────────────────────────────────────────────
if (!empty($input['honeypot'])) {
    // Silent pass — don't reveal the trap to the bot
    echo json_encode(['ok' => true]);
    exit;
}

// ─── Sanitise & validate ─────────────────────────────────────────────────────
function s($v): string {
    return strip_tags(trim($v ?? ''));
}

$to      = 'contact@elites.ro';
$type    = $input['type'] ?? 'contact';
$name    = s($input['name']);
$phone   = s($input['phone']);
$email   = s($input['email'] ?? '');
$message = s($input['message'] ?? '');

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Câmpurile nume și telefon sunt obligatorii.']);
    exit;
}

// ─── Build email ─────────────────────────────────────────────────────────────
if ($type === 'quote') {
    $eventType  = s($input['eventType'] ?? '');
    $eventDate  = s($input['eventDate'] ?? '');
    $guestCount = s($input['guestCount'] ?? '');
    $location   = s($input['location'] ?? '');
    $services   = is_array($input['services'])
        ? implode(', ', array_map('s', $input['services']))
        : '';

    $durations = is_array($input['durations'] ?? null) ? $input['durations'] : [];

    $planLines = [];
    if (is_array($input['pricingPlans'] ?? null)) {
        foreach ($input['pricingPlans'] as $serviceTitle => $planName) {
            $planName = s($planName);
            if ($planName === '') continue;
            $duration = s($durations[$serviceTitle] ?? '');
            $planLines[] = '  - ' . s($serviceTitle) . ': ' . $planName
                . ($duration !== '' ? " ({$duration})" : '');
        }
    }
    $plansSection = $planLines
        ? implode("\n", array_merge(["Pachete alese:"], $planLines))
        : '';

    $extraLines = [];
    if (is_array($input['extras'] ?? null)) {
        foreach ($input['extras'] as $serviceTitle => $extraNames) {
            if (!is_array($extraNames)) continue;
            $extraNames = array_filter(array_map('s', $extraNames), fn($v) => $v !== '');
            if (empty($extraNames)) continue;
            $extraLines[] = '  - ' . s($serviceTitle) . ': ' . implode(', ', $extraNames);
        }
    }
    $extrasSection = $extraLines
        ? implode("\n", array_merge(["Optiuni suplimentare:"], $extraLines))
        : '';

    $estimatedPrice = s($input['estimatedPrice'] ?? '');

    $detailLines = [];
    if (is_array($input['pricingDetails'] ?? null)) {
        foreach ($input['pricingDetails'] as $line) {
            $line = s($line);
            if ($line === '') continue;
            $detailLines[] = '  - ' . $line;
        }
    }
    $detailsSection = $detailLines
        ? implode("\n", array_merge(["Detalii calcul pret:"], $detailLines))
        : '';

    $subject = "Cerere Oferta Noua — {$name}";
    $bodyLines = [
        "CERERE OFERTA NOUA",
        "==================",
        "",
        "Nume:               {$name}",
        "Telefon:            {$phone}",
        "Email:              {$email}",
        "",
        "Tip eveniment:      {$eventType}",
        "Data evenimentului: {$eventDate}",
        "Numar invitati:     {$guestCount}",
        "Locatie:            {$location}",
        "Servicii dorite:    {$services}",
    ];
    if ($plansSection !== '') {
        $bodyLines[] = '';
        $bodyLines[] = $plansSection;
    }
    if ($extrasSection !== '') {
        $bodyLines[] = '';
        $bodyLines[] = $extrasSection;
    }
    if ($detailsSection !== '') {
        $bodyLines[] = '';
        $bodyLines[] = $detailsSection;
    }
    if ($estimatedPrice !== '') {
        $bodyLines[] = '';
        $bodyLines[] = "Estimare pret: {$estimatedPrice}";
    }
    $bodyLines[] = '';
    $bodyLines[] = 'Detalii suplimentare:';
    $bodyLines[] = $message;
    $body = implode("\n", $bodyLines);
} else {
    $subjectInput = s($input['subject'] ?? '');
    $subject = $subjectInput ?: "Mesaj nou de pe elites.ro — {$name}";
    $body    = implode("\n", [
        "MESAJ NOU DE CONTACT",
        "====================",
        "",
        "Nume:    {$name}",
        "Telefon: {$phone}",
        "Email:   {$email}",
        "Subiect: {$subjectInput}",
        "",
        "Mesaj:",
        $message,
    ]);
}

// ─── SMTP sender ─────────────────────────────────────────────────────────────
function smtpSend(string $to, string $subject, string $body, string $from, string $replyTo): array {
    $host = 'ssl://mail.elites.ro';
    $port = 465;
    $user = 'noreply@elites.ro';
    $pass = 't,Wruu%Ee3{*u@J9';

    $log = [];
    $fp  = @fsockopen($host, $port, $errno, $errstr, 10);
    if (!$fp) return ['ok' => false, 'step' => 'connect', 'err' => "$errstr ($errno)"];

    $r = function() use ($fp, &$log) {
        $line = fgets($fp, 512);
        $log[] = 'S: ' . trim($line ?? '');
        return $line;
    };
    $w = function(string $s) use ($fp, &$log) {
        $log[] = 'C: ' . $s;
        fwrite($fp, $s . "\r\n");
    };

    while (($line = $r()) !== false) { if (isset($line[3]) && $line[3] === ' ') break; }
    $w('EHLO localhost');
    while (($line = $r()) !== false) { if (isset($line[3]) && $line[3] === ' ') break; }

    $w('AUTH LOGIN');         $r();
    $w(base64_encode($user)); $r();
    $w(base64_encode($pass));
    $authResp = $r();
    if (!isset($authResp[0]) || $authResp[0] !== '2') {
        fclose($fp);
        return ['ok' => false, 'step' => 'auth', 'log' => $log];
    }

    $w("MAIL FROM:<{$from}>"); $mailResp = $r();
    $w("RCPT TO:<{$to}>");     $rcptResp = $r();
    $w('DATA');                 $r();

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $msg  = "From: Elites Events <{$from}>\r\n";
    $msg .= "To: <{$to}>\r\n";
    $msg .= "Reply-To: {$replyTo}\r\n";
    $msg .= "Subject: {$encodedSubject}\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: 8bit\r\n";
    $msg .= "\r\n";
    $normalizedBody = str_replace(["\r\n", "\r", "\n"], "\r\n", $body);
    $msg .= str_replace("\r\n.", "\r\n..", $normalizedBody) . "\r\n";
    $msg .= '.';
    $w($msg);
    $response = $r();

    $w('QUIT');
    fclose($fp);

    $ok = isset($response[0]) && $response[0] === '2';
    return ['ok' => $ok, 'step' => 'done', 'log' => $log];
}

// ─── Send ─────────────────────────────────────────────────────────────────────
$from   = 'noreply@elites.ro';
$result = smtpSend($to, $subject, $body, $from, $email);

if ($result['ok']) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Trimiterea a eșuat. Te rugăm să ne contactezi direct.']);
}
