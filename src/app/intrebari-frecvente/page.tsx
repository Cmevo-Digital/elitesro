import type { Metadata } from "next";
import { FAQS, EXTRA_FAQS, WHATSAPP_URL } from "@/lib/constants";
import { faqPageSchema, safeStringify } from "@/lib/jsonld";
import FaqAccordion from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Întrebări Frecvente",
  description:
    "Răspunsuri la cele mai frecvente întrebări despre serviciile Elites Events — mobilier, corturi, veselă, DJ și logistică pentru evenimente în București, Ilfov, Pitești și Ploiești.",
  alternates: { canonical: "/intrebari-frecvente/" },
};

const allFaqs = [...FAQS, ...EXTRA_FAQS];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(faqPageSchema(allFaqs)) }}
      />
      <FaqAccordion faqs={allFaqs} whatsappUrl={WHATSAPP_URL} />
    </>
  );
}
