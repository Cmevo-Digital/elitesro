import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Consultație Gratuită",
    description:
      "Ne contactezi și discutăm evenimentul tău — numărul de invitați, locul, data, viziunea ta.",
  },
  {
    number: "02",
    title: "Ofertă Personalizată",
    description:
      "Primești o ofertă detaliată, adaptată bugetului și nevoilor tale. Fără costuri ascunse.",
  },
  {
    number: "03",
    title: "Confirmare & Planificare",
    description:
      "Confirmăm detaliile, semnăm contractul și pregătim totul cu atenție și precizie.",
  },
  {
    number: "04",
    title: "Livrare, Montaj & Asistență",
    description:
      "Ne ocupăm de transport, instalare și demontaj. Tu te bucuri. Noi ne ocupăm de rest.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-warm">
      <div className="container-brand">
        <AnimatedSection className="mb-14">
          <SectionHeader
            overline="Cum funcționează"
            title="Simplu, transparent și fără stres"
            subtitle="Patru pași simpli de la primul contact până la evenimentul perfect executat."
            center
            className="max-w-2xl mx-auto text-center"
          />
        </AnimatedSection>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line on large screens */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-warm-dark z-0" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 80}>
              <div className="relative flex flex-col gap-4">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-warm-dark flex items-center justify-center self-start lg:self-center mx-0 lg:mx-auto">
                  <span className="font-display text-lg text-gold font-semibold">
                    {step.number}
                  </span>
                </div>

                <div className="lg:text-center">
                  <h3 className="font-display text-lg text-obsidian mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={360} className="mt-12 text-center">
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-white text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-charcoal transition-all duration-300 hover:scale-105"
          >
            Începe Acum
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
