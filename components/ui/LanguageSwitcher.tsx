"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { plannedLocales, type Locale } from "@/i18n/routing";

export function LanguageSwitcher({ label }: { label: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div className="relative inline-flex items-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-2.5 h-4 w-4 text-text-muted"
        fill="none"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"
        />
      </svg>
      <select
        aria-label={label}
        value={currentLocale}
        onChange={(e) => {
          const target = plannedLocales.find((l) => l.code === e.target.value);
          // Belt-and-suspenders: some browsers/input methods let a
          // "disabled" <option> fire a change event anyway, so never
          // navigate on anything but a genuinely active locale.
          if (!target?.active) {
            e.target.value = currentLocale;
            return;
          }
          router.replace(pathname, { locale: target.code as Locale });
        }}
        className="cursor-pointer appearance-none rounded-lg border border-border bg-transparent py-1.5 pl-8 pr-6 text-sm text-text-muted hover:bg-bg-subtle hover:text-text"
      >
        {plannedLocales.map((locale) => (
          <option key={locale.code} value={locale.code} disabled={!locale.active}>
            {locale.label}
            {!locale.active ? " (coming soon)" : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
