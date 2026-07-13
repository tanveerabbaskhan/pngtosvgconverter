import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://pngtosvgconverter.com";
export const SITE_NAME = "PNG to SVG Converter";

/** The live URL for a given path in a given locale ("as-needed" prefixing). */
export function localizedUrl(path: string, locale: Locale): string {
  const normalizedPath = path === "/" ? "" : path;
  return locale === routing.defaultLocale
    ? `${SITE_URL}${normalizedPath}`
    : `${SITE_URL}/${locale}${normalizedPath}`;
}

/**
 * Reciprocal hreflang map for a path: one entry per configured locale
 * plus x-default (pointing at the default-locale version). Shared by
 * page metadata (alternates.languages) and the sitemap (per-URL
 * alternates), so both stay in sync as locales are added.
 */
export function buildLanguageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": localizedUrl(path, routing.defaultLocale),
  };
  for (const l of routing.locales) {
    languages[l] = localizedUrl(path, l);
  }
  return languages;
}

/**
 * Builds a page's Metadata: a self-referencing canonical for *this*
 * locale's URL, Open Graph, Twitter card, and alternates.languages
 * (reciprocal hreflang across every configured locale + x-default).
 */
export function buildMetadata({
  title,
  description,
  path,
  locale = routing.defaultLocale,
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): Metadata {
  const canonical = localizedUrl(path, locale);
  const languages = buildLanguageAlternates(path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** The dynamically-generated OG image URL for a locale (1200x630, next/og). */
export function ogImageUrl(locale: Locale): string {
  return `${SITE_URL}/${locale}/opengraph-image`;
}

/** ItemList schema for a hub/listing page (guides, use-cases, blog). */
export function buildItemListSchema(items: { name: string; path: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: localizedUrl(item.path, locale),
    })),
  };
}

export type BreadcrumbEntry = { label: string; path: string };

export function buildBreadcrumbSchema(items: BreadcrumbEntry[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: localizedUrl(item.path, locale),
    })),
  };
}
