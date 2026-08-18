import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { blogListingSchema, safeStringify } from "@/lib/jsonld";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Sfaturi & Ghiduri Evenimente | Elites Events",
  description:
    "Articole despre planificarea evenimentelor, idei de decor, ghiduri pentru nunți și corporate. De la echipa Elites Events.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(blogListingSchema()),
        }}
      />

      <div className="min-h-screen bg-ivory">
        {/* Hero */}
        <div className="bg-obsidian pt-28 pb-16">
          <div className="container-brand">
            <p className="overline-text text-gold mb-3">Blog</p>
            <h1 className="font-display text-4xl md:text-5xl text-white max-w-2xl leading-tight">
              Sfaturi, ghiduri și inspirație pentru evenimentul tău
            </h1>
            <p className="mt-4 text-white/50 font-light max-w-lg text-base leading-relaxed">
              Articole practice despre planificarea evenimentelor, decor, logistică și tot ce ai nevoie să știi.
            </p>
          </div>
        </div>

        {/* Posts grid */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            {posts.length === 0 ? (
              <p className="text-charcoal/50 font-light text-center py-16">
                Articolele vor apărea în curând. Revino!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm border-t border-charcoal/10">
          <div className="container-brand text-center">
            <p className="overline-text text-gold mb-3">Ai un eveniment în pregătire?</p>
            <h2 className="font-display text-2xl md:text-3xl text-obsidian mb-6">
              Solicită o ofertă gratuită
            </h2>
            <Link
              href="/cerere-oferta/"
              data-gtm-id="page_cta_oferta"
              data-gtm-location="blog_index"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
            >
              Solicită Ofertă
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
