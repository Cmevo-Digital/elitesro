import type { Metadata } from "next";
import { organizationAndLocalBusinessSchema, safeStringify } from "@/lib/jsonld";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Manifesto from "@/components/home/Manifesto";
import ServicesGrid from "@/components/home/ServicesGrid";
import EventCategories from "@/components/home/EventCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title:
    "Elites Events — Închirieri & Logistică Evenimente București, Ilfov, Pitești, Ploiești",
  description:
    "Partenerul tău premium pentru evenimente de 50–150 invitați. Cabină foto, DJ & sisteme audio și cocktail bar în București, Ilfov, Pitești și Ploiești.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(organizationAndLocalBusinessSchema()) }}
      />
      <Hero />
      <TrustBar />
      <Manifesto />
      <ServicesGrid />
      <EventCategories />
      <WhyChooseUs />
      <GalleryPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
