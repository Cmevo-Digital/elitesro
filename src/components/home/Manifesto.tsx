import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Manifesto() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="up">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1613128517587-08dc18819ebe?q=80&w=1287&auto=format&fit=crop"
                alt="Masă elegantă — detalii premium Elites Events"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gold accent corner */}
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gold" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="up" delay={120}>
            <div className="space-y-6">
              <p className="overline-text text-gold">Despre noi</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-obsidian leading-tight">
                Nu doar închirieri.
                <br />
                <em className="not-italic text-charcoal/70">
                  O execuție fără compromisuri.
                </em>
              </h2>

              <div className="space-y-4 text-charcoal/70 text-base leading-relaxed font-light">
                <p>
                  Știm că în spatele oricărui eveniment reușit se află zeci de
                  decizii logistice pe care nimeni nu ar trebui să le gestioneze
                  singur — mai ales în ziua evenimentului.
                </p>
                <p>
                  Lucrăm cu clienți privați, companii și cupluri care vor un
                  partener de încredere, nu un simplu furnizor de scaune. Aducem
                  mobilier ales cu grijă, structuri impecabile și echipamente
                  verificate profesional — la timp, montate corect, gata când ai
                  nevoie de ele.
                </p>
                <p>
                  Operăm în{" "}
                  <strong className="text-obsidian font-medium">
                    București, Ilfov, Pitești și Ploiești
                  </strong>
                  . Răspundem în ore, nu în zile.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="/despre-noi"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200 group"
                >
                  Citește povestea noastră
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
