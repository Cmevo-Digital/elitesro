import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EVENT_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Evenimente — Nunți, Corporate & Private",
  description:
    "Descoperă cum Elites Events transformă orice eveniment în o experiență memorabilă — nunți, corporate, private. Livrare, montaj și logistică completă în București, Ilfov, Pitești și Ploiești.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="bg-obsidian pt-28 pb-16">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">Evenimente</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-2xl leading-tight">
            Fiecare eveniment are povestea lui.
          </h1>
          <p className="mt-4 text-white/50 font-light max-w-xl">
            Nunți, gale corporate sau petreceri private — aducem aceeași atenție
            la detalii, indiferent de tipul evenimentului tău.
          </p>
        </div>
      </div>

      {/* Event type cards */}
      <section className="container-brand section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENT_TYPES.map((event) => (
            <Link
              key={event.slug}
              href={event.href}
              className="group relative rounded-sm overflow-hidden block aspect-[3/4]"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="overline-text text-gold text-[10px] mb-2">
                  {event.slug.charAt(0).toUpperCase() + event.slug.slice(1)}
                </p>
                <h2 className="font-display text-2xl text-white mb-2 leading-tight">
                  {event.title}
                </h2>
                <p className="text-sm text-white/70 font-light leading-relaxed mb-4">
                  {event.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-3 transition-all duration-300">
                  Descoperă <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm section-padding">
        <div className="container-brand text-center max-w-2xl mx-auto">
          <p className="overline-text text-gold mb-4">Hai să lucrăm împreună</p>
          <h2 className="font-display text-3xl md:text-4xl text-obsidian mb-5 leading-tight">
            Nu știi exact de ce ai nevoie? Hai să discutăm.
          </h2>
          <p className="text-charcoal/60 font-light mb-8">
            Îți oferim o consultație gratuită și o ofertă personalizată în
            funcție de evenimentul tău, indiferent de tip sau dimensiune.
          </p>
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Solicită Ofertă Gratuită
          </Link>
        </div>
      </section>
    </div>
  );
}
