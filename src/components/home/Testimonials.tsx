"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-charcoal overflow-hidden">
      <div className="container-brand">
        <AnimatedSection className="mb-12 text-center">
          <p className="overline-text text-gold">Testimoniale</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
            Povestite de cei care au trăit experiența
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="relative bg-white/5 border border-white/8 rounded-sm p-8 md:p-12">
              {/* Quote mark */}
              <span className="font-display text-8xl text-gold/20 leading-none absolute top-4 left-8 select-none pointer-events-none">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                key={current}
                className="font-display text-lg md:text-xl text-white/90 leading-relaxed italic"
                style={{ animation: "fadeInUp 0.4s ease forwards" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">
                    {t.event} · {t.location}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-gold transition-colors duration-200"
                    aria-label="Testimonial anterior"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-xs text-white/30 tabular-nums">
                    {current + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-gold transition-colors duration-200"
                    aria-label="Testimonial următor"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
