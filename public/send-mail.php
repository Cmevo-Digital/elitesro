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
    return htmlspecialchars(strip_tags(trim($v ?? '')));
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

    $subject = "Cerere Oferta Noua — {$name}";
    $body    = implode("\n", [
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
        "",
        "Detalii suplimentare:",
        $message,
    ]);
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

// ─── Send ─────────────────────────────────────────────────────────────────────
$headers  = "From: noreply@elites.ro\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Trimiterea a eșuat. Te rugăm să ne contactezi direct.']);
}
