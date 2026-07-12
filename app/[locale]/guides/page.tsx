import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGuideList } from "@/lib/content/guides";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guidesHub" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/guides",
    locale,
  });
}

export default async function GuidesHubPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("guidesHub");
  const tCommon = await getTranslations("common");
  const guideList = getGuideList(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[{ label: tCommon("home"), path: "/" }, { label: t("title"), path: "/guides" }]}
        locale={locale}
      />
      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{t("title")}</h1>
      <p className="prose-content mt-4 text-lg leading-relaxed text-text-muted">{t("intro")}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {guideList.map((guide) => (
          <Card key={guide.slug}>
            <h2 className="text-lg font-semibold text-text">
              <Link href={`/${guide.slug}`} className="hover:text-brand-600">
                {guide.h1}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {guide.metaDescription}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
