import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { serviceSchema, safeStringify } from "@/lib/jsonld";
import { serviceDetails } from "@/lib/services";

const CITY_LINKS = [
  { slug: "bucuresti", name: "București" },
  { slug: "ilfov", name: "Ilfov" },
  { slug: "pitesti", name: "Pitești" },
  { slug: "ploiesti", name: "Ploiești" },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Serviciu negăsit" };
  return {
    title: `${service.title} — Elites Events`,
    description: service.short,
    alternates: { canonical: `/servicii/${slug}/` },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(
            serviceSchema({ name: service.title, description: detail.description, slug })
          ),
        }}
      />
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

              <Link
                href="/cerere-oferta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
              >
                Solicită Ofertă pentru Acest Serviciu
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
                    <h3 className="font-medium text-sm text-obsidian mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs text-charcoal/50 font-light leading-relaxed">
                      {s.short}
                    </p>
                  </div>
                  <span className="text-gold shrink-0">→</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* City pages */}
      <section className="py-10 bg-ivory border-t border-charcoal/10">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">Disponibil și în</p>
          <div className="flex flex-wrap gap-3">
            {CITY_LINKS.map((c) => (
              <Link
                key={c.slug}
                href={`/servicii/${slug}/${c.slug}`}
                className="px-5 py-2.5 border border-charcoal/20 rounded-full text-sm text-charcoal/70 hover:border-gold hover:text-gold transition-all duration-200"
              >
                {service.title} în {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
