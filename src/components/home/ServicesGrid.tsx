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
  Coffee,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap = {
  armchair: Armchair,
  tent: Tent,
  utensils: UtensilsCrossed,
  "glass-water": Wine,
  lightbulb: Lightbulb,
  music: Music,
  cocktail: GlassWater,
  camera: Camera,
  coffee: Coffee,
};

export const services = [
  {
    slug: "cabina-foto",
    title: "Cabina Foto",
    description:
      "Cabina foto interactivă cu imprimare instantă — distracție garantată și amintiri pentru toți invitații.",
    icon: "camera",
    image:
      "/images/servicii/cabina-foto/cabina-foto-luxury-mirror-booth-pro-1.png",
    active: true,
  },
  {
    slug: "dj-sunet",
    title: "DJ & Sisteme Audio",
    description:
      "Echipament profesional și DJ cu experiență — sunet clar, energie potrivită.",
    icon: "music",
    image:
      "https://images.unsplash.com/photo-1665221965525-87fe35deabdd?q=80&w=1356&auto=format&fit=crop",
    active: true,
  },
  {
    slug: "cocktail-bar",
    title: "Cocktail Bar",
    description:
      "Cocktail bar profesional pentru evenimente — cocktailuri signature, barman cu experiență, setup elegant.",
    icon: "cocktail",
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=800&auto=format&fit=crop",
    active: true,
  },
  {
    slug: "coffee-corner",
    title: "Coffee Corner",
    description:
      "Colț de cafea cu barista și espressor profesional — specialty coffee servit la standard de cafenea.",
    icon: "coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    active: true,
  },
  {
    slug: "mobilier-evenimente",
    title: "Mobilier Evenimente",
    description:
      "Mese, scaune, lounge seturi și cocktail tables — alese pentru estetică și confort.",
    icon: "armchair",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    active: false,
  },
  {
    slug: "corturi-evenimente",
    title: "Corturi & Structuri",
    description:
      "Corturi premium pentru nunți, corporate și evenimente private în aer liber.",
    icon: "tent",
    image:
      "https://images.unsplash.com/photo-1692166927778-056466153552?q=80&w=2340&auto=format&fit=crop",
    active: false,
  },
  {
    slug: "mese-scaune",
    title: "Mese, Scaune & Cocktail",
    description:
      "Gama completă de mobilier pentru orice configurație de eveniment.",
    icon: "utensils",
    image:
      "https://plus.unsplash.com/premium_photo-1711305771490-2d39ba080f4b?q=80&w=1287&auto=format&fit=crop",
    active: false,
  },
  {
    slug: "vesela-tacamuri",
    title: "Veselă, Pahare & Tacâmuri",
    description:
      "Seturi complete pentru mese elegante. Fiecare piesă curată, verificată, impecabilă.",
    icon: "glass-water",
    image:
      "https://images.unsplash.com/photo-1769230361493-f1f365a99878?q=80&w=2338&auto=format&fit=crop",
    active: false,
  },
  {
    slug: "iluminat",
    title: "Iluminat & Atmosferă",
    description:
      "Lumini de ambient, fairy lights, spot-uri direcționale — atmosfera care face diferența.",
    icon: "lightbulb",
    image:
      "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2340&auto=format&fit=crop",
    active: false,
  },
];

export const activeServices = services.filter((s) => s.active);

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-warm">
      <div className="container-brand">
        <AnimatedSection>
          <SectionHeader
            overline="Serviciile noastre"
            title="Totul pentru evenimentul tău"
            subtitle="Închiriem, livrăm, montăm și demontăm. Un singur partener pentru toate nevoile evenimentului tău."
            center
            className="max-w-2xl mx-auto text-center mb-14"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeServices.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={service.slug} delay={i * 60}>
                <Link
                  href={`/servicii/${service.slug}`}
                  className="group block bg-white rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-hover transition-all duration-300 h-full"
                >
                  {/* Image thumbnail */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/20 transition-colors duration-300" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-lg text-obsidian mb-2 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed font-light">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-gold transition-all duration-300">
                      Află detalii{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </span>
                  </div>
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
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
