import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elites.ro"),
  title: {
    default:
      "Elites Events — Închirieri & Logistică Evenimente București, Ilfov, Pitești, Ploiești",
    template: "%s | Elites Events",
  },
  description:
    "Partenerul tău premium pentru evenimente de 50–150 invitați. Mobilier, corturi, veselă, iluminat, DJ și logistică completă în București, Ilfov, Pitești și Ploiești.",
  keywords: [
    "inchirieri mobilier evenimente bucuresti",
    "corturi evenimente bucuresti",
    "logistica evenimente ilfov",
    "inchirieri mese scaune nunta pitesti",
    "servicii dj nunta bucuresti",
    "iluminat evenimente bucuresti",
    "organizare evenimente corporate bucuresti",
    "inchirieri vesela evenimente",
    "pachet complet nunta 100 persoane",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://elites.ro",
    siteName: "Elites Events",
    title: "Elites Events — Închirieri & Logistică Evenimente",
    description:
      "Partenerul tău premium pentru evenimente impecabile în București, Ilfov, Pitești și Ploiești.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Elites Events" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elites Events — Închirieri & Logistică Evenimente",
    description:
      "Partenerul tău premium pentru evenimente impecabile în București, Ilfov, Pitești și Ploiești.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-ivory text-obsidian antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
