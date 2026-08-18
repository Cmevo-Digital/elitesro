"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent",
        )}
      >
        <div className="container-brand flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-display text-xl lg:text-2xl tracking-tight transition-colors duration-300",
              scrolled ? "text-obsidian" : "text-white",
            )}
            onClick={() => setMenuOpen(false)}
          >
            ELITES<span className="text-gold">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "overline-text text-[11px] transition-colors duration-300 hover:text-gold relative group",
                  scrolled ? "text-charcoal" : "text-white/80",
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/cerere-oferta/"
              data-gtm-id="menu_solicita_oferta"
              data-gtm-location="navbar_desktop"
              className={cn(
                "px-5 py-2.5 text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 rounded-full",
                scrolled
                  ? "bg-obsidian text-white hover:bg-charcoal"
                  : "bg-white text-obsidian hover:bg-gold-light",
              )}
            >
              Solicită Ofertă
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors duration-300",
              menuOpen
                ? "text-white"
                : scrolled
                  ? "text-obsidian"
                  : "text-white",
            )}
            aria-label={menuOpen ? "Închide meniu" : "Meniu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-obsidian flex flex-col transition-all duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col justify-center flex-1 container-brand gap-6 pt-16 pb-20">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-white/80 hover:text-white transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/cerere-oferta/"
              onClick={() => setMenuOpen(false)}
              data-gtm-id="menu_solicita_oferta"
              data-gtm-location="navbar_mobile"
              className="w-full text-center px-6 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-widest uppercase rounded-full"
            >
              Solicită Ofertă Gratuită
            </Link>
            <Link
              href={`tel:${BRAND.phoneRaw}`}
              onClick={() => setMenuOpen(false)}
              data-gtm-id="menu_call"
              data-gtm-location="navbar_mobile"
              className="w-full text-center px-6 py-4 border border-white/20 text-white text-[11px] font-semibold tracking-widest uppercase rounded-full"
            >
              {BRAND.phone}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
