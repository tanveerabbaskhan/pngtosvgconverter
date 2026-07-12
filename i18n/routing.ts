import { defineRouting } from "next-intl/routing";

// Tier-1 locales per Section 11 of the brief. English is unprefixed
// (defaultLocale); the other five now ship real, AI-assisted-translated
// content (pending native/fluent review before this is considered
// launch-ready — see the translation QA note in project notes).
export const locales = ["en", "de", "fr", "es", "ja", "nl"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});

// Full rollout list for the visible language switcher (Section 11).
export const plannedLocales = [
  { code: "en", label: "English", active: true },
  { code: "de", label: "Deutsch", active: true },
  { code: "fr", label: "Français", active: true },
  { code: "es", label: "Español", active: true },
  { code: "ja", label: "日本語", active: true },
  { code: "nl", label: "Nederlands", active: true },
] as const;
