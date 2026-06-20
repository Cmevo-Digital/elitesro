import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  Tent,
  UtensilsCrossed,
  Wine,
  Lightbulb,
  Music,
  GlassWater,
  Camera,
  ArrowRight,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicii — Închirieri & Logistică Evenimente",
  description:
    "Descoperă toate serviciile Elites Events: mobilier, corturi, veselă, iluminat, DJ și logistică completă pentru evenimente în București, Ilfov, Pitești și Ploiești.",
  alternates: { canonical: "/servicii/" },
};

const services = [
  {
    slug: "mobilier-evenimente",
    title: "Mobilier Evenimente",
    description:
      "Mese elegante, scaune premium, lounge seturi și cocktail tables — fiecare piesă aleasă pentru estetică și confort. Disponibile în diverse stiluri pentru a se potrivi viziunii tale.",
    icon: Armchair,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=900&auto=format&fit=crop",
    features: [
      "Mese rotunde și dreptunghiulare",
      "Scaune Chiavari, Napoleon, tip banchet",
      "Lounge seturi premium",
      "Cocktail tables",
    ],
  },
  {
    slug: "corturi-evenimente",
    title: "Corturi & Structuri",
    description:
      "Corturi premium pentru nunți și corporate în aer liber. Montaj profesional, structuri stabile, posibilitate de climatizare și acces la electricitate.",
    icon: Tent,
    image:
      "https://images.unsplash.com/photo-1692166927778-056466153552?q=80&w=2340&auto=format&fit=crop",
    features: [
      "Corturi pagodă și stretch",
      "Corturi cu pereți laterali",
      "Climatizare disponibilă",
      "Iluminat interior integrat",
    ],
  },
  {
    slug: "mese-scaune",
    title: "Mese, Scaune & Cocktail",
    description:
      "Gama completă de mobilier pentru orice configurație — de la cine formale la cocktail parties în picioare.",
    icon: UtensilsCrossed,
    image:
      "https://plus.unsplash.com/premium_photo-1711305771490-2d39ba080f4b?q=80&w=1287&auto=format&fit=crop",
    features: [
      "Mese pentru 8–12 persoane",
      "Scaune în multiple stiluri",
      "Fețe de masă și huse",
      "Decoruri de masă",
    ],
  },
  {
    slug: "vesela-tacamuri",
    title: "Veselă, Pahare & Tacâmuri",
    description:
      "Seturi complete pentru mese elegante. Farfurii, pahare de vin, apă și șampanie, tacâmuri inox — fiecare piesă curată, verificată și ambalată corespunzător.",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1769230361493-f1f365a99878?q=80&w=2338&auto=format&fit=crop",
    features: [
      "Farfurii pentru toate cursurile",
      "Pahare pentru vin, apă, șampanie",
      "Tacâmuri inox premium",
      "Serviete și suporturi",
    ],
  },
  {
    slug: "iluminat",
    title: "Iluminat & Atmosferă",
    description:
      "Iluminatul face diferența dintre un eveniment obișnuit și unul memorabil. Oferim soluții complete de iluminat ambiental și tehnic.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2340&auto=format&fit=crop",
    features: [
      "Fairy lights și lumini decorative",
      "Spot-uri direcționale",
      "Lumini colorate și LED",
      "Instalații personalizate",
    ],
  },
  {
    slug: "dj-sunet",
    title: "DJ & Sisteme Audio",
    description:
      "Echipament audio profesional și DJ cu experiență în nunți, corporate și petreceri private. Sunet clar, energie potrivită, atmosfera perfectă.",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1665221965525-87fe35deabdd?q=80&w=1356&auto=format&fit=crop",
    features: [
      "Sisteme audio profesionale",
      "DJ cu experiență",
      "Microfoane wireless",
      "Instalare și operare completă",
    ],
  },
  {
    slug: "cocktail-bar",
    title: "Cocktail Bar",
    description:
      "Adaugă un element spectaculos evenimentului tău cu un cocktail bar profesional. Barman cu experiență, ingrediente premium și setup elegant, complet inclus.",
    icon: GlassWater,
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=900&auto=format&fit=crop",
    features: [
      "Bar counter și accesorii complete",
      "Barman profesionist cu experiență",
      "Cocktailuri clasice și signature",
      "Soft drinks și sucuri incluse",
    ],
  },
  {
    slug: "photo-booth",
    title: "Photo Booth",
    description:
      "Photo booth-ul nostru interactiv transformă orice eveniment într-o experiență de neuitat. Imprimare instantă, props incluse și template personalizat cu detaliile evenimentului.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1590446011295-f52a6ad8ad1b?q=80&w=900&auto=format&fit=crop",
    features: [
      "Cameră profesională de înaltă rezoluție",
      "Imprimare instantă (10–15 secunde)",
      "Props și accesorii incluse",
      "Template personalizat cu logo eveniment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-obsidian pt-28 pb-16">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">Servicii</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-2xl leading-tight">
            Tot ce ai nevoie pentru un eveniment impecabil
          </h1>
          <p className="mt-4 text-white/50 font-light max-w-xl">
            Un singur partener pentru toate nevoile evenimentului tău. Livrăm,
            montăm și demontăm — tu te bucuri.
          </p>
        </div>
      </div>

      {/* Logistics highlight */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="container-brand py-5">
          <div className="flex items-center gap-3">
            <Truck size={18} className="text-gold shrink-0" />
            <p className="text-sm text-charcoal">
              <strong>Livrare, montaj și demontaj incluse</strong> în toate
              pachetele noastre. Operăm în București, Ilfov, Pitești și
              Ploiești.
            </p>
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="container-brand section-padding">
        <div className="space-y-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-[280px_1fr] hover:shadow-hover transition-shadow duration-300"
              >
                {/* Image column */}
                <div className="relative h-52 md:h-auto min-h-[180px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                  <div className="absolute inset-0 bg-obsidian/25" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content column */}
                <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <span className="overline-text text-gold text-[10px] block mb-3">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-2xl text-obsidian mb-3">
                      {service.title}
                    </h2>
                    <p className="text-sm text-charcoal/60 leading-relaxed font-light mb-5">
                      {service.description}
                    </p>
                    <Link
                      href={`/servicii/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark transition-colors group"
                    >
                      Detalii complete
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                  <div>
                    <p className="overline-text text-[10px] text-charcoal/40 mb-3">
                      Include
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
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
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-charcoal/50 text-sm mb-5">
            Ai nevoie de mai mult? Avem și parteneri pentru foto/video, cocktail
            bar și planning complet.
          </p>
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Solicită Ofertă Personalizată
          </Link>
        </div>
      </div>
    </div>
  );
}
