import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GalleryPreview() {
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <AnimatedSection>
            <SectionHeader
              overline="Portofoliu"
              title="Evenimente create de noi"
              subtitle="Fiecare setup spune o poveste diferită."
            />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <Link
              href="/portofoliu/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200 group shrink-0"
            >
              Vezi portofoliul complet
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {preview.map((img, i) => (
            <AnimatedSection
              key={img.src}
              delay={i * 50}
              className={i === 0 || i === 3 ? "row-span-2 h-full" : ""}
            >
              <Link
                href="/portofoliu/"
                className={`group relative block rounded-sm overflow-hidden bg-warm ${
                  i === 0 || i === 3 ? "h-full" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">
                    Ver mai mult
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
