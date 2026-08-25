import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { eventServiceSchema, safeStringify } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Organizare Evenimente Private & Petreceri",
  description:
    "Organizăm evenimente private de neuitat — aniversări, petreceri și reuniuni în București, Ilfov, Pitești și Ploiești. Mobilier, corturi, DJ și logistică completă.",
  alternates: { canonical: "/evenimente/private/" },
};

const privateFaqs = [
  {
    q: "Pot organiza o petrecere surpriză cu voi?",
    a: "Da, absolut. Discreția este una dintre valorile noastre. Putem livra și monta în avans, fără ca persoana sărăbătorită să știe. Coordonăm inclusiv intrarea echipei noastre pentru a nu strica surpriza.",
  },
  {
    q: "Organizați și petreceri pentru copii sau adolescenți?",
    a: "Da, avem experiență cu evenimente pentru toate vârstele. Pentru petreceri cu copii și adolescenți, recomandăm pachete care includ sistem audio adaptat, cabina foto și zone de lounge. Mobilierul se adaptează în funcție de vârsta participanților.",
  },
  {
    q: "Pot închiria doar un cort și sistem audio fără alte servicii?",
    a: "Da, poți alege exact ce ai nevoie — doar un cort, doar sistem audio sau orice combinație. Nu te obligăm la pachete complete. Fiecare ofertă este personalizată în funcție de cerințele tale specifice.",
  },
  {
    q: "Puteți organiza un eveniment privat într-un parc sau spațiu public?",
    a: "Da, avem experiență cu evenimente în parcuri și spații publice. În aceste cazuri, avem nevoie de acordul administratorului spațiului și de verificări tehnice suplimentare (sursă de energie, acces, autorizații).",
  },
];

const privateTestimonials = TESTIMONIALS.filter(
  (t) =>
    t.event.toLowerCase().includes("privat") ||
    t.event.toLowerCase().includes("aniversare"),
);

export default function PrivatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(
            eventServiceSchema({
              name: "Servicii Evenimente Private",
              description:
                "Organizăm evenimente private de neuitat — aniversări, petreceri și reuniuni în București, Ilfov, Pitești și Ploiești. Mobilier, corturi, DJ și logistică completă.",
              slug: "private",
            }),
          ),
        }}
      />
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
              Organizare Evenimente Private &amp; Închirieri Logistică în București și Ilfov
            </h1>
            <p className="mt-4 text-white/60 font-light max-w-lg">
              Aniversări, reuniuni de familie, petreceri tematice, tratăm
              fiecare eveniment privat cu aceeași atenție la detalii ca o nuntă
              sau un corporate.
            </p>
          </div>
        </div>

        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="overline-text text-gold mb-4">
                  Pentru evenimentul tău
                </p>
                <h2 className="font-display text-3xl text-obsidian mb-5">
                  Personalizat după viziunea ta
                </h2>
                <p className="text-charcoal/60 text-base leading-relaxed font-light mb-6">
                  Fiecare eveniment privat este unic. De la aniversări intime de
                  30 de persoane la petreceri de 100+ invitați în grădini
                  private sau săli închiriate, lucrăm cu tine să construim exact
                  setul de echipamente și servicii care se potrivesc bugetului
                  și viziunii tale. Fără pachete rigide, fără costuri inutile.
                </p>
                <p className="text-charcoal/60 text-base leading-relaxed font-light mb-6">
                  Oferim soluții complete în București, Ilfov, Pitești și
                  Ploiești — de la mobilier elegant și corturi premium la
                  sisteme audio, DJ, iluminat ambiental, cocktail bar și cabina
                  foto. Totul coordonat de o singură echipă, cu livrare, montaj
                  și demontaj incluse.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Mobilier pentru sală sau outdoor",
                    "Corturi pentru grădini și spații private",
                    "Veselă și accesorii de masă",
                    "DJ și muzică live setup",
                    "Iluminat decorativ și ambiental",
                    "Cocktail bar și barman",
                    "Cabina foto cu imprimare instantă",
                    "Logistică completă — livrare, montaj, demontaj",
                  ].map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 text-sm text-charcoal/70"
                    >
                      <span className="text-gold">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/cerere-oferta/"
                  data-gtm-id="page_cta_oferta"
                  data-gtm-location="private_page"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
                >
                  Solicită Ofertă
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1653821355692-03666613499f?w=900&auto=format&fit=crop&q=60"
                    alt="Decor eveniment privat"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-6">
                  <Image
                    src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=900&auto=format&fit=crop&q=60"
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

        {/* Client types */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3">Pentru cine</p>
            <h2 className="font-display text-3xl text-obsidian mb-8">
              Cui se adresează serviciile noastre
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Persoane care aniversează evenimente speciale (majorat, 30/40/50 ani)",
                "Familii care organizează reuniuni și petreceri în grădini sau case particulare",
                "Organizatori de petreceri tematice în spații închiriate (săli, cluburi, terase)",
                "Companii care organizează party-uri de echipă sau team building-uri private",
              ].map((ct) => (
                <div
                  key={ct}
                  className="flex items-start gap-3 p-5 bg-white rounded-sm border border-warm-dark"
                >
                  <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold text-xs">✓</span>
                  </span>
                  <p className="text-sm text-charcoal/70 font-light">{ct}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="section-padding bg-warm">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3 text-center">
              De ce să ne alegi
            </p>
            <h2 className="font-display text-3xl text-obsidian text-center mb-10">
              Numerele care contează
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Evenimente private", value: "150+" },
                { label: "Ani de experiență", value: "6+" },
                { label: "Orașe deservite", value: "4" },
                { label: "Recomandări", value: "94%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-charcoal/50 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-ivory">
          <div className="container-brand max-w-3xl">
            <p className="overline-text text-gold mb-3">Întrebări frecvente</p>
            <h2 className="font-display text-3xl text-obsidian mb-8">
              Evenimente private — FAQ
            </h2>
            <div className="divide-y divide-warm-dark">
              {privateFaqs.map((faq, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <span className="font-medium text-sm text-obsidian group-open:text-gold transition-colors">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-full border border-warm-dark flex items-center justify-center mt-0.5 group-open:border-gold transition-colors">
                      <svg
                        className="w-3 h-3 text-charcoal/60 group-open:text-gold group-open:rotate-45 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="pt-3 text-sm text-charcoal/60 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {privateTestimonials.length > 0 && (
          <section className="section-padding bg-warm">
            <div className="container-brand">
              <p className="overline-text text-gold mb-3 text-center">
                Recenzii
              </p>
              <h2 className="font-display text-3xl text-obsidian text-center mb-10">
                Ce spun clienții noștri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {privateTestimonials.slice(0, 2).map((t, i) => (
                  <div
                    key={i}
                    className="bg-white border border-warm-dark rounded-sm p-7"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="text-gold fill-gold"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-charcoal/70 leading-relaxed italic font-light mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-obsidian">
                      {t.name}
                    </p>
                    <p className="text-xs text-charcoal/40">
                      {t.event} · {t.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding bg-obsidian">
          <div className="container-brand text-center">
            <h2 className="font-display text-3xl text-white mb-4">
              Hai să organizăm evenimentul tău
            </h2>
            <p className="text-white/50 mb-8 font-light text-sm">
              Indiferent de dimensiune, fiecare eveniment privat merită execuție
              impecabilă.
            </p>
            <Link
              href="/cerere-oferta/"
              data-gtm-id="page_cta_oferta_final"
              data-gtm-location="private_page"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all"
            >
              Solicită Ofertă Gratuită
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
