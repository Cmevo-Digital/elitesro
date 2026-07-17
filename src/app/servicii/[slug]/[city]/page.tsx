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
    extendedIntro: string;
    zones: string;
    localBenefits: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  bucuresti: {
    name: "București",
    intro:
      "Capitala concentrează cele mai multe evenimente premium din România. Fie că organizezi un eveniment corporate în centrul Bucureștiului sau o nuntă în zona de nord, suntem prezenți cu toată logistica necesară — la timp și fără compromisuri.",
    extendedIntro:
      "Bucureștiul oferă o diversitate unică de venue-uri — de la săli moderne de conferință în zonele de business la grădini elegante și restaurante de top. Am deservit sute de evenimente în cele mai cunoscute locații ale Capitalei, de la Palatul Bragadiru și JW Marriott la spații neconvenționale din zona istorică. Indiferent de sector sau tip de locație, echipa noastră cunoaște specificul fiecărui venue și se adaptează rapid.",
    zones:
      "Acoperim toate cele 6 sectoare ale Bucureștiului, inclusiv zonele limitrofe — de la Pipera și Băneasa la Militari și Berceni.",
    localBenefits: [
      "Livrare în orice sector al Capitalei, fără costuri suplimentare de transport",
      "Experiență cu sute de evenimente în cele mai importante venue-uri din București",
      "Echipă locală disponibilă pentru vizite tehnice și consultanță prealabilă",
      "Logistică flexibilă — livrare și montaj în aceeași zi la cerere",
      "Asistență tehnică pe toată durata evenimentului",
    ],
    faqs: [
      {
        q: "Livrați și montați în toate sectoarele din București?",
        a: "Da, acoperim toate cele 6 sectoare ale Bucureștiului. Indiferent de locație — de la Băneasa la Berceni, de la Militari la Pipera — livrăm și montăm fără costuri suplimentare de transport.",
      },
      {
        q: "Livrați cu cât timp înainte de eveniment în București?",
        a: "De regulă livrăm cu o zi înainte, mai ales pentru configurații complexe. Pentru comenzi simple, putem livra și în dimineața evenimentului. Stabilim programul exact la confirmare.",
      },
      {
        q: "Puteți face o vizită tehnică la locație înainte de eveniment?",
        a: "Da, pentru evenimente corporate și nunți, recomandăm o vizită tehnică prealabilă în locație. Un coleg din echipa noastră vine să evalueze spațiul, să discute cu responsabilii venue-ului și să stabilească punctele de acces și montaj.",
      },
    ],
  },
  ilfov: {
    name: "Ilfov",
    intro:
      "Județul Ilfov găzduiește unele dintre cele mai apreciate venue-uri pentru evenimente din zona metropolitană București. Cu ani de activitate în județ, cunoaștem specificul fiecărei locații și ne adaptăm rapid la cerințele organizatorilor.",
    extendedIntro:
      "De la domenii elegante în Snagov la grădini generoase în Voluntari și Otopeni, Ilfov este destinația preferată pentru evenimentele outdoor și nunțile în corturi. Proximitatea față de Capitală face logistica eficientă, iar varietatea spațiilor oferă libertate creativă maximă. Colaborăm frecvent cu cele mai cunoscute venue-uri din județ, unde am instalat de la corturi mari și mobilier premium până la sisteme audio complexe.",
    zones:
      "Operăm în toate localitățile județului Ilfov — Voluntari, Otopeni, Buftea, Popești-Leordeni, Pantelimon, Bragadiru și celelalte comune limitrofe Capitalei.",
    localBenefits: [
      "Familiarizați cu cele mai apreciate venue-uri și săli de evenimente din Ilfov",
      "Logistică rapidă datorită proximității față de București și depozitelor noastre",
      "Adaptare la spații exterioare și proprietăți private din zona suburbană",
      "Experiență vastă cu evenimente outdoor — corturi, iluminat, grup electrogen",
      "Echipă dedicată pentru montaj în grădini și spații neconvenționale",
    ],
    faqs: [
      {
        q: "Livrați și în localitățile mai mici din județul Ilfov?",
        a: "Da, acoperim întreg județul Ilfov, inclusiv localitățile mai mici. Dacă nu ești sigur că locația ta este în zona noastră de operare, contactează-ne și verificăm împreună fără nicio obligație.",
      },
      {
        q: "Aveți experiență cu evenimente în grădini private în Ilfov?",
        a: "Da, majoritatea evenimentelor din Ilfov sunt în grădini și proprietăți private. Avem soluții pentru alimentare cu energie, corturi pe teren neregulat și montaj în spații cu acces limitat. Facem o evaluare tehnică înainte pentru a ne asigura că totul este în regulă.",
      },
      {
        q: "Pot vizita locația înainte pentru a stabili configurația?",
        a: "Da, pentru evenimente în Ilfov recomandăm o vizită prealabilă. Echipa noastră se deplasează la locație pentru a evalua terenul, punctele de acces și sursa de energie. Vizita este gratuită și nu implică nicio obligație.",
      },
    ],
  },
  pitesti: {
    name: "Pitești",
    intro:
      "Pitești și zona Argeș au o cultură puternică a evenimentelor private și corporate. Suntem parteneri de logistică pentru organizatori din municipiu și din împrejurimi, aducând aceleași standarde de calitate ca în Capitală.",
    extendedIntro:
      "Piteștiul este un hub regional pentru evenimente corporate și private, cu o cerere tot mai mare pentru servicii de logistică premium. Am deservit evenimente în cele mai importante venue-uri din oraș și din județul Argeș, de la săli moderne de conferință la spații outdoor pitorești în zona de deal. Echipa noastră locală cunoaște specificul fiecărei locații și asigură un montaj eficient, indiferent de complexitatea evenimentului.",
    zones:
      "Livrăm în municipiul Pitești și localitățile din proximitate — Mioveni, Costești, Câmpulung Muscel și alte localități din județul Argeș.",
    localBenefits: [
      "Livrare rapidă în tot municipiul Pitești și în localitățile limitrofe",
      "Prețuri transparente — costul de transport este inclus în ofertă de la început",
      "Cunoaștem specificul venue-urilor și sălilor de evenimente din județul Argeș",
      "Echipă locală pentru montaj și asistență în timpul evenimentului",
      "Aceleași standarde de calitate și echipamente ca în București",
    ],
    faqs: [
      {
        q: "Oferiți servicii și în localitățile din jurul Piteștiului?",
        a: "Da, acoperim municipiul Pitești și o rază de aproximativ 30 km — incluzând Mioveni, Costești și alte localități din județul Argeș. Contactează-ne pentru locații mai îndepărtate și evaluăm împreună.",
      },
      {
        q: "Transportul este inclus în preț pentru Pitești?",
        a: "Da, costul de transport este inclus în ofertă de la început, fără surprize. Pentru localitățile din afara municipiului Pitești, putem ajusta oferta în funcție de distanță, dar îți comunicăm totul transparent dinainte.",
      },
      {
        q: "Aveți același stoc de echipamente disponibil ca în București?",
        a: "Da, operăm cu același stoc și aceleași standarde de calitate în toate orașele. Echipamentele sunt verificate și întreținute conform acelorași proceduri, indiferent de destinație.",
      },
    ],
  },
  dambovita: {
    name: "Dâmbovița",
    intro:
      "Dâmbovița are o cerere tot mai mare pentru evenimente private și corporate, iar noi suntem prezenți în tot județul cu servicii complete de logistică — mobilier, corturi, veselă, iluminat, audio și cocktail bar. Fie că organizezi o nuntă în Târgoviște sau o petrecere în aer liber în zona de deal, livrăm și montăm totul la standardele noastre obișnuite.",
    extendedIntro:
      "Am deservit nunți, botezuri și evenimente corporate în cele mai cunoscute locații din Dâmbovița — de la săli de evenimente și hoteluri din Târgoviște și Moreni până la cabane și grădini private în zona Peștera și Runcu. Oferim pachete complete care includ mobilier premium, corturi rezistente, veselă elegantă, sisteme audio profesionale și iluminat ambiental. Pentru evenimentele outdoor venim cu soluții complete — grup electrogen, corturi încălzite sau ventilate, și montaj pe teren denivelat. Totul livrat, montat și demontat de echipa noastră, ca să te poți ocupa de restul organizării.",
    zones:
      "Acoperim tot județul Dâmbovița — Târgoviște, Moreni, Pucioasa, Găești, Fieni, Răcari, Titu, inclusiv zona montană Peștera, Runcu, Moroeni și toate comunele limitrofe.",
    localBenefits: [
      "Livrare și montaj în tot județul Dâmbovița, fără costuri ascunse de transport",
      "Cunoaștem venue-urile din Târgoviște și județ — săli, cabane, grădini private",
      "Echipă dedicată pentru montaj rapid în orice tip de locație",
      "Soluții complete pentru evenimente outdoor — corturi, grup electrogen, iluminat",
      "Aceleași echipamente și standarde de calitate ca în București",
    ],
    faqs: [
      {
        q: "Livrați mobilier și corturi în tot județul Dâmbovița?",
        a: "Da, acoperim întreg județul — Târgoviște, Moreni, Pucioasa, Găești și toate localitățile, inclusiv zona de munte. Livrăm, montăm și demontăm totul, fără costuri suplimentare de transport.",
      },
      {
        q: "Aveți experiență cu nunți sau evenimente corporate în Dâmbovița?",
        a: "Da, am deservit evenimente în săli de evenimente și hoteluri din Târgoviște și Moreni, dar și în locații outdoor și cabane în zona Peștera și Runcu. Cunoaștem specificul fiecărui venue și ne adaptăm rapid — de la configurația sălii la sursa de energie sau accesul pentru montaj.",
      },
      {
        q: "Pot vedea configurația înainte de eveniment în Dâmbovița?",
        a: "Da, pentru evenimente mai mari facem o vizită tehnică în locație înainte de montaj. Evaluăm terenul, punctele de acces, sursa de energie și stabilim împreună configurația optimă. Vizita este gratuită și nu implică nicio obligație.",
      },
    ],
  },
  ploiesti: {
    name: "Ploiești",
    intro:
      "Ploiești și județul Prahova oferă un peisaj variat de venue-uri — de la săli clasice în centrul orașului la proprietăți cu spații exterioare în zona suburbană. Suntem prezenți cu același nivel de servicii ca în Capitală, fără niciun compromis.",
    extendedIntro:
      "Prahova este una dintre cele mai active zone pentru evenimente din România, datorită apropierii de București și a diversității de locații — de la hoteluri moderne din Ploiești la domenii și cabane în zona montană Sinaia-Bușteni. Am deservit evenimente corporate, nunți și petreceri private în cele mai cunoscute venue-uri din județ. Indiferent de anotimp, venim cu soluția potrivită — corturi încălzite pentru sezonul rece sau structuri deschise pentru vara.",
    zones:
      "Acoperim municipiul Ploiești și localitățile din județul Prahova — Câmpina, Sinaia, Breaza, Băicoi și alte localități din apropierea orașului.",
    localBenefits: [
      "Operăm în Ploiești și în principalele localități din județul Prahova",
      "Echipă cu experiență în specificul evenimentelor și locațiilor din regiune",
      "Montaj rapid cu respectarea strictă a programului agreat",
      "Soluții pentru orice anotimp — corturi încălzite iarna, ventilate vara",
      "Asistență tehnică pe tot parcursul evenimentului",
    ],
    faqs: [
      {
        q: "Livrați și montați și în localitățile din jurul Ploieștiului?",
        a: "Da, acoperim Ploiești și o rază extinsă în județul Prahova — Câmpina, Sinaia, Breaza și altele. Discutăm detaliile la confirmarea comenzii, în funcție de locația exactă.",
      },
      {
        q: "Puteți livra în zona montană Sinaia-Bușteni?",
        a: "Da, avem experiență cu livrări în zona montană a Prahovei. Pentru locațiile montane, evaluăm accesul și condițiile specifice în prealabil și ajustăm configurația în consecință (de exemplu, corturi cu ancorare specială pentru teren denivelat).",
      },
      {
        q: "Ce se întâmplă dacă evenimentul meu este în sezonul rece?",
        a: "Avem soluții pentru orice anotimp — corturi cu pereți completi și sisteme de încălzire, iluminat ambiental cald, și materiale rezistente la intemperii. Am deservit evenimente corporate și nunți decembrie-martie fără probleme.",
      },
    ],
  },
};

const ALL_CITIES = [
  { slug: "bucuresti", name: "București" },
  { slug: "ilfov", name: "Ilfov" },
  { slug: "pitesti", name: "Pitești" },
  { slug: "ploiesti", name: "Ploiești" },
  { slug: "dambovita", name: "Dâmbovița" },
];

interface PageProps {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, city } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const cityData = CITY_DATA[city];
  if (!service || !cityData) return { title: "Pagină negăsită" };
  return {
    title: `Închiriere ${service.title} în ${cityData.name}`,
    description: `Închiriere ${service.title.toLowerCase()} în ${cityData.name}. ${cityData.zones} Livrare, montaj și demontaj inclus. Solicită ofertă gratuită.`,
    alternates: { canonical: `/servicii/${slug}/${city}/` },
  };
}

export async function generateStaticParams() {
  return SERVICES.flatMap((s) =>
    ALL_CITIES.map((c) => ({ slug: s.slug, city: c.slug })),
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
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(faqPageSchema(cityData.faqs)),
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
                <Link
                  href="/servicii"
                  className="hover:text-gold transition-colors"
                >
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
                <h2 className="font-display text-2xl text-obsidian">
                  {service.title} în {cityData.name}
                </h2>
                <p className="text-charcoal/60 text-base leading-relaxed font-light">
                  {cityData.intro}
                </p>
                <p className="text-charcoal/60 text-base leading-relaxed font-light">
                  {cityData.extendedIntro}
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
                  data-gtm-id="page_cta_oferta"
                  data-gtm-location="service_city_page"
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
                    Pachete disponibile
                  </p>
                  <p className="text-sm text-white/50 font-light mb-4">
                    Oferim opțiuni pentru orice buget. Vezi pachetele noastre.
                  </p>
                  <Link
                    href={`/servicii/${slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-obsidian text-[11px] font-semibold tracking-widest uppercase rounded-full hover:bg-gold-dark transition"
                  >
                    Vezi Pachete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-warm">
          <div className="container-brand max-w-3xl">
            <p className="overline-text text-gold mb-3">
              Întrebări frecvente — {cityData.name}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-obsidian mb-8">
              {service.title} în {cityData.name}
            </h2>
            <div className="divide-y divide-warm-dark">
              {cityData.faqs.map((faq, i) => (
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

        {/* Zone coverage */}
        <section className="py-10 bg-ivory border-t border-charcoal/10">
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
