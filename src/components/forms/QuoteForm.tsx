"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";
import { CheckCircle, Send } from "lucide-react";
import { activeServices } from "@/components/home/ServicesGrid";
import { serviceDetails } from "@/lib/services";
import { trackEvent } from "@/lib/gtag";

type FormData = {
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  services: string[];
  pricingPlans: Record<string, string>;
  durations: Record<string, string>;
  extras: Record<string, string[]>;
  pricingDetails: string[];
  name: string;
  phone: string;
  email: string;
  message: string;
  honeypot?: string;
};

function getPlanOptions(slug: string): string[] {
  const detail = serviceDetails[slug];
  const modelNames = detail?.models?.map((m) => m.name) ?? [];
  const packageNames = detail?.packages?.map((p) => p.name) ?? [];
  if (modelNames.length > 0 || packageNames.length > 0) {
    return [...modelNames, ...packageNames];
  }
  return detail?.plans?.map((p) => p.name) ?? [];
}

function getExtraOptions(slug: string): { name: string; range: string }[] {
  return serviceDetails[slug]?.extras ?? [];
}

const GUEST_COUNT_OPTIONS: { value: string; label: string }[] = [
  { value: "<25", label: "sub 25 invitați" },
  { value: "25-50", label: "25–50 invitați" },
  { value: "50-75", label: "50–75 invitați" },
  { value: "75-100", label: "75–100 invitați" },
  { value: "100-125", label: "100–125 invitați" },
  { value: "125-150", label: "125–150 invitați" },
  { value: "150+", label: "Peste 150 invitați" },
];

function parseGuestRange(
  guestCount: string,
): { min: number; max: number } | null {
  if (!guestCount) return null;
  if (guestCount === "<25") return { min: 1, max: 25 };
  if (guestCount === "150+") return { min: 150, max: 150 };
  const m = guestCount.match(/^(\d+)-(\d+)$/);
  if (!m) return null;
  return { min: parseInt(m[1], 10), max: parseInt(m[2], 10) };
}

// Services priced per guest instead of a flat fee — €/person by plan name.
// Approximate BNR EUR→RON reference rate; update periodically.
const EUR_TO_LEI = 5.05;
const PER_GUEST_EUR_PRICE: Record<string, Record<string, number>> = {
  "cocktail-bar": { Silver: 5, Gold: 10, Platinum: 15 },
};

function getPerGuestEurRate(slug: string, planName: string): number | null {
  return PER_GUEST_EUR_PRICE[slug]?.[planName] ?? null;
}

// Services priced per guest with a minimum spend, no plan selector — driven by
// serviceDetails[slug].pricingMinimum, defined in @/lib/services.
function getPricingMinimum(slug: string) {
  return serviceDetails[slug]?.pricingMinimum ?? null;
}

function getFlatMinimumRangeLei(
  slug: string,
  guestRange: { min: number; max: number } | null,
): { min: number; max: number } | null {
  const config = getPricingMinimum(slug);
  if (!config || !guestRange) return null;
  return {
    min: Math.max(config.minPriceLei, Math.round(guestRange.min * config.perGuestLei)),
    max: Math.max(config.minPriceLei, Math.round(guestRange.max * config.perGuestLei)),
  };
}

function getPerGuestPlanRangeLei(
  slug: string,
  planName: string,
  guestRange: { min: number; max: number } | null,
): { min: number; max: number } | null {
  const eurPerGuest = getPerGuestEurRate(slug, planName);
  if (eurPerGuest === null || !guestRange) return null;
  const leiPerGuest = eurPerGuest * EUR_TO_LEI;
  return {
    min: Math.round(guestRange.min * leiPerGuest),
    max: Math.round(guestRange.max * leiPerGuest),
  };
}

// Parses Romanian-formatted numbers: "1.100" (dot = thousands) or "2,5" (comma = decimal).
function parseLeiAmount(token: string): number | null {
  let t = token.trim();
  if (t.includes(",") && t.includes(".")) {
    t = t.replace(/\./g, "").replace(",", ".");
  } else if (t.includes(",")) {
    t = t.replace(",", ".");
  } else if (t.includes(".")) {
    const parts = t.split(".");
    if (parts.every((p, i) => (i === 0 ? p.length <= 3 : p.length === 3))) {
      t = parts.join("");
    }
  }
  const n = parseFloat(t);
  return Number.isNaN(n) ? null : n;
}

// Only handles flat lei amounts — skips per-unit rates like "2,5 – 3 lei / km".
function parsePriceRange(str: string): { min: number; max: number } | null {
  if (/km/i.test(str)) return null;
  const matches = str.match(/[\d.,]+/g);
  if (!matches) return null;
  const nums = matches
    .map(parseLeiAmount)
    .filter((n): n is number => n !== null);
  if (nums.length === 0) return null;
  return { min: Math.min(...nums), max: Math.max(...nums) };
}

function getPlanPrices(
  slug: string,
  planName: string,
): { duration: string; price: string }[] {
  const detail = serviceDetails[slug];
  return (
    detail?.models?.find((m) => m.name === planName)?.prices ??
    detail?.packages?.find((p) => p.name === planName)?.prices ??
    []
  );
}

function getPlanDurations(slug: string, planName: string): string[] {
  return getPlanPrices(slug, planName).map((p) => p.duration);
}

function getPlanPriceForDuration(
  slug: string,
  planName: string,
  duration: string,
): number | null {
  const entry = getPlanPrices(slug, planName).find(
    (p) => p.duration === duration,
  );
  if (!entry) return null;
  const range = parsePriceRange(entry.price);
  return range ? range.min : null;
}

function getPlanPriceRange(
  slug: string,
  planName: string,
): { min: number; max: number } | null {
  const source = getPlanPrices(slug, planName);
  if (source.length === 0) return null;
  const ranges = source
    .map((p) => parsePriceRange(p.price))
    .filter((r): r is { min: number; max: number } => r !== null);
  if (ranges.length === 0) return null;
  return {
    min: Math.min(...ranges.map((r) => r.min)),
    max: Math.max(...ranges.map((r) => r.max)),
  };
}

function getExtraPriceRange(
  slug: string,
  extraName: string,
): { min: number; max: number } | null {
  const extra = serviceDetails[slug]?.extras?.find((e) => e.name === extraName);
  return extra ? parsePriceRange(extra.range) : null;
}

function formatLei(n: number): string {
  return `${Math.round(n).toLocaleString("ro-RO")} lei`;
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      services: [],
      pricingPlans: {},
      durations: {},
      extras: {},
    },
  });

  const selectedServices = watch("services") || [];
  const selectedExtras = watch("extras") || {};
  const selectedPlans = watch("pricingPlans") || {};
  const selectedDurations = watch("durations") || {};
  const guestCount = watch("guestCount") || "";
  const guestRange = parseGuestRange(guestCount);
  const guestCountLabel = GUEST_COUNT_OPTIONS.find(
    (o) => o.value === guestCount,
  )?.label;

  const estimate = (() => {
    let min = 0;
    let max = 0;
    let hasPriced = false;
    let hasUnpriced = false;
    const details: string[] = [];

    for (const title of selectedServices) {
      const service = activeServices.find((s) => s.title === title);
      if (!service) continue;

      const planName = selectedPlans[title];
      let planRange: { min: number; max: number } | null = null;
      if (planName) {
        const duration = selectedDurations[title];
        const exact = duration
          ? getPlanPriceForDuration(service.slug, planName, duration)
          : null;
        if (exact !== null) {
          planRange = { min: exact, max: exact };
        } else {
          planRange = getPlanPriceRange(service.slug, planName);
          if (!planRange) {
            planRange = getPerGuestPlanRangeLei(
              service.slug,
              planName,
              guestRange,
            );
            if (planRange && guestCountLabel) {
              const eurRate = getPerGuestEurRate(service.slug, planName);
              details.push(
                `${title} — ${planName}: ${eurRate} €/persoană × ${guestCountLabel} ≈ ${formatLei(planRange.min)}${
                  planRange.min === planRange.max
                    ? ""
                    : ` – ${formatLei(planRange.max)}`
                }`,
              );
            }
          }
        }
      }
      if (!planRange) {
        const flatRange = getFlatMinimumRangeLei(service.slug, guestRange);
        if (flatRange) {
          planRange = flatRange;
          if (guestCountLabel) {
            const config = getPricingMinimum(service.slug)!;
            details.push(
              `${title}: minim ${formatLei(config.minPriceLei)} (până la ${config.minGuests} invitați) — estimare pentru ${guestCountLabel} ≈ ${formatLei(flatRange.min)}${
                flatRange.min === flatRange.max
                  ? ""
                  : ` – ${formatLei(flatRange.max)}`
              }`,
            );
          }
        }
      }
      if (planRange) {
        min += planRange.min;
        max += planRange.max;
        hasPriced = true;
      } else {
        hasUnpriced = true;
      }

      for (const extraName of selectedExtras[title] || []) {
        const extraRange = getExtraPriceRange(service.slug, extraName);
        if (extraRange) {
          min += extraRange.min;
          max += extraRange.max;
          hasPriced = true;
        } else {
          hasUnpriced = true;
        }
      }
    }

    if (!hasPriced) return null;
    return { min, max, hasUnpriced, details };
  })();

  const estimateLabel = estimate
    ? estimate.min === estimate.max
      ? formatLei(estimate.min)
      : `${formatLei(estimate.min)} – ${formatLei(estimate.max)}`
    : "";

  const toggleService = (s: string) => {
    const current = selectedServices;
    if (current.includes(s)) {
      setValue(
        "services",
        current.filter((x) => x !== s),
      );
    } else {
      setValue("services", [...current, s]);
    }
  };

  const toggleExtra = (title: string, extraName: string) => {
    const current = selectedExtras[title] || [];
    const next = current.includes(extraName)
      ? current.filter((x) => x !== extraName)
      : [...current, extraName];
    setValue("extras", { ...selectedExtras, [title]: next });
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: "quote",
          estimatedPrice: estimateLabel,
          pricingDetails: estimate?.details ?? [],
        }),
      });
      const result = await res.json();
      if (!res.ok || result.error) throw new Error(result.error);
      setSubmitted(true);
      trackEvent("generate_lead", { form_name: "quote_form" });
    } catch {
      alert("A apărut o eroare. Te rugăm să ne contactezi direct pe WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
          <CheckCircle size={28} className="text-gold" />
        </div>
        <h3 className="font-display text-2xl text-obsidian">
          Cererea ta a fost trimisă!
        </h3>
        <p className="text-charcoal/60 text-sm max-w-sm leading-relaxed">
          Îți mulțumim. Îți vom răspunde în maxim 2 ore în ziua lucrătoare.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-whatsapp text-white text-[11px] font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition"
        >
          Contactează-ne și pe WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Honeypot — invisible to real users, bots fill it in */}
      <input
        type="text"
        {...register("honeypot")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
      />
      {/* Step 1: Event basics */}
      <div>
        <p className="overline-text text-gold text-[10px] mb-5">
          01 — Detalii eveniment
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Tip eveniment *
            </label>
            <select
              {...register("eventType", { required: true })}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian focus:outline-none focus:border-gold transition-colors duration-200"
            >
              <option value="">Selectează...</option>
              <option value="nunta">Nuntă</option>
              <option value="corporate">Eveniment Corporate</option>
              <option value="privat">Eveniment Privat</option>
              <option value="aniversare">Aniversare</option>
              <option value="altul">Alt tip</option>
            </select>
            {errors.eventType && (
              <p className="text-xs text-red-500 mt-1">Câmp obligatoriu</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Data evenimentului *
            </label>
            <input
              type="date"
              {...register("eventDate", { required: true })}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian focus:outline-none focus:border-gold transition-colors duration-200"
            />
            {errors.eventDate && (
              <p className="text-xs text-red-500 mt-1">Câmp obligatoriu</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Număr invitați
            </label>
            <select
              {...register("guestCount")}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian focus:outline-none focus:border-gold transition-colors duration-200"
            >
              <option value="">Selectează...</option>
              {GUEST_COUNT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Locație
            </label>
            <select
              {...register("location")}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian focus:outline-none focus:border-gold transition-colors duration-200"
            >
              <option value="">Selectează...</option>
              <option value="bucuresti">București</option>
              <option value="ilfov">Ilfov</option>
              <option value="pitesti">Pitești</option>
              <option value="ploiesti">Ploiești</option>
              <option value="dambovita">Dâmbovița</option>
              <option value="alta">Altă locație</option>
            </select>
          </div>
        </div>
      </div>

      {/* Step 2: Services */}
      <div>
        <p className="overline-text text-gold text-[10px] mb-5">
          02 — Servicii dorite
        </p>
        <div className="flex flex-wrap gap-2">
          {activeServices.map(({ title }) => (
            <button
              key={title}
              type="button"
              onClick={() => toggleService(title)}
              className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
                selectedServices.includes(title)
                  ? "bg-obsidian text-white border-obsidian"
                  : "bg-white text-charcoal/70 border-warm-dark hover:border-obsidian"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {selectedServices.map((title) => {
          const service = activeServices.find((s) => s.title === title);
          if (!service) return null;
          const planOptions = getPlanOptions(service.slug);
          const extraOptions = getExtraOptions(service.slug);
          const hasFlatPricing = Boolean(getPricingMinimum(service.slug));
          if (
            planOptions.length === 0 &&
            extraOptions.length === 0 &&
            !hasFlatPricing
          )
            return null;
          return (
            <div key={service.slug} className="mt-4 space-y-4">
              {planOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
                    Pachet dorit pentru {title}{" "}
                    <span className="text-charcoal/40">(opțional)</span>
                  </label>
                  <select
                    {...register(`pricingPlans.${title}`)}
                    className="w-full sm:w-72 px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian focus:outline-none focus:border-gold transition-colors duration-200"
                  >
                    <option value="">Nu știu încă / recomandați-mi</option>
                    {planOptions.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {(() => {
                const planName = selectedPlans[title];
                const durations = planName
                  ? getPlanDurations(service.slug, planName)
                  : [];
                if (durations.length === 0) return null;
                const chosenDuration = selectedDurations[title];
                const exactPrice = chosenDuration
                  ? getPlanPriceForDuration(
                      service.slug,
                      planName,
                      chosenDuration,
                    )
                  : null;
                return (
                  <div>
                    <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
                      Durată dorită pentru {title}{" "}
                      <span className="text-charcoal/40">(opțional)</span>
                    </label>
                    <select
                      {...register(`durations.${title}`)}
                      className="w-full sm:w-72 px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian focus:outline-none focus:border-gold transition-colors duration-200"
                    >
                      <option value="">Selectează durata</option>
                      {durations.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    {exactPrice !== null && (
                      <p className="mt-2 text-sm text-gold font-semibold">
                        Preț: {formatLei(exactPrice)}
                      </p>
                    )}
                  </div>
                );
              })()}

              {(() => {
                const flatConfig = getPricingMinimum(service.slug);
                if (!flatConfig) return null;
                const flatRange = getFlatMinimumRangeLei(
                  service.slug,
                  guestRange,
                );
                return (
                  <p className="text-xs text-charcoal/50 font-light">
                    Tarif: {flatConfig.perGuestLei} lei / persoană · preț minim{" "}
                    {formatLei(flatConfig.minPriceLei)}, până la{" "}
                    {flatConfig.minGuests} de invitați
                    {flatRange ? (
                      <>
                        {" "}
                        · Estimare pentru {guestCountLabel}:{" "}
                        <span className="text-gold font-semibold">
                          {flatRange.min === flatRange.max
                            ? formatLei(flatRange.min)
                            : `${formatLei(flatRange.min)} – ${formatLei(flatRange.max)}`}
                        </span>
                      </>
                    ) : (
                      " · selectează numărul de invitați pentru o estimare"
                    )}
                  </p>
                );
              })()}

              {(() => {
                const planName = selectedPlans[title];
                const eurRate = planName
                  ? getPerGuestEurRate(service.slug, planName)
                  : null;
                if (eurRate === null) return null;
                const range = getPerGuestPlanRangeLei(
                  service.slug,
                  planName,
                  guestRange,
                );
                return (
                  <p className="text-xs text-charcoal/50 font-light">
                    Tarif {planName}: {eurRate} € / persoană
                    {range ? (
                      <>
                        {" "}
                        · Estimare pentru {guestCountLabel}:{" "}
                        <span className="text-gold font-semibold">
                          {range.min === range.max
                            ? formatLei(range.min)
                            : `${formatLei(range.min)} – ${formatLei(range.max)}`}
                        </span>
                      </>
                    ) : (
                      " · selectează numărul de invitați pentru o estimare"
                    )}
                  </p>
                );
              })()}

              {extraOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
                    Opțiuni suplimentare pentru {title}{" "}
                    <span className="text-charcoal/40">(opțional)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {extraOptions.map((extra) => {
                      const active = (selectedExtras[title] || []).includes(
                        extra.name,
                      );
                      return (
                        <button
                          key={extra.name}
                          type="button"
                          onClick={() => toggleExtra(title, extra.name)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                            active
                              ? "bg-obsidian text-white border-obsidian"
                              : "bg-white text-charcoal/70 border-warm-dark hover:border-obsidian"
                          }`}
                        >
                          {extra.name}{" "}
                          <span
                            className={
                              active ? "text-white/60" : "text-charcoal/40"
                            }
                          >
                            · {extra.range}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step 3: Contact */}
      <div>
        <p className="overline-text text-gold text-[10px] mb-5">
          03 — Date de contact
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Nume complet *
            </label>
            <input
              type="text"
              placeholder="Numele tău"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">Câmp obligatoriu</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Telefon / WhatsApp *
            </label>
            <input
              type="tel"
              placeholder="+40 7XX XXX XXX"
              {...register("phone", { required: true })}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">Câmp obligatoriu</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="email@exemplu.ro"
              {...register("email")}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
              Detalii suplimentare
            </label>
            <textarea
              rows={3}
              placeholder="Spune-ne mai multe despre evenimentul tău..."
              {...register("message")}
              className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
            />
          </div>
        </div>
      </div>

      {estimate && (
        <div className="bg-obsidian rounded-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="overline-text text-gold text-[10px] mb-1">
              Estimare preț
            </p>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Orientativ, pe baza opțiunilor selectate
              {estimate.hasUnpriced &&
                " — unele servicii nu au preț fix și necesită ofertă personalizată"}
              .
            </p>
          </div>
          <p className="font-display text-2xl text-white shrink-0">
            {estimateLabel}
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105"
        >
          {loading ? (
            "Se trimite..."
          ) : (
            <>
              <Send size={13} />
              Trimite Cererea
            </>
          )}
        </button>
        <p className="text-xs text-charcoal/40">
          Gratuit, fără obligații · Răspuns în maxim 2 ore
        </p>
      </div>
    </form>
  );
}
