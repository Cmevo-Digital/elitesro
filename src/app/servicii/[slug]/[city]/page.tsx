import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { cityServiceSchema, faqPageSchema, safeStringify } from "@/lib/jsonld";
import { serviceDetails } from "@/lib/services";

const CITY_DATA: Record<
  string,
  {
    name: string;
    intro: string;
    zones: string;
    localBenefits: string[];
    faq: { q: string; a: string };
  }
> = {
  bucuresti: {
    name: "București",
    intro:
      "Capitala concentrează cele mai multe evenimente premium din România. Fie că organizezi un eveniment corporate în centrul Bucureștiului sau o nuntă în zona de nord, suntem prezenți cu toată logistica necesară — la timp și fără compromisuri.",
    zones:
      "Acoperim toate cele 6 sectoare ale Bucureștiului, inclusiv zonele limitrofe — de la Pipera și Băneasa la Militari și Berceni.",
    localBenefits: [
      "Livrare în orice sector al Capitalei, fără costuri suplimentare de transport",
      "Experiență cu sute de evenimente în cele mai importante venue-uri din București",
      "Echipă locală disponibilă pentru vizite tehnice și consultanță prealabilă",
    ],
    faq: {
      q: "Livreați și montați în toate sectoarele din București?",
      a: "Da, acoperim toate cele 6 sectoare ale Bucureștiului. Indiferent de locație — de la Băneasa la Berceni, de la Militari la Pipera — livrăm și montăm fără costuri suplimentare de transport.",
    },
  },
  ilfov: {
    name: "Ilfov",
    intro:
      "Județul Ilfov găzduiește unele dintre cele mai apreciate venue-uri pentru evenimente din zona metropolitană București. Cu ani de activitate în județ, cunoaștem specificul fiecărei locații și ne adaptăm rapid la cerințele organizatorilor.",
    zones:
      "Operăm în toate localitățile județului Ilfov — Voluntari, Otopeni, Buftea, Popești-Leordeni, Pantelimon, Bragadiru și celelalte comune limitrofe Capitalei.",
    localBenefits: [
      "Familiarizați cu cele mai apreciate venue-uri și săli de evenimente din Ilfov",
      "Logistică rapidă datorită proximității față de București și depozitelor noastre",
      "Adaptare la spații exterioare și proprietăți private din zona suburbană",
    ],
    faq: {
      q: "Livreați și în localitățile mai mici din județul Ilfov?",
      a: "Da, acoperim întreg județul Ilfov, inclusiv localitățile mai mici. Dacă nu ești sigur că locația ta este în zona noastră de operare, contactează-ne și verificăm împreună fără nicio obligație.",
    },
  },
  pitesti: {
    name: "Pitești",
    intro:
      "Pitești și zona Argeș au o cultură puternică a evenimentelor private și corporate. Suntem parteneri de logistică pentru organizatori din municipiu și din împrejurimi, aducând aceleași standarde de calitate ca în Capitală.",
    zones:
      "Livrăm în municipiul Pitești și localitățile din proximitate — Mioveni, Costești, Câmpulung Muscel și alte localități din județul Argeș.",
    localBenefits: [
      "Livrare rapidă în tot municipiul Pitești și în localitățile limitrofe",
      "Prețuri transparente — costul de transport este inclus în ofertă de la început",
      "Cunoaștem specificul venue-urilor și sălilor de evenimente din județul Argeș",
    ],
    faq: {
      q: "Oferiți servicii și în localitățile din jurul Piteștiului?",
      a: "Da, acoperim municipiul Pitești și o rază de aproximativ 30 km — incluzând Mioveni, Costești și alte localități din județul Argeș. Contactează-ne pentru locații mai îndepărtate și evaluăm împreună.",
    },
  },
  ploiesti: {
    name: "Ploiești",
    intro:
      "Ploiești și județul Prahova oferă un peisaj variat de venue-uri — de la săli clasice în centrul orașului la proprietăți cu spații exterioare în zona suburbană. Suntem prezenți cu același nivel de servicii ca în Capitală, fără niciun compromis.",
    zones:
      "Acoperim municipiul Ploiești și localitățile din județul Prahova — Câmpina, Sinaia, Breaza, Băicoi și alte localități din apropierea orașului.",
    localBenefits: [
      "Operăm în Ploiești și în principalele localități din județul Prahova",
      "Echipă cu experiență în specificul evenimentelor și locațiilor din regiune",
      "Montaj rapid cu respectarea strictă a programului agreat",
    ],
    faq: {
      q: "Livreați și montați și în localitățile din jurul Ploieștiului?",
      a: "Da, acoperim Ploiești și o rază extinsă în județul Prahova — Câmpina, Sinaia, Breaza și altele. Discutăm detaliile la confirmarea comenzii, în funcție de locația exactă.",
    },
  },
};

const ALL_CITIES = [
  { slug: "bucuresti", name: "București" },
  { slug: "ilfov", name: "Ilfov" },
  { slug: "pitesti", name: "Pitești" },
  { slug: "ploiesti", name: "Ploiești" },
];

interface PageProps {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, city } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const cityData = CITY_DATA[city];
  if (!service || !cityData) return { title: "Pagină negăsită" };
  return {
    title: `${service.title} în ${cityData.name} — Elites Events`,
    description: `Închiriere ${service.title.toLowerCase()} în ${cityData.name}. ${cityData.zones} Livrare, montaj și demontaj inclus. Solicită ofertă gratuită.`,
    alternates: { canonical: `/servicii/${slug}/${city}/` },
  };
}

export async function generateStaticParams() {
  return SERVICES.flatMap((s) =>
    ALL_CITIES.map((c) => ({ slug: s.slug, city: c.slug }))
  );
}

export default async function CityServicePage({ params }: PageProps) {
  const { slug, city } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  const cityData = CITY_DATA[city];

  if (!service || !detail || !cityData) notFound();

  const otherCities = ALL_CITIES.filter((c) => c.slug !== city);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(
            cityServiceSchema({
              name: service.title,
              description: detail.description,
              slug,
              city,
              cityName: cityData.name,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(faqPageSchema([cityData.faq])),
        }}
      />
      <div className="min-h-screen bg-ivory">
        {/* Hero */}
        <div className="relative min-h-[45vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={detail.image}
              alt={`${service.title} în ${cityData.name}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-obsidian/30" />
          </div>
          {/* Breadcrumb overlaid at top */}
          <div className="absolute top-0 left-0 right-0 pt-16 lg:pt-20">
            <div className="container-brand py-3">
              <nav className="flex items-center gap-2 text-xs text-white/50 font-light">
                <Link href="/servicii" className="hover:text-gold transition-colors">
                  Servicii
                </Link>
                <span>/</span>
                <Link
                  href={`/servicii/${slug}`}
                  className="hover:text-gold transition-colors"
                >
                  {service.title}
                </Link>
                <span>/</span>
                <span className="text-white/80">{cityData.name}</span>
              </nav>
            </div>
          </div>
          <div className="relative container-brand pb-14 pt-28">
            <p className="overline-text text-gold mb-3">{cityData.name}</p>
            <h1 className="font-display text-4xl md:text-5xl text-white max-w-xl leading-tight">
              {service.title} în {cityData.name}
            </h1>
            <p className="mt-3 text-white/60 font-light max-w-md">
              {detail.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-charcoal/60 text-base leading-relaxed font-light">
                  {cityData.intro}
                </p>

                <div>
                  <p className="overline-text text-gold text-[10px] mb-4">
                    Disponibil
                  </p>
                  <ul className="space-y-2.5">
                    {detail.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-charcoal/70"
                      >
                        <span className="text-gold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="overline-text text-gold text-[10px] mb-4">
                    De ce Elites în {cityData.name}?
                  </p>
                  <ul className="space-y-2.5">
                    {cityData.localBenefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-charcoal/70"
                      >
                        <span className="text-gold mt-0.5 shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/cerere-oferta"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
                >
                  Solicită Ofertă în {cityData.name}
                </Link>
              </div>

              <div className="space-y-5">
                <div className="bg-warm rounded-sm p-7">
                  <p className="overline-text text-gold text-[10px] mb-4">
                    Inclus întotdeauna
                  </p>
                  <ul className="space-y-2.5">
                    {detail.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-charcoal/70"
                      >
                        <span className="text-gold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-obsidian rounded-sm p-7">
                  <p className="font-display text-lg text-white mb-2">
                    Întrebare frecventă
                  </p>
                  <p className="text-sm text-gold/80 font-medium mb-2">
                    {cityData.faq.q}
                  </p>
                  <p className="text-sm text-white/50 font-light">
                    {cityData.faq.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zone coverage */}
        <section className="py-10 bg-warm border-t border-charcoal/10">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3">Zona de acoperire</p>
            <p className="text-charcoal/70 text-sm font-light max-w-2xl">
              {cityData.zones}
            </p>
          </div>
        </section>

        {/* Other cities for this service */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3">Același serviciu în</p>
            <h2 className="font-display text-2xl text-obsidian mb-8">
              Alte orașe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/servicii/${slug}/${c.slug}`}
                  className="bg-warm p-5 rounded-sm hover:-translate-y-0.5 hover:shadow-hover transition-all duration-300 flex items-center justify-between"
                >
                  <span className="font-medium text-sm text-obsidian">
                    {service.title} în {c.name}
                  </span>
                  <span className="text-gold shrink-0">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href={`/servicii/${slug}`}
                className="text-sm text-charcoal/50 hover:text-gold transition-colors font-light"
              >
                ← Înapoi la {service.title}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
