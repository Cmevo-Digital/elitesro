"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/lib/constants";

const categories = [
  { slug: "toate", label: "Toate" },
  { slug: "nunti", label: "Nunți" },
  { slug: "corporate", label: "Corporate" },
  { slug: "corturi", label: "Corturi" },
  { slug: "mobilier", label: "Mobilier" },
  { slug: "iluminat", label: "Iluminat" },
  { slug: "private", label: "Private" },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState("toate");

  const filtered =
    active === "toate"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-obsidian pt-28 pb-16">
        <div className="container-brand">
          <p className="overline-text text-gold mb-4">Portofoliu</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-xl leading-tight">
            Evenimente create de noi
          </h1>
          <p className="mt-4 text-white/50 font-light">
            Fiecare eveniment este unic. Fiecare setup spune o poveste.
          </p>
        </div>
      </div>

      <div className="container-brand section-padding">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`px-5 py-2 text-xs font-semibold rounded-full border transition-all duration-200 ${
                active === cat.slug
                  ? "bg-obsidian text-white border-obsidian"
                  : "bg-white text-charcoal/70 border-warm-dark hover:border-obsidian"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className={`group relative rounded-sm overflow-hidden bg-warm ${
                i % 5 === 0
                  ? "col-span-2 md:col-span-1 aspect-[4/3]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-charcoal/40">
            <p>Nicio imagine în această categorie momentan.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-charcoal/50 mb-5">
            Vrei un eveniment similar? Hai să discutăm.
          </p>
          <Link
            href="/cerere-oferta"
            data-gtm-id="page_cta_oferta"
            data-gtm-location="portfolio_gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Solicită Ofertă Gratuită
          </Link>
        </div>
      </div>
    </div>
  );
}
