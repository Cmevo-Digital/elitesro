"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";
import { CheckCircle, Send } from "lucide-react";

type FormData = {
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  services: string[];
  name: string;
  phone: string;
  email: string;
  message: string;
  honeypot?: string;
};

const serviceOptions = [
  "Mobilier Evenimente",
  "Corturi & Structuri",
  "Mese & Scaune",
  "Veselă & Tacâmuri",
  "Iluminat & Atmosferă",
  "DJ & Sisteme Audio",
  "Logistică Completă",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { services: [] } });

  const selectedServices = watch("services") || [];

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

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "quote" }),
      });
      const result = await res.json();
      if (!res.ok || result.error) throw new Error(result.error);
      setSubmitted(true);
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
              <option value="<25">sub 25 invitați</option>
              <option value="25-50">25–50 invitați</option>
              <option value="50-75">50–75 invitați</option>
              <option value="75-100">75–100 invitați</option>
              <option value="100-125">100–125 invitați</option>
              <option value="125-150">125–150 invitați</option>
              <option value="150+">Peste 150 invitați</option>
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
          {serviceOptions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleService(s)}
              className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
                selectedServices.includes(s)
                  ? "bg-obsidian text-white border-obsidian"
                  : "bg-white text-charcoal/70 border-warm-dark hover:border-obsidian"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
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
