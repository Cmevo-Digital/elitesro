import Link from "next/link";
import Image from "next/image";
import type { BlogPostSummary } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostSummary;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group bg-warm rounded-sm overflow-hidden hover:-translate-y-0.5 hover:shadow-hover transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.description}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <p className="overline-text text-gold text-[10px]">{post.category}</p>
          {post.readTime && (
            <p className="text-[10px] text-charcoal/40 font-light">
              {post.readTime} min citire
            </p>
          )}
        </div>

        <h2 className="font-display text-lg text-obsidian leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-sm text-charcoal/60 leading-relaxed font-light flex-1">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-charcoal/10">
          <p className="text-xs text-charcoal/40 font-light">
            {new Date(post.date).toLocaleDateString("ro-RO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <span className="text-gold text-sm transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
