import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Building2, Users, Zap } from "lucide-react";
import { eventServiceSchema, safeStringify } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Evenimente Corporate — Logistică & Echipamente Profesionale",
  description:
    "Organizăm evenimente corporate profesionale în București, Ilfov, Pitești și Ploiești. Mobilier, sisteme audio, iluminat și logistică pentru conferințe, gale și teambuilding.",
  alternates: { canonical: "/evenimente/corporate/" },
};

const corporateServices = [
  "Setup complet pentru conferințe și seminarii",
  "Mobilier elegant pentru gale și dinner de business",
  "Sisteme audio și video profesionale",
  "Iluminat tehnic și ambiental",
  "Corturi și structuri pentru evenimente outdoor",
  "Logistică completă — livrare, montaj, demontaj",
  "Coordonare multi-furnizor la cerere",
];

const corporateTestimonials = TESTIMONIALS.filter(
  (t) =>
    t.event.toLowerCase().includes("corporate") ||
    t.event.toLowerCase().includes("privat"),
);

export default function CorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(
            eventServiceSchema({
              name: "Servicii Evenimente Corporate",
              description:
                "Organizăm evenimente corporate profesionale în București, Ilfov, Pitești și Ploiești. Mobilier, sisteme audio, iluminat și logistică pentru conferințe, gale și teambuilding.",
              slug: "corporate",
            })
          ),
        }}
      />
      <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
            alt="Eveniment corporate — Elites Events"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-obsidian/30" />
        </div>
        <div className="relative container-brand pb-14 pt-28">
          <p className="overline-text text-gold mb-3">Corporate</p>
          <h1 className="font-display text-4xl md:text-6xl text-white max-w-2xl leading-tight">
            Evenimente corporate executate cu precizie.
          </h1>
          <p className="mt-4 text-white/60 font-light max-w-lg">
            Conferințe, gale, teambuilding-uri sau lansări de produs — asigurăm
            logistica pentru ca tu să te concentrezi pe conținut.
          </p>
        </div>
      </div>

      {/* USPs */}
      <section className="bg-white border-b border-warm-dark">
        <div className="container-brand py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Setup profesional",
                text: "Echipamente de calitate pentru un ambient care reflectă standardele companiei tale.",
              },
              {
                icon: Users,
                title: "50–150 participanți",
                text: "Experiență dovedită în evenimente de business de orice dimensiune.",
              },
              {
                icon: Zap,
                title: "Execuție rapidă",
                text: "Livrare și montaj eficient, fără perturbarea activității de business.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3 p-4">
                  <div className="w-9 h-9 rounded-full bg-warm flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-obsidian mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal/60 font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1752766074168-44afdbaaf390?w=900&auto=format&fit=crop&q=60"
                alt="Eveniment corporate setup"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <p className="overline-text text-gold mb-4">Servicii corporate</p>
              <h2 className="font-display text-3xl text-obsidian mb-6">
                Tot ce are nevoie un eveniment de business
              </h2>
              <ul className="space-y-3">
                {corporateServices.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 text-sm text-charcoal/70"
                  >
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="/cerere-oferta"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
              >
                Solicită Ofertă Corporate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-warm">
        <div className="container-brand">
          <p className="overline-text text-gold mb-3 text-center">Recenzii</p>
          <h2 className="font-display text-3xl text-obsidian text-center mb-10">
            Parteneri de business care ne-au ales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {corporateTestimonials.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="bg-white border border-warm-dark rounded-sm p-7"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed italic font-light mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs font-semibold text-obsidian">{t.name}</p>
                <p className="text-xs text-charcoal/40">
                  {t.event} · {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-obsidian">
        <div className="container-brand text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Planifici un eveniment corporate?
          </h2>
          <p className="text-white/50 mb-8 font-light">
            Solicită oferta și un specialist te contactează în 2 ore.
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
    </>
  );
}
