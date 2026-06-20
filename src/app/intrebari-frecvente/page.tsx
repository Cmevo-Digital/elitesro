import { FAQS, EXTRA_FAQS, WHATSAPP_URL } from "@/lib/constants";
import { faqPageSchema, safeStringify } from "@/lib/jsonld";
import FaqAccordion from "@/components/faq/FaqAccordion";

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
