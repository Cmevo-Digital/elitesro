import Link from "next/link";
import { Armchair, Tent, UtensilsCrossed, Wine, Lightbulb, Music, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap = {
  armchair: Armchair,
  tent: Tent,
  utensils: UtensilsCrossed,
  "glass-water": Wine,
  lightbulb: Lightbulb,
  music: Music,
};

const services = [
  {
    slug: "mobilier-evenimente",
    title: "Mobilier Evenimente",
    description: "Mese, scaune, lounge seturi și cocktail tables — alese pentru estetică și confort.",
    icon: "armchair",
  },
  {
    slug: "corturi-evenimente",
    title: "Corturi & Structuri",
    description: "Corturi premium pentru nunți, corporate și evenimente private în aer liber.",
    icon: "tent",
  },
  {
    slug: "mese-scaune",
    title: "Mese, Scaune & Cocktail",
    description: "Gama completă de mobilier pentru orice configurație de eveniment.",
    icon: "utensils",
  },
  {
    slug: "vesela-tacamuri",
    title: "Veselă, Pahare & Tacâmuri",
    description: "Seturi complete pentru mese elegante. Fiecare piesă curată, verificată, impecabilă.",
    icon: "glass-water",
  },
  {
    slug: "iluminat",
    title: "Iluminat & Atmosferă",
    description: "Lumini de ambient, fairy lights, spot-uri direcționale — atmosfera care face diferența.",
    icon: "lightbulb",
  },
  {
    slug: "dj-sunet",
    title: "DJ & Sisteme Audio",
    description: "Echipament profesional și DJ cu experiență — sunet clar, energie potrivită.",
    icon: "music",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-warm">
      <div className="container-brand">
        <AnimatedSection>
          <SectionHeader
            overline="Serviciile noastre"
            title="Totul pentru evenimentul tău"
            subtitle="Închiria, livrăm, montăm — și demontăm. Un singur partener pentru toate nevoile evenimentului tău."
            center
            className="max-w-2xl mx-auto text-center mb-14"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={service.slug} delay={i * 60}>
                <Link
                  href={`/servicii/${service.slug}`}
                  className="group block bg-white p-7 rounded-sm hover:-translate-y-1 hover:shadow-hover transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-obsidian mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Află detalii <ArrowRight size={12} />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={400} className="mt-10 text-center">
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/70 hover:text-gold transition-colors duration-200 group"
          >
            Vezi toate serviciile
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
