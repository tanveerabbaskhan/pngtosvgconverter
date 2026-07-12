import type { MetadataRoute } from "next";
import { localizedUrl, buildLanguageAlternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { guideSlugs } from "@/lib/content/guides";
import { useCaseSlugs } from "@/lib/content/useCases";
import { blogPostSlugs, getBlogPostList } from "@/lib/content/blogPosts";

type PathEntry = {
  path: string;
  lastModified: Date;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: PathEntry[] = [
    { path: "/", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { path: "/about", lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { path: "/guides", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { path: "/use-cases", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { path: "/blog", lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { path: "/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { path: "/terms", lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const guidePaths: PathEntry[] = guideSlugs.map((slug) => ({
    path: `/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const useCasePaths: PathEntry[] = useCaseSlugs.map((slug) => ({
    path: `/use-cases/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog lastModified uses the English publishedAt as a stand-in for the
  // page's freshness across every locale (translations ship together).
  const enBlogPosts = getBlogPostList(routing.defaultLocale);
  const blogPaths: PathEntry[] = blogPostSlugs.map((slug) => {
    const post = enBlogPosts.find((p) => p.slug === `blog/${slug}`);
    return {
      path: `/blog/${slug}`,
      lastModified: post?.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  const allPaths = [...staticPaths, ...guidePaths, ...useCasePaths, ...blogPaths];

  // One <url> entry per locale per path, each carrying the full
  // reciprocal hreflang set (Section 11: "single sitemap with hreflang
  // alternate links").
  const entries: MetadataRoute.Sitemap = [];
  for (const entry of allPaths) {
    const languages = buildLanguageAlternates(entry.path);
    for (const locale of routing.locales) {
      entries.push({
        url: localizedUrl(entry.path, locale),
        lastModified: entry.lastModified,
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
