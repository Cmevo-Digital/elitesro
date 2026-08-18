"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

interface Props {
  faqs: Faq[];
  whatsappUrl: string;
}

export default function FaqAccordion({ faqs, whatsappUrl }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-obsidian pt-28 pb-16">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">FAQ</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-xl leading-tight">
            Întrebări frecvente
          </h1>
          <p className="mt-4 text-white/50 font-light">
            Răspunsuri la cele mai comune întrebări. Dacă nu găsești ce cauți, scrie-ne.
          </p>
        </div>
      </div>

      <div className="container-brand section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-warm-dark">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <span className="font-medium text-obsidian text-sm leading-relaxed group-hover:text-gold transition-colors">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-warm-dark flex items-center justify-center mt-0.5 group-hover:border-gold transition-colors">
                    {open === i ? (
                      <Minus size={12} className="text-gold" />
                    ) : (
                      <Plus size={12} className="text-charcoal/60" />
                    )}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? "300px" : "0px", opacity: open === i ? 1 : 0 }}
                >
                  <p className="pt-3 text-sm text-charcoal/60 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-warm rounded-sm text-center">
            <p className="font-display text-xl text-obsidian mb-2">
              Nu ai găsit răspunsul?
            </p>
            <p className="text-sm text-charcoal/60 mb-6">
              Scrie-ne direct și îți răspundem în maxim 2 ore în zilele lucrătoare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact/"
                className="px-6 py-3 bg-obsidian text-white text-[11px] font-semibold tracking-widest uppercase rounded-full hover:bg-charcoal transition"
              >
                Trimite Întrebare
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm-id="page_whatsapp"
                data-gtm-location="faq_page"
                className="px-6 py-3 bg-whatsapp text-white text-[11px] font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
