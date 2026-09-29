import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Sparkles,
  ClipboardList,
  Truck,
  PartyPopper,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { eventServiceSchema, faqPageSchema, safeStringify } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Organizare Evenimente Private & Petreceri București & Ilfov",
  description:
    "Organizare evenimente private și petreceri în București și Ilfov. Închiriere logistică completă: cocktail bar, sonorizare DJ, cabină foto și coffee corner. Cere ofertă!",
  alternates: { canonical: "/evenimente/private/" },
};

const privatePackages = [
  {
    name: "Intim",
    guests: "până la 40 invitați",
    content:
      "Aniversări de familie, majorat sau reuniuni restrânse în curte, apartament sau grădină.",
    items: [
      "Sistem audio compact + microfon",
      "Iluminat decorativ ambiental",
      "Coffee corner cu barista (opțional)",
    ],
  },
  {
    name: "Standard",
    guests: "40–80 invitați",
    content:
      "Petreceri tematice sau aniversări mai ample, în curte privată, terasă sau sală închiriată.",
    items: [
      "DJ și sistem audio profesional",
      "Cabina foto cu imprimare instantă",
      "Iluminat ambiental pentru sală sau outdoor",
    ],
  },
  {
    name: "Deluxe",
    guests: "80–150+ invitați",
    content:
      "Petreceri de lux și evenimente exclusiviste care cer execuție la nivel de nuntă sau eveniment corporate.",
    items: [
      "Cocktail bar cu barman profesionist",
      "DJ curator și iluminat scenic",
      "Cabina foto premium cu template personalizat",
      "Coffee corner cu barista dedicat",
    ],
  },
];

const privateProcess = [
  {
    icon: ClipboardList,
    title: "1. Consultare",
    text: "Ne spui tipul de petrecere, numărul de invitați, locația și bugetul orientativ.",
  },
  {
    icon: Sparkles,
    title: "2. Ofertă personalizată",
    text: "Îți trimitem o propunere clară, fără costuri ascunse, adaptată exact nevoilor tale.",
  },
  {
    icon: Truck,
    title: "3. Livrare și montaj",
    text: "Montăm din timp echipamentele, astfel încât totul să fie gata înainte de sosirea invitaților.",
  },
  {
    icon: PartyPopper,
    title: "4. Evenimentul tău",
    text: "Te bucuri de petrecere, iar noi ne ocupăm de demontaj și ridicare la final.",
  },
];

const privateFaqs = [
  {
    q: "Pot organiza o petrecere surpriză cu voi?",
    a: "Da, absolut. Discreția este una dintre valorile noastre. Putem livra și monta în avans, fără ca persoana sărăbătorită să știe. Coordonăm inclusiv intrarea echipei noastre pentru a nu strica surpriza.",
  },
  {
    q: "Organizați și petreceri pentru copii sau adolescenți?",
    a: "Da, avem experiență cu evenimente pentru toate vârstele. Pentru petreceri cu copii și adolescenți, recomandăm pachete care includ sistem audio adaptat, cabina foto și coffee corner cu băuturi non-alcoolice. Playlistul și activitățile se adaptează în funcție de vârsta participanților.",
  },
  {
    q: "Pot închiria doar sistem audio sau cabina foto, fără alte servicii?",
    a: "Da, poți alege exact ce ai nevoie — doar sistem audio, doar cabina foto sau orice combinație. Nu te obligăm la pachete complete. Fiecare ofertă este personalizată în funcție de cerințele tale specifice.",
  },
  {
    q: "Puteți organiza un eveniment privat într-un parc sau spațiu public?",
    a: "Da, avem experiență cu evenimente în parcuri și spații publice. În aceste cazuri, avem nevoie de acordul administratorului spațiului și de verificări tehnice suplimentare (sursă de energie, acces, autorizații).",
  },
  {
    q: "Cât costă organizarea unui eveniment privat?",
    a: "Costul depinde de numărul de invitați, locație, durata evenimentului și serviciile alese — de la un simplu sistem audio sau o cabină foto, până la un pachet complet cu cocktail bar, DJ și iluminat. Îți trimitem o ofertă personalizată gratuită, fără obligații, în urma unei scurte discuții.",
  },
  {
    q: "Cu cât timp înainte trebuie să rezerv un eveniment privat?",
    a: "Recomandăm 2-3 săptămâni pentru servicii individuale (sonorizare, cabină foto) și minim 4 săptămâni pentru pachete complete cu logistică extinsă. În perioadele aglomerate (mai–septembrie), rezervarea din timp îți garantează disponibilitatea echipamentelor dorite.",
  },
  {
    q: "Ce include un pachet de petrecere de lux?",
    a: "O petrecere de lux presupune, de regulă, cocktail bar cu barman profesionist, coffee corner, iluminat scenic, DJ curator și cabina foto — toate coordonate ca o experiență unitară. Personalizăm fiecare element în funcție de temă, paleta de culori și numărul de invitați.",
  },
  {
    q: "Livrați și în afara Bucureștiului?",
    a: "Da, deservim în mod curent evenimente private în București, Ilfov, Pitești, Ploiești și Dâmbovița. Pentru locații mai îndepărtate, contactează-ne pentru a verifica disponibilitatea și eventualele costuri de deplasare.",
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
                "Organizare evenimente private și petreceri de lux în București, Ilfov, Pitești și Ploiești. Închiriere logistică completă: cocktail bar, DJ, cabină foto și coffee corner.",
              slug: "private",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(faqPageSchema(privateFaqs)),
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
              Organizare Evenimente Private &amp; Închirieri Logistică în
              București și Ilfov
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
                  Ploiești — sisteme audio, DJ, iluminat ambiental, cocktail bar,
                  coffee corner și cabina foto. Totul coordonat de o singură echipă, cu livrare, montaj
                  și demontaj incluse.
                </p>
                <p className="text-charcoal/60 text-base leading-relaxed font-light mb-6">
                  Pentru clienții care își doresc o petrecere de lux, mergem
                  dincolo de logistica de bază: iluminat scenic, cocktail bar cu barman profesionist și un DJ care
                  citește atmosfera invitaților. Rezultatul este o experiență
                  coerentă, gândită în detaliu, nu doar o listă de echipamente
                  închiriate.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Coffee corner cu barista dedicat",
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

        {/* Packages */}
        <section className="section-padding bg-warm">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3">
              Cât de mare este petrecerea ta
            </p>
            <h2 className="font-display text-3xl text-obsidian mb-4">
              Pachete orientative pentru evenimente private
            </h2>
            <p className="text-charcoal/60 text-base leading-relaxed font-light mb-8 max-w-2xl">
              Fiecare eveniment privat primește o ofertă personalizată, dar iată
              cum arată, în linii mari, trei niveluri de configurare în funcție
              de numărul de invitați:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
              {privatePackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white rounded-sm border border-warm-dark p-7 h-full flex flex-col"
                >
                  <h3 className="font-display text-2xl text-obsidian">
                    {pkg.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gold">
                    {pkg.guests}
                  </p>
                  <p className="mt-3 text-sm text-charcoal/60 font-light">
                    {pkg.content}
                  </p>
                  <ul className="mt-5 space-y-2.5 pt-5 border-t border-warm-dark">
                    {pkg.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-charcoal/70"
                      >
                        <span className="text-gold shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-obsidian rounded-sm p-7 flex flex-col md:flex-row md:items-center gap-6">
              <p className="text-sm text-white/50 font-light leading-relaxed md:flex-1">
                Prețul final depinde de data evenimentului, locație, numărul de
                invitați și serviciile alese. Cererea de ofertă și consultația
                inițială sunt gratuite.
              </p>
              <Link
                href="/cerere-oferta/"
                data-gtm-id="page_cta_oferta_packages"
                data-gtm-location="private_page"
                className="shrink-0 self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 bg-gold text-obsidian text-[11px] font-semibold tracking-widest uppercase rounded-full hover:bg-gold-dark transition"
              >
                Solicită Ofertă Personalizată
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3 text-center">Proces</p>
            <h2 className="font-display text-3xl text-obsidian text-center mb-10">
              Cum organizăm evenimentul tău privat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {privateProcess.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-white p-6 rounded-sm text-center border border-warm-dark"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-sm text-obsidian mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-charcoal/60 font-light leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                );
              })}
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
