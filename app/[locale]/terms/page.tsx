import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type Section = { heading: string; body: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/terms",
    locale,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terms");
  const tCommon = await getTranslations("common");
  const sections = t.raw("sections") as Section[];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: tCommon("home"), path: "/" }, { label: t("title"), path: "/terms" }]} locale={locale} />

      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{t("title")}</h1>
      <p className="mt-3 text-sm text-text-muted">{t("lastUpdated")}</p>

      <div className="prose-content mt-8 space-y-8 text-text-muted">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-text">{section.heading}</h2>
            <p className="mt-3">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
