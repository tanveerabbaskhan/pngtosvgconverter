import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { renderInline } from "@/lib/content/inline";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/about",
    locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCommon = await getTranslations("common");

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: tCommon("home"), path: "/" }, { label: t("title"), path: "/about" }]} locale={locale} />

      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{t("title")}</h1>

      <div className="prose-content mt-6 space-y-5 text-text-muted">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
      </div>

      <h2 className="mt-10 text-2xl font-semibold tracking-tight text-text">
        {t("whoHeading")}
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-text">{t("whoMakersTitle")}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{t("whoMakersBody")}</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-text">{t("whoDesignersTitle")}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{t("whoDesignersBody")}</p>
        </Card>
      </div>

      <h2 className="mt-10 text-2xl font-semibold tracking-tight text-text">
        {t("approachHeading")}
      </h2>
      <div className="prose-content mt-5 space-y-4 text-text-muted">
        <p>{t("approachP1")}</p>
        <p>{renderInline(t("approachP2"))}</p>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-bg-subtle p-6 text-center">
        <p className="text-text-muted">{t("ctaText")}</p>
        <Button as="a" href="/" className="mt-4">
          {t("ctaButton")}
        </Button>
      </div>
    </article>
  );
}
