import type { Metadata } from "next";
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
    "Elites Events — Închirieri & Logistică Evenimente București, Ilfov, Pitești",
  description:
    "Partenerul tău premium pentru evenimente de 50–150 invitați. Mobilier, corturi, veselă, iluminat, DJ și logistică completă în București, Ilfov și Pitești.",
};

export default function HomePage() {
  return (
    <>
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
