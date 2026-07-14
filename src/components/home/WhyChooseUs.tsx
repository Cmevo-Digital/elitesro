import { ShieldCheck, Clock, Sparkles, Handshake } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fiabilitate Garantată",
    description:
      "Echipamentele noastre sunt verificate înaintea fiecărui eveniment. Nicio surpriză neplăcută în ziua cea mare.",
  },
  {
    icon: Clock,
    title: "Execuție Punctuală",
    description:
      "Livrăm și montăm conform planningului agreat. Suntem acolo când ai nevoie. Și plecăm când trebuie.",
  },
  {
    icon: Sparkles,
    title: "Estetică Îngrijită",
    description:
      "Fiecare detaliu — de la decorul cabinei foto la setup-ul barului — este ales pentru a crea un ambient premium, nu doar funcțional.",
  },
  {
    icon: Handshake,
    title: "Un Singur Partener",
    description:
      "Cabină foto, DJ & sunet, cocktail bar — gestionate unitar, fără bătăi de cap între furnizori diferiți.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-obsidian">
      <div className="container-brand">
        <AnimatedSection className="mb-14">
          <SectionHeader
            overline="De ce Elites"
            title="De ce aleg clienții noștri să lucreze cu noi"
            light
            center
            className="max-w-2xl mx-auto text-center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={i * 80}>
                <div className="flex flex-col gap-4 p-7 border border-white/8 rounded-sm hover:border-gold/30 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center">
                    <Icon size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
