import type { Locale } from "@/i18n/routing";
import type { ContentPage } from "../types";
import { useCases as en } from "./en";
import { useCases as de } from "./de";
import { useCases as fr } from "./fr";
import { useCases as es } from "./es";
import { useCases as ja } from "./ja";
import { useCases as nl } from "./nl";

const useCasesByLocale: Record<Locale, Record<string, ContentPage>> = {
  en,
  de,
  fr,
  es,
  ja,
  nl,
};

export const useCaseSlugs = Object.keys(en);

export function getUseCase(locale: Locale, slug: string): ContentPage | undefined {
  return useCasesByLocale[locale][slug];
}

export function getUseCaseList(locale: Locale): ContentPage[] {
  return useCaseSlugs.map((slug) => useCasesByLocale[locale][slug]);
}
