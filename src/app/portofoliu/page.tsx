import type { Metadata } from "next";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portofoliu — Evenimente Create de Noi",
  description:
    "Descoperă portofoliul Elites Events — nunți, corporate și evenimente private organizate în București, Ilfov, Pitești și Ploiești. Fiecare setup spune o poveste.",
  alternates: { canonical: "/portofoliu/" },
};

export default function PortfolioPage() {
  return <PortfolioGallery />;
}
