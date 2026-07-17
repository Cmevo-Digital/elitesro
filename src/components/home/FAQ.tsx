"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: header + CTA */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                overline="FAQ"
                title="Întrebări frecvente"
                subtitle="Răspunsuri rapide la cele mai comune întrebări. Nu găsești ce cauți? Scrie-ne direct."
              />
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="/cerere-oferta"
                  data-gtm-id="page_cta_oferta"
                  data-gtm-location="home_faq"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-white text-[11px] font-semibold tracking-[0.14em] uppercase rounded-full hover:bg-charcoal transition-all duration-300 w-fit"
                >
                  Solicită Ofertă Gratuită
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/60 hover:text-gold transition-colors duration-200 group w-fit"
                >
                  Ai alte întrebări? Scrie-ne
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: accordion */}
          <AnimatedSection delay={100}>
            <div className="divide-y divide-warm-dark">
              {FAQS.map((faq, i) => (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                    aria-expanded={open === i}
                  >
                    <span className="font-medium text-obsidian text-sm leading-relaxed group-hover:text-gold transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-full border border-warm-dark flex items-center justify-center mt-0.5 transition-colors duration-200 group-hover:border-gold">
                      {open === i ? (
                        <Minus size={12} className="text-gold" />
                      ) : (
                        <Plus size={12} className="text-charcoal/60" />
                      )}
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: open === i ? "300px" : "0px",
                      opacity: open === i ? 1 : 0,
                    }}
                  >
                    <p className="pt-3 text-sm text-charcoal/60 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
