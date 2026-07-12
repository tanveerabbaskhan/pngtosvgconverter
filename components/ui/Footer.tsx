import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGuideList } from "@/lib/content/guides";
import { getUseCaseList } from "@/lib/content/useCases";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const guideList = getGuideList(locale);
  const useCaseList = getUseCaseList(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-semibold text-text">
              PNGtoSVG
            </Link>
            <p className="mt-3 text-sm text-text-muted">{t("tagline")}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text">{t("productHeading")}</h2>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-brand-600">
                  {tNav("tool")}
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-brand-600">
                  {tNav("guides")}
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-brand-600">
                  {tNav("useCases")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-600">
                  {tNav("blog")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-600">
                  {tNav("about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text">{t("guidesHeading")}</h2>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              {guideList.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/${guide.slug}`} className="hover:text-brand-600">
                    {guide.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text">{t("useCasesHeading")}</h2>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              {useCaseList.map((useCase) => (
                <li key={useCase.slug}>
                  <Link href={`/${useCase.slug}`} className="hover:text-brand-600">
                    {useCase.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-text-muted sm:flex-row">
          <p>
            &copy; {year} PNGtoSVG. {t("rights")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-brand-600">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="hover:text-brand-600">
              {t("terms")}
            </Link>
            <LanguageSwitcher label={tNav("language")} />
          </div>
        </div>
      </div>
    </footer>
  );
}
