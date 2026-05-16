import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

const serviceDetails: Record<
  string,
  {
    description: string;
    longDescription: string;
    features: string[];
    image: string;
    included: string[];
  }
> = {
  "mobilier-evenimente": {
    description: "Mobilier premium pentru evenimente elegante de orice dimensiune.",
    longDescription:
      "Gama noastră de mobilier pentru evenimente cuprinde piese selectate cu atenție pentru a crea un ambient impecabil. Fie că organizezi o nuntă intimă sau un corporate de anvergură, avem soluțiile potrivite.",
    features: ["Mese rotunde și dreptunghiulare", "Scaune Chiavari și Napoleon", "Lounge seturi complete", "Cocktail tables și bar counters"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    included: ["Livrare la locație", "Montaj profesional", "Demontaj și preluare", "Verificare calitate înainte de livrare"],
  },
  "corturi-evenimente": {
    description: "Corturi și structuri premium pentru evenimente outdoor memorabile.",
    longDescription:
      "Corturile noastre transformă orice spațiu exterior într-un venue elegant și funcțional. Disponibile în diferite dimensiuni și configurații, cu posibilitate de climatizare și iluminat.",
    features: ["Corturi stretch și pagodă", "Pereți laterali transparenți sau opaci", "Podele și platforme", "Climatizare la cerere"],
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1200&auto=format&fit=crop",
    included: ["Transport și instalare profesională", "Ancorare sigură", "Verificare meteo", "Demontaj complet"],
  },
  "mese-scaune": {
    description: "Gamă completă de mese și scaune pentru orice configurație de eveniment.",
    longDescription:
      "De la mese banquet pentru cine formale la cocktail tables pentru recepții în picioare, avem exact ce ai nevoie pentru configurația evenimentului tău.",
    features: ["Mese pentru 8, 10, 12 persoane", "Scaune în multiple stiluri", "Fețe de masă și huse", "Decoruri suport"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    included: ["Livrare și aranjare", "Fețe de masă incluse la cerere", "Configurare conform plan", "Demontaj"],
  },
  "vesela-tacamuri": {
    description: "Veselă completă pentru mese elegante — pahare, farfurii, tacâmuri.",
    longDescription:
      "Seturile noastre de veselă sunt perfect potrivite pentru evenimente premium. Fiecare piesă este verificată, curată și ambalată profesional pentru transport.",
    features: ["Farfurii pentru toate cursurile", "Pahare vin, apă, șampanie", "Tacâmuri inox premium", "Boluri și platouri"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    included: ["Ambalare și transport sigur", "Inventar complet verificat", "Înlocuire imediată pentru lipsuri", "Preluare după eveniment"],
  },
  iluminat: {
    description: "Soluții de iluminat ambiental și tehnic pentru atmosfera perfectă.",
    longDescription:
      "Iluminatul este elementul care transformă un spațiu obișnuit într-un ambient memorabil. Oferim soluții complete, de la fairy lights la instalaţii LED profesionale.",
    features: ["Fairy lights și string lights", "Spot-uri direcționale", "Lumini colorate RGB", "Instalații personalizate"],
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200&auto=format&fit=crop",
    included: ["Instalare de specialist", "Cablare ascunsă", "Test înainte de eveniment", "Asistență în timpul evenimentului"],
  },
  "dj-sunet": {
    description: "DJ profesional și sisteme audio de înaltă calitate pentru evenimentul tău.",
    longDescription:
      "Muzica bună și sunetul clar sunt esențiale pentru orice eveniment reușit. Oferim atât sisteme audio pentru auto-operare cât și servicii complete de DJ cu experiență.",
    features: ["Sisteme audio profesionale", "DJ cu experiență în nunți și corporate", "Microfoane wireless", "Iluminat de scenă"],
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop",
    included: ["Soundcheck înainte de eveniment", "DJ pe toată durata", "Playlist personalizat", "Echipament backup"],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Serviciu negăsit" };
  return {
    title: `${service.title} — Elites Events`,
    description: service.short,
  };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) notFound();

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={detail.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-obsidian/30" />
        </div>
        <div className="relative container-brand pb-14 pt-28">
          <p className="overline-text text-gold mb-3">Servicii</p>
          <h1 className="font-display text-4xl md:text-5xl text-white max-w-xl leading-tight">
            {service.title}
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
                {detail.longDescription}
              </p>

              <div>
                <p className="overline-text text-gold text-[10px] mb-4">Disponibil</p>
                <ul className="space-y-2.5">
                  {detail.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-charcoal/70">
                      <span className="text-gold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/cerere-oferta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
              >
                Solicită Ofertă pentru Acest Serviciu
              </Link>
            </div>

            <div className="space-y-5">
              <div className="bg-warm rounded-sm p-7">
                <p className="overline-text text-gold text-[10px] mb-4">Inclus întotdeauna</p>
                <ul className="space-y-2.5">
                  {detail.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-charcoal/70">
                      <span className="text-gold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-obsidian rounded-sm p-7">
                <p className="font-display text-lg text-white mb-2">
                  Vrei să combini mai multe servicii?
                </p>
                <p className="text-sm text-white/50 font-light mb-5">
                  Construiește pachetul perfect pentru evenimentul tău.
                </p>
                <Link
                  href="/cerere-oferta"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-obsidian text-[11px] font-semibold tracking-widest uppercase rounded-full hover:bg-gold-dark transition"
                >
                  Pachet Personalizat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding bg-warm">
        <div className="container-brand">
          <p className="overline-text text-gold mb-3">Alte servicii</p>
          <h2 className="font-display text-2xl text-obsidian mb-8">
            Completează cu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicii/${s.slug}`}
                  className="bg-white p-5 rounded-sm hover:-translate-y-0.5 hover:shadow-hover transition-all duration-300 flex items-center gap-3"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-obsidian mb-1">{s.title}</h3>
                    <p className="text-xs text-charcoal/50 font-light leading-relaxed">{s.short}</p>
                  </div>
                  <span className="text-gold shrink-0">→</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
