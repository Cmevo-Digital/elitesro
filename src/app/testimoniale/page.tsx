import type { Metadata } from "next";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoniale — Ce Spun Clienții Noștri",
  description:
    "Recenzii reale de la clienții Elites Events — nunți, corporate și evenimente private în București, Ilfov, Pitești și Ploiești.",
  alternates: { canonical: "/testimoniale/" },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-obsidian pt-28 pb-16">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">Testimoniale</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-xl leading-tight">
            Ce spun clienții noștri
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-white/50 text-sm">
              Rating 5★ Google · {TESTIMONIALS.length}+ recenzii
            </p>
          </div>
        </div>
      </div>

      <div className="container-brand section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-warm-dark rounded-sm p-7 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-sm text-charcoal/70 leading-relaxed italic font-light flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-warm-dark pt-4">
                <p className="text-xs font-semibold text-obsidian">{t.name}</p>
                <p className="text-xs text-charcoal/40 mt-0.5">
                  {t.event} · {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-warm rounded-sm p-10 text-center">
          <p className="font-display text-2xl text-obsidian mb-3">
            Vrei să fii următorul eveniment reușit?
          </p>
          <p className="text-sm text-charcoal/60 mb-6 font-light">
            Solicită oferta gratuită și descoperă de ce clienții noștri ne
            recomandă.
          </p>
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-white text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-charcoal transition-all duration-300 hover:scale-105"
          >
            Solicită Ofertă Gratuită
          </Link>
        </div>
      </div>
    </div>
  );
}
