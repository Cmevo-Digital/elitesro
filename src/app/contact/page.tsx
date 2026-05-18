import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează Elites Events pentru evenimentul tău. Suntem disponibili în București, Ilfov, Pitești și Ploiești.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-obsidian pt-28 pb-16">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">Contact</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-xl leading-tight">
            Hai să discutăm despre evenimentul tău
          </h1>
        </div>
      </div>

      <div className="container-brand py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="overline-text text-gold text-[10px] mb-6">
                Informații de contact
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/50 mb-0.5">
                      Telefon & WhatsApp
                    </p>
                    <a
                      href={`tel:${BRAND.phoneRaw}`}
                      className="text-sm font-medium text-obsidian hover:text-gold transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/50 mb-0.5">Email</p>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-sm font-medium text-obsidian hover:text-gold transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/50 mb-0.5">
                      Zone de operare
                    </p>
                    <p className="text-sm font-medium text-obsidian">
                      {BRAND.locationsShort}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center shrink-0">
                    <Clock size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/50 mb-0.5">Program</p>
                    <p className="text-sm font-medium text-obsidian">
                      Luni – Sâmbătă, 9:00–19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp text-white text-[11px] font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactează-ne pe WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="bg-white rounded-sm p-8 shadow-card">
            <p className="overline-text text-gold text-[10px] mb-6">
              Trimite un mesaj
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
