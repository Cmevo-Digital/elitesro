import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  description: string;
  coverImage: string;
  category: string;
  tags?: string[];
  author?: string;
  readTime?: number;
}

export interface BlogPost extends BlogFrontmatter {
  contentHtml: string;
}

export type BlogPostSummary = BlogFrontmatter;

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function getFilePaths(): string[] {
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
}

export function getAllPosts(): BlogPostSummary[] {
  return getFilePaths()
    .map((f) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, f), "utf8");
      return matter(raw).data as BlogFrontmatter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return {
    ...(data as BlogFrontmatter),
    contentHtml: marked(content) as string,
  };
}

export function getAllPostSlugs(): { slug: string }[] {
  return getFilePaths().map((f) => ({ slug: f.replace(/\.md$/, "") }));
}
