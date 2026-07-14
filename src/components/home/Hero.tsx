"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1775476793931-cb484f197760?q=80&w=2340&auto=format&fit=crop"
          alt="Eveniment elegant — Elites Events"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Layered overlays for cinematic depth */}
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-obsidian/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-brand w-full flex flex-col items-center text-center pt-24 pb-32">
        {/* Location overline */}
        <div
          className="overline-text text-gold tracking-[0.22em] mb-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          {BRAND.locationsShort}
        </div>

        {/* H1 */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-tight"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
          }}
        >
          Evenimentele Tale.
          <br />
          <em className="text-gold not-italic">Executate Impecabil.</em>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-white/85 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s",
          }}
        >
          De la cabină foto, DJ și sisteme audio profesionale, până la
          cocktail bar — suntem partenerul tău pentru evenimente la care
          fiecare detaliu contează.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-3 items-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s",
          }}
        >
          <Link
            href="/cerere-oferta"
            className="px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Solicită Ofertă Gratuită
          </Link>
          <Link
            href="/servicii"
            className="px-8 py-4 border border-white/30 text-white text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Descoperă Serviciile
          </Link>
        </div>

        {/* Trust micro-line */}
        <p
          className="mt-6 text-white/40 text-xs"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.9s ease 0.75s",
          }}
        >
          Consultație gratuită · Fără obligații · Răspuns în 2 ore
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <span className="text-white/40 text-[9px] font-semibold tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowDown size={14} className="text-gold animate-bounce" />
      </div>
    </section>
  );
}
