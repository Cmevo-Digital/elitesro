import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Cerere Ofertă Gratuită",
  description:
    "Solicită o ofertă gratuită pentru evenimentul tău. Mobilier, corturi, veselă, DJ și logistică în București, Ilfov și Pitești.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <div className="bg-obsidian pt-28 pb-16">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">Ofertă Gratuită</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-2xl leading-tight">
            Spune-ne despre evenimentul tău
          </h1>
          <p className="mt-4 text-white/50 text-base font-light max-w-xl">
            Completează formularul și primești oferta personalizată în maxim 2
            ore în zilele lucrătoare. Complet gratuit, fără obligații.
          </p>
        </div>
      </div>

      <div className="container-brand py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-sm p-8 md:p-10 shadow-card">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-warm rounded-sm p-6">
              <p className="overline-text text-gold text-[10px] mb-4">
                Contact direct
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-charcoal hover:text-gold transition-colors group"
                >
                  <Phone size={15} className="text-gold shrink-0" />
                  {BRAND.phone}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-sm text-charcoal hover:text-gold transition-colors"
                >
                  <Mail size={15} className="text-gold shrink-0" />
                  {BRAND.email}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-2 px-5 py-3 bg-whatsapp text-white text-[11px] font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition w-full justify-center"
                >
                  Scrie-ne pe WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-sm p-6 border border-warm-dark">
              <p className="overline-text text-gold text-[10px] mb-4">
                Ce include oferta
              </p>
              <ul className="space-y-2.5">
                {[
                  "Lista completă de echipamente disponibile",
                  "Prețuri transparente, fără costuri ascunse",
                  "Opțiuni de pachete și personalizare",
                  "Detalii logistice (livrare, montaj, demontaj)",
                  "Disponibilitate pentru data ta",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-charcoal/70">
                    <span className="text-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-charcoal/40 text-center">
              Răspundem Luni–Sâmbătă, 9:00–19:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
