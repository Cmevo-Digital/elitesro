import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { getAllPostSlugs } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://elites.ro";

const CITY_SLUGS = ["bucuresti", "ilfov", "pitesti", "ploiesti", "dambovita"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = getAllPostSlugs();

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogSlugs.map(({ slug }) => ({
      url: `${BASE}/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/servicii/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityServiceEntries: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    CITY_SLUGS.map((c) => ({
      url: `${BASE}/servicii/${s.slug}/${c}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    {
      url: BASE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/servicii`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceEntries,
    ...cityServiceEntries,
    {
      url: `${BASE}/evenimente`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/evenimente/nunti`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/evenimente/corporate`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/evenimente/private`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/portofoliu`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/testimoniale`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/despre-noi`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE}/intrebari-frecvente`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE}/cerere-oferta`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
