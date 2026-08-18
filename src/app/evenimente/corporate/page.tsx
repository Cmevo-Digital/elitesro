import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import {
  Star,
  Building2,
  Users,
  Zap,
  Shield,
  Calendar,
  ClipboardCheck,
} from "lucide-react";
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

const corporateFaqs = [
  {
    q: "Cu cât timp înainte trebuie să rezerv pentru un eveniment corporate?",
    a: "Recomandăm minim 2-3 săptămâni pentru evenimente corporate, și 4-6 săptămâni pentru gale mari sau teambuilding-uri cu corturi. Acceptăm și comenzi cu termen mai scurt, în funcție de disponibilitatea echipamentelor și a personalului.",
  },
  {
    q: "Puteți asigura și servicii de catering sau foto/video?",
    a: "Nu oferim direct catering sau foto/video, dar avem parteneri de încredere cu care colaborăm frecvent. Putem recomanda și coordona acești furnizori pentru a simplifica procesul de organizare pentru tine.",
  },
  {
    q: "Cum se desfășoară o vizită tehnică înainte de eveniment?",
    a: "Pentru evenimente corporate, recomandăm o vizită tehnică prealabilă. Un coleg din echipa noastră vine la locație, evaluează spațiul, identifică punctele de acces, sursa de energie și orice particularități. Vizita este gratuită și durează aproximativ 30-60 de minute.",
  },
  {
    q: "Oferiți discount pentru pachete multiple sau evenimente recurente?",
    a: "Da, oferim tarife preferențiale pentru companiile care organizează evenimente corporate recurente sau care închiriază pachete multiple de servicii. Solicită o ofertă personalizată și discutăm opțiunile.",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "1. Solicitare ofertă",
    text: "Completezi formularul sau ne scrii pe WhatsApp. Îți răspundem în maxim 2 ore în zilele lucrătoare.",
  },
  {
    icon: Calendar,
    title: "2. Vizită tehnică",
    text: "Evaluăm locația împreună — măsurători, acces, surse de energie, particularități ale spațiului.",
  },
  {
    icon: Shield,
    title: "3. Confirmare",
    text: "Primești oferta finală, semnăm contractul și stabilim programul exact de livrare și montaj.",
  },
  {
    icon: Zap,
    title: "4. Execuție",
    text: "Livrăm, montăm și testăm totul înainte de eveniment. Asistență tehnică pe toată durata.",
  },
];

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
            }),
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
              Conferințe, gale, teambuilding-uri sau lansări de produs. Asigurăm
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
                <p className="overline-text text-gold mb-4">
                  Servicii corporate
                </p>
                <h2 className="font-display text-3xl text-obsidian mb-6">
                  Tot ce are nevoie un eveniment de business
                </h2>
                <p className="text-charcoal/60 text-base leading-relaxed font-light mb-6">
                  De la conferințe și seminarii la gale anuale și
                  teambuilding-uri în aer liber, acoperim toate nevoile
                  logistice ale evenimentului tău corporate în București, Ilfov,
                  Pitești și Ploiești. Colaborăm direct cu tine sau cu agenția
                  de evenimente pentru a livra o execuție impecabilă, la timp și
                  în buget.
                </p>
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
                  href="/cerere-oferta/"
                  data-gtm-id="page_cta_oferta"
                  data-gtm-location="corporate_page"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
                >
                  Solicită Ofertă Corporate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Client types */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3">Pentru cine</p>
            <h2 className="font-display text-3xl text-obsidian mb-8">
              Cui se adresează serviciile noastre corporate
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Companii care organizează conferințe și seminarii pentru clienți sau parteneri",
                "Departamente HR care planifică teambuilding-uri și party-uri de firmă",
                "Agenții de evenimente care externalizează logistica pentru clienții corporate",
                "Organizatori de gale anuale, lansări de produs și dinner de business",
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

        {/* Process */}
        <section className="section-padding bg-warm">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3 text-center">Proces</p>
            <h2 className="font-display text-3xl text-obsidian text-center mb-10">
              Cum lucrăm împreună
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

        {/* FAQ */}
        <section className="section-padding bg-ivory">
          <div className="container-brand max-w-3xl">
            <p className="overline-text text-gold mb-3">Întrebări frecvente</p>
            <h2 className="font-display text-3xl text-obsidian mb-8">
              Evenimente corporate — FAQ
            </h2>
            <div className="divide-y divide-warm-dark">
              {corporateFaqs.map((faq, i) => (
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
                { label: "Evenimente corporate", value: "150+" },
                { label: "Ani de experiență", value: "6+" },
                { label: "Orașe deservite", value: "4" },
                { label: "Rata recomandări", value: "94%" },
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

        <section className="section-padding bg-obsidian">
          <div className="container-brand text-center">
            <h2 className="font-display text-3xl text-white mb-4">
              Planifici un eveniment corporate?
            </h2>
            <p className="text-white/50 mb-8 font-light">
              Solicită oferta și un specialist te contactează în 2 ore.
            </p>
            <Link
              href="/cerere-oferta/"
              data-gtm-id="page_cta_oferta_final"
              data-gtm-location="corporate_page"
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
