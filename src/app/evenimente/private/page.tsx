import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evenimente Private — Aniversări & Petreceri Speciale",
  description:
    "Organizăm evenimente private de neuitat — aniversări, petreceri și reuniuni în București, Ilfov și Pitești. Mobilier, corturi, DJ și logistică completă.",
};

export default function PrivatePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop"
            alt="Eveniment privat — Elites Events"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-obsidian/30" />
        </div>
        <div className="relative container-brand pb-14 pt-28">
          <p className="overline-text text-gold mb-3">Evenimente Private</p>
          <h1 className="font-display text-4xl md:text-6xl text-white max-w-2xl leading-tight">
            Momentele speciale merită o execuție deosebită.
          </h1>
          <p className="mt-4 text-white/60 font-light max-w-lg">
            Aniversări, reuniuni de familie, petreceri tematice — tratăm fiecare
            eveniment privat cu aceeași atenție la detalii ca o nuntă sau un corporate.
          </p>
        </div>
      </div>

      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="overline-text text-gold mb-4">Pentru evenimentul tău</p>
              <h2 className="font-display text-3xl text-obsidian mb-5">
                Personalizat după viziunea ta
              </h2>
              <p className="text-charcoal/60 text-sm leading-relaxed font-light mb-6">
                Fiecare eveniment privat este unic. Lucrăm cu tine să construim exact
                setul de echipamente și servicii care se potrivesc bugetului și
                viziunii tale — fără pachete rigide, fără costuri inutile.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Mobilier pentru sală sau outdoor",
                  "Corturi pentru grădini și spații private",
                  "Veselă și accesorii de masă",
                  "DJ și muzică live setup",
                  "Iluminat decorativ și ambiental",
                  "Logistică completă",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                    <span className="text-gold">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="/cerere-oferta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
              >
                Solicită Ofertă
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop"
                  alt="Decor eveniment privat"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
                  alt="Masă elegantă petrecere privată"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-obsidian">
        <div className="container-brand text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Hai să organizăm evenimentul tău
          </h2>
          <p className="text-white/50 mb-8 font-light text-sm">
            Indiferent de dimensiune, fiecare eveniment privat merită execuție impecabilă.
          </p>
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all"
          >
            Solicită Ofertă Gratuită
          </Link>
        </div>
      </section>
    </div>
  );
}
