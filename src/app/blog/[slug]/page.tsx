import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { blogPostSchema, safeStringify } from "@/lib/jsonld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Articol negăsit" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: post.coverImage, alt: post.description }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeStringify(blogPostSchema({ post })),
        }}
      />

      <div className="min-h-screen bg-ivory">
        {/* Hero */}
        <div className="relative min-h-[50vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.coverImage}
              alt={post.description}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-obsidian/30" />
          </div>
          <div className="relative container-brand pb-14 pt-28">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/blog"
                className="overline-text text-gold/70 text-[10px] hover:text-gold transition-colors"
              >
                Blog
              </Link>
              <span className="text-white/30 text-xs">›</span>
              <span className="overline-text text-gold text-[10px]">{post.category}</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl text-white max-w-2xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-white/50 text-xs font-light">
              <span>
                {new Date(post.date).toLocaleDateString("ro-RO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post.readTime && (
                <>
                  <span className="text-white/20">·</span>
                  <span>{post.readTime} min citire</span>
                </>
              )}
              {post.author && (
                <>
                  <span className="text-white/20">·</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Article body */}
        <section className="section-padding bg-ivory">
          <div className="container-brand">
            <div className="max-w-2xl mx-auto">
              <div
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="mt-12 pt-8 border-t border-charcoal/10">
                <Link
                  href="/cerere-oferta"
                  data-gtm-id="page_cta_oferta"
                  data-gtm-location="blog_post"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-gold-dark transition-all duration-300 hover:scale-105"
                >
                  Solicită Ofertă Gratuită
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {allPosts.length > 0 && (
          <section className="section-padding bg-warm border-t border-charcoal/10">
            <div className="container-brand">
              <p className="overline-text text-gold mb-3">Citește și</p>
              <h2 className="font-display text-2xl text-obsidian mb-8">
                Alte articole
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}/`}
                    className="bg-white p-5 rounded-sm hover:-translate-y-0.5 hover:shadow-hover transition-all duration-300"
                  >
                    <p className="overline-text text-gold text-[10px] mb-2">{p.category}</p>
                    <h3 className="font-display text-base text-obsidian leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-charcoal/50 font-light leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                    <span className="mt-3 inline-block text-gold text-sm">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
