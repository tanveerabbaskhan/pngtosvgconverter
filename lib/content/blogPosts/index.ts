import type { Locale } from "@/i18n/routing";
import type { ContentPage } from "../types";
import { blogPosts as en } from "./en";
import { blogPosts as de } from "./de";
import { blogPosts as fr } from "./fr";
import { blogPosts as es } from "./es";
import { blogPosts as ja } from "./ja";
import { blogPosts as nl } from "./nl";

const blogPostsByLocale: Record<Locale, Record<string, ContentPage>> = {
  en,
  de,
  fr,
  es,
  ja,
  nl,
};

export const blogPostSlugs = Object.keys(en);

export function getBlogPost(locale: Locale, slug: string): ContentPage | undefined {
  return blogPostsByLocale[locale][slug];
}

export function getBlogPostList(locale: Locale): ContentPage[] {
  return blogPostSlugs
    .map((slug) => blogPostsByLocale[locale][slug])
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}
