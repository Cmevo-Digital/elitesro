import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicii Nunți — Mobilier, Corturi & Logistică",
  description:
    "Servicii complete pentru nunți de 50–150 invitați în București, Ilfov și Pitești. Mobilier premium, corturi, veselă, DJ și logistică completă.",
};

const weddingServices = [
  "Mobilier premium (mese, scaune, cocktail tables)",
  "Corturi elegante pentru nunți outdoor",
  "Veselă, pahare și tacâmuri complete",
  "Iluminat ambiental și decorativ",
  "DJ și sisteme audio profesionale",
  "Logistică completă — livrare, montaj, demontaj",
  "Parteneri foto/video (la cerere)",
  "Cocktail bar (la cerere)",
];

const weddingTestimonials = TESTIMONIALS.filter(
  (t) => t.event.toLowerCase().includes("nunt")
);

export default function WeddingsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Nuntă elegantă — Elites Events"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-obsidian/30" />
        </div>
        <div className="relative container-brand pb-14 pt-28">
          <p className="overline-text text-gold mb-3">Nunți</p>
          <h1 className="font-display text-4xl md:text-6xl text-white max-w-2xl leading-tight">
            Ziua ta cea mai importantă, executată perfect.
          </h1>
          <p className="mt-4 text-white/60 font-light max-w-lg">
            De la masa de onoare la ultimul scaun din sală — ne ocupăm de
            fiecare detaliu logistic pentru ca tu să trăiești momentul.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="overline-text text-gold mb-4">Ce oferim</p>
              <h2 className="font-display text-3xl md:text-4xl text-obsidian mb-6 leading-tight">
                Tot ce ai nevoie pentru nunta ta
              </h2>
              <ul className="space-y-3">
                {weddingServices.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/cerere-oferta"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
                >
                  Solicită Ofertă pentru Nuntă
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1200&auto=format&fit=crop"
                alt="Aranjament nuntă Elites Events"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="section-padding bg-warm">
        <div className="container-brand text-center">
          <p className="overline-text text-gold mb-3">De ce să ne alegi</p>
          <h2 className="font-display text-3xl text-obsidian mb-10">
            Nunta ta, execuția noastră
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              {
                title: "50–150 invitați",
                text: "Experiență vastă în nunți de orice dimensiune în intervalul nostru de operare.",
              },
              {
                title: "Livrare cu 24h înainte",
                text: "Montăm în avans pentru ca tu să poți verifica și ajusta înainte de eveniment.",
              },
              {
                title: "Demontaj rapid",
                text: "Ne ocupăm de strâns după eveniment — fără stres pentru tine sau familia ta.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-sm">
                <h3 className="font-display text-lg text-gold mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/60 font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {weddingTestimonials.length > 0 && (
        <section className="section-padding bg-obsidian">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3 text-center">Recenzii</p>
            <h2 className="font-display text-3xl text-white text-center mb-10">
              Ce spun cuplurile care ne-au ales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {weddingTestimonials.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-sm p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed italic font-light mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-xs font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.event} · {t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-ivory">
        <div className="container-brand text-center">
          <h2 className="font-display text-3xl text-obsidian mb-4">
            Hai să planificăm nunta ta
          </h2>
          <p className="text-charcoal/50 mb-8 font-light">
            Consultație gratuită, fără obligații. Răspundem în maxim 2 ore.
          </p>
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-white text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-charcoal transition-all duration-300 hover:scale-105"
          >
            Solicită Ofertă Gratuită
          </Link>
        </div>
      </section>
    </div>
  );
}
