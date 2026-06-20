import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { ShieldCheck, Clock, Sparkles, Handshake, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Despre Noi",
  description:
    "Cunoaște echipa Elites Events — partenerul tău premium pentru organizarea și logistica evenimentelor în București, Ilfov, Pitești și Ploiești.",
  alternates: { canonical: "/despre-noi/" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Fiabilitate",
    text: "Fiecare echipament este verificat înaintea fiecărui eveniment. Zero compromisuri.",
  },
  {
    icon: Clock,
    title: "Punctualitate",
    text: "Respectăm planningul cu strictețe. Livrăm când spunem, montăm cum agreem.",
  },
  {
    icon: Sparkles,
    title: "Estetică",
    text: "Selectăm cu grijă fiecare element pentru un ambient impecabil și coerent.",
  },
  {
    icon: Handshake,
    title: "Parteneriat",
    text: "Te însoțim de la prima consultație până la demontajul final.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative bg-obsidian pt-28 pb-20 overflow-hidden">
        <div className="relative container-brand">
          <p className="overline-text text-gold mb-4">Despre noi</p>
          <h1 className="font-display text-3xl md:text-5xl text-white max-w-2xl leading-tight">
            Suntem partenerul tău pentru evenimente executate impecabil.
          </h1>
          <p className="mt-5 text-white/50 text-base font-light max-w-xl leading-relaxed">
            Nu suntem o simplă firmă de închirieri. Suntem o echipă de
            profesioniști dedicați să facă fiecare eveniment memorabil prin
            execuție fără compromisuri.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5 text-charcoal/70 text-base leading-relaxed font-light">
              <p className="overline-text text-gold">Povestea noastră</p>
              <h2 className="font-display text-3xl text-obsidian">
                De la pasiune pentru detalii la execuție de calitate
              </h2>
              <p>
                Elites Events s-a născut din convingerea că fiecare eveniment
                merită să fie executat la cel mai înalt standard — indiferent de
                dimensiunea lui. Am văzut prea des cum stresul logistic ruinează
                plăcerea unui eveniment important.
              </p>
              <p>
                Misiunea noastră este simplă: să fim partenerul în care clienții
                noștri au deplină încredere. Să livrăm la timp, să montăm cu
                precizie și să plecăm fără urme — lăsând în urmă doar un ambient
                impecabil.
              </p>
              <p>
                Operăm în{" "}
                <strong className="text-obsidian font-medium">
                  {BRAND.locationsShort}
                </strong>
                , pentru evenimente de 50–150+ invitați: nunți, corporate,
                petreceri private și orice moment care merită o execuție
                deosebită.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1613128517587-08dc18819ebe?q=80&w=1287&auto=format&fit=crop"
                alt="Eveniment elegant amenajat de Elites Events"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm">
        <div className="container-brand">
          <div className="text-center mb-12">
            <p className="overline-text text-gold mb-3">Valorile noastre</p>
            <h2 className="font-display text-3xl md:text-4xl text-obsidian">
              Ce ne definește
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white p-7 rounded-sm">
                  <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center mb-4">
                    <Icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-obsidian mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed font-light">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-ivory">
        <div className="container-brand text-center">
          <p className="overline-text text-gold mb-4">Zone de operare</p>
          <h2 className="font-display text-3xl text-obsidian mb-8">
            Unde operăm
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            {BRAND.locations.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-2 bg-warm px-6 py-4 rounded-sm flex-1 justify-center"
              >
                <MapPin size={16} className="text-gold" />
                <span className="font-medium text-obsidian">{loc}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-charcoal/50">
            Lucrăm și în alte locații — contactează-ne pentru detalii.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-obsidian">
        <div className="container-brand text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Gata să lucrăm împreună?
          </h2>
          <p className="text-white/50 mb-8 font-light">
            Solicită o ofertă gratuită sau contactează-ne direct.
          </p>
          <Link
            href="/cerere-oferta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Solicită Ofertă Gratuită
          </Link>
        </div>
      </section>
    </div>
  );
}
