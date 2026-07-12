import type { Locale } from "@/i18n/routing";
import type { ContentPage } from "../types";
import { guides as en } from "./en";
import { guides as de } from "./de";
import { guides as fr } from "./fr";
import { guides as es } from "./es";
import { guides as ja } from "./ja";
import { guides as nl } from "./nl";

const guidesByLocale: Record<Locale, Record<string, ContentPage>> = {
  en,
  de,
  fr,
  es,
  ja,
  nl,
};

// Slugs are identical across locales (only English defines the
// canonical set); each locale file must provide a translated ContentPage
// for every one of these keys.
export const guideSlugs = Object.keys(en);

export function getGuide(locale: Locale, slug: string): ContentPage | undefined {
  return guidesByLocale[locale][slug];
}

export function getGuideList(locale: Locale): ContentPage[] {
  return guideSlugs.map((slug) => guidesByLocale[locale][slug]);
}
