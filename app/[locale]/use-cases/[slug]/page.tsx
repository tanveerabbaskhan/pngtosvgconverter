import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getUseCase, useCaseSlugs } from "@/lib/content/useCases";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { ContentTemplate } from "@/components/content/ContentTemplate";

export function generateStaticParams() {
  return useCaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const useCase = getUseCase(locale, slug);
  if (!useCase) return {};
  return buildMetadata({
    title: useCase.title,
    description: useCase.metaDescription,
    path: `/use-cases/${slug}`,
    locale,
  });
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const useCase = getUseCase(locale, slug);
  if (!useCase) notFound();
  const tCommon = await getTranslations("common");
  const tHub = await getTranslations("useCasesHub");

  return (
    <ContentTemplate
      page={useCase}
      locale={locale}
      breadcrumbs={[
        { label: tCommon("home"), path: "/" },
        { label: tHub("title"), path: "/use-cases" },
        { label: useCase.breadcrumbLabel, path: `/use-cases/${slug}` },
      ]}
    />
  );
}
