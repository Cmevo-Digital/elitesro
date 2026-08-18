import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Heart, Tent, GlassWater, Sparkles } from "lucide-react";
import { eventServiceSchema, safeStringify } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Servicii Nunți — Mobilier, Corturi & Logistică",
  description:
    "Servicii complete pentru nunți de 50–150 invitați în București, Ilfov, Pitești și Ploiești. Mobilier premium, corturi, veselă, DJ și logistică completă.",
  alternates: { canonical: "/evenimente/nunti/" },
};

const weddingServices = [
  "Mobilier premium (mese, scaune, cocktail tables)",
  "Corturi elegante pentru nunți outdoor",
  "Veselă, pahare și tacâmuri complete",
  "Iluminat ambiental și decorativ",
  "DJ și sisteme audio profesionale",
  "Cabina foto cu imprimare instantă",
  "Logistică completă — livrare, montaj, demontaj",
  "Parteneri foto/video (la cerere)",
  "Cocktail bar (la cerere)",
];

const weddingTestimonials = TESTIMONIALS.filter((t) =>
  t.event.toLowerCase().includes("nunt"),
);

const weddingFaqs = [
  {
    q: "Cu cât timp înainte trebuie să rezerv pentru nunta mea?",
    a: "Recomandăm minim 4–6 săptămâni pentru nunți, mai ales dacă ai nevoie de corturi sau pachete complexe. Pentru servicii individuale (doar mobilier sau veselă), 2-3 săptămâni sunt suficiente. Contactează-ne cât mai devreme pentru a verifica disponibilitatea.",
  },
  {
    q: "Puteți amenaja și în grădini private sau locații fără infrastructură?",
    a: "Da, avem experiență vastă cu nunți în grădini și proprietăți private. Oferim soluții complete — corturi, grup electrogen, iluminat outdoor, podele. Facem o vizită tehnică prealabilă pentru a evalua toate aspectele.",
  },
  {
    q: "Ce se întâmplă dacă vremea nu ține cu noi la nunta outdoor?",
    a: "Corturile noastre sunt pregătite pentru orice vreme — pereți laterali pentru ploaie și vânt, sisteme de încălzire pentru serile răcoroase. În caz de avertizare meteo severă, discutăm soluții alternative cu tine cu cel puțin 48h înainte.",
  },
  {
    q: "Puteți personaliza culorile și stilul pentru nunta noastră?",
    a: "Absolut. De la huse pentru scaune și fețe de masă în culoarea nunții la iluminat în tonuri pastelate sau calde — personalizăm fiecare detaliu. Colaborăm cu ateliere locale pentru țesături și accesorii personalizate.",
  },
];

const processSteps = [
  {
    icon: Heart,
    title: "1. Consultare",
    text: "Discutăm viziunea ta, numărul de invitați, locația și bugetul. Îți oferim recomandări personalizate.",
  },
  {
    icon: Tent,
    title: "2. Configurare",
    text: "Stabilim exact ce echipamente ai nevoie, facem o vizită tehnică la locație și îți trimitem oferta.",
  },
  {
    icon: Sparkles,
    title: "3. Montaj",
    text: "Livrăm și montăm cu 1-2 zile înainte. Poți verifica totul înainte de marele eveniment.",
  },
  {
    icon: GlassWater,
    title: "4. Eveniment",
    text: "Asistență pe toată durata nunții. Demontăm a doua zi și lăsăm locația curată.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(
            eventServiceSchema({
              name: "Servicii Complete Nunți",
              description:
                "Servicii complete pentru nunți de 50–150 invitați în București, Ilfov, Pitești și Ploiești. Mobilier premium, corturi, veselă, DJ și logistică completă.",
              slug: "nunti",
            }),
          ),
        }}
      />
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
                <p className="text-charcoal/60 text-base leading-relaxed font-light mb-6">
                  Suntem specializați în nunți de 50–150 de persoane în
                  București, Ilfov, Pitești și Ploiești. Oferim de la mobilier
                  elegant și corturi premium până la veselă, DJ și cabina foto —
                  totul coordonat de o singură echipă, pentru ca tu să ai un
                  singur interlocutor.
                </p>
                <ul className="space-y-3">
                  {weddingServices.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 text-sm text-charcoal/70"
                    >
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/cerere-oferta/"
                    data-gtm-id="page_cta_oferta"
                    data-gtm-location="wedding_page"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
                  >
                    Solicită Ofertă pentru Nuntă
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1525772764200-be829a350797?q=80&w=1287&auto=format&fit=crop"
                  alt="Aranjament nuntă Elites Events"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3 text-center">Proces</p>
            <h2 className="font-display text-3xl text-obsidian text-center mb-10">
              Cum organizăm nunta ta
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-white p-6 rounded-sm text-center"
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
                  <h3 className="font-display text-lg text-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="section-padding bg-obsidian">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3 text-center">
              De ce să ne alegi
            </p>
            <h2 className="font-display text-3xl text-white text-center mb-10">
              Numerele care contează
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Nunți deservite", value: "200+" },
                { label: "Ani de experiență", value: "6+" },
                { label: "Orașe deservite", value: "4" },
                { label: "Satisfacție", value: "96%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">
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
              Pregătirea nunții — FAQ
            </h2>
            <div className="divide-y divide-warm-dark">
              {weddingFaqs.map((faq, i) => (
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
        {weddingTestimonials.length > 0 && (
          <section className="section-padding bg-obsidian">
            <div className="container-brand">
              <p className="overline-text text-gold mb-3 text-center">
                Recenzii
              </p>
              <h2 className="font-display text-3xl text-white text-center mb-10">
                Ce spun cuplurile care ne-au ales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {weddingTestimonials.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-sm p-7"
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
                    <p className="text-sm text-white/80 leading-relaxed italic font-light mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">
                      {t.event} · {t.location}
                    </p>
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
              href="/cerere-oferta/"
              data-gtm-id="page_cta_oferta_final"
              data-gtm-location="wedding_page"
              className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-white text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-charcoal transition-all duration-300 hover:scale-105"
            >
              Solicită Ofertă Gratuită
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
