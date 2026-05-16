import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { EVENT_TYPES } from "@/lib/constants";

export default function EventCategories() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <AnimatedSection className="mb-12">
          <SectionHeader
            overline="Tipuri de evenimente"
            title="Pentru orice tip de eveniment"
            subtitle="Adaptăm fiecare soluție la specificul evenimentului tău — fie că e o nuntă romantică, un corporate elegant sau o petrecere privată."
            center
            className="max-w-2xl mx-auto text-center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EVENT_TYPES.map((event, i) => (
            <AnimatedSection key={event.slug} delay={i * 80}>
              <Link
                href={event.href}
                className="group relative block aspect-[3/4] md:aspect-[2/3] rounded-sm overflow-hidden"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p className="overline-text text-gold text-[10px] mb-2">
                    {event.slug === "nunti"
                      ? "50–150 invitați"
                      : event.slug === "corporate"
                      ? "Corporate"
                      : "Evenimente Speciale"}
                  </p>
                  <h3 className="font-display text-2xl text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light mb-4 max-w-xs">
                    {event.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Descoperă <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
