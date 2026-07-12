import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getGuide, guideSlugs } from "@/lib/content/guides";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { ContentTemplate } from "@/components/content/ContentTemplate";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
    locale,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const guide = getGuide(locale, slug);
  if (!guide) notFound();
  const tCommon = await getTranslations("common");
  const tHub = await getTranslations("guidesHub");

  return (
    <ContentTemplate
      page={guide}
      locale={locale}
      breadcrumbs={[
        { label: tCommon("home"), path: "/" },
        { label: tHub("title"), path: "/guides" },
        { label: guide.breadcrumbLabel, path: `/guides/${slug}` },
      ]}
    />
  );
}
