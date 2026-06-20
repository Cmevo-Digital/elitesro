import { BRAND } from "./constants";

const BASE_URL = "https://elites.ro";
const ORG_ID = `${BASE_URL}/#organization`;

const AREA_SERVED = [
  { "@type": "City", name: "București" },
  { "@type": "AdministrativeArea", name: "Ilfov" },
  { "@type": "City", name: "Pitești" },
  { "@type": "City", name: "Ploiești" },
];

export function safeStringify(obj: unknown): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function organizationAndLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": ORG_ID,
    name: BRAND.fullName,
    url: `${BASE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/opengraph-image.png`,
    },
    image: `${BASE_URL}/opengraph-image.png`,
    description:
      "Partenerul tău premium pentru evenimente de 50–150 invitați. Mobilier, corturi, veselă, iluminat, DJ și logistică completă în București, Ilfov, Pitești și Ploiești.",
    telephone: BRAND.phoneRaw,
    email: BRAND.email,
    priceRange: "$$",
    areaServed: AREA_SERVED,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND.phoneRaw,
      contactType: "customer service",
      availableLanguage: "Romanian",
    },
    sameAs: [BRAND.social.instagram, BRAND.social.facebook],
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${BASE_URL}/servicii/${params.slug}/`,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  };
}

export function eventServiceSchema(params: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${BASE_URL}/evenimente/${params.slug}/`,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  };
}

export function cityServiceSchema(params: {
  name: string;
  description: string;
  slug: string;
  city: string;
  cityName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${params.name} ${params.cityName}`,
    description: params.description,
    url: `${BASE_URL}/servicii/${params.slug}/${params.city}/`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: params.cityName },
  };
}

export function blogPostSchema(params: {
  post: {
    title: string;
    description: string;
    slug: string;
    date: string;
    coverImage: string;
    author?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.post.title,
    description: params.post.description,
    url: `${BASE_URL}/blog/${params.post.slug}/`,
    datePublished: params.post.date,
    image: params.post.coverImage,
    author: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: params.post.author ?? "Elites Events",
    },
    publisher: { "@id": ORG_ID },
    inLanguage: "ro",
  };
}

export function blogListingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Elites Events",
    url: `${BASE_URL}/blog/`,
    description:
      "Sfaturi, ghiduri și inspirație pentru organizarea evenimentelor.",
    publisher: { "@id": ORG_ID },
    inLanguage: "ro",
  };
}

export function faqPageSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
