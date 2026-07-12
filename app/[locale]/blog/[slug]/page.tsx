import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getBlogPost, blogPostSlugs } from "@/lib/content/blogPosts";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { ContentTemplate } from "@/components/content/ContentTemplate";

export function generateStaticParams() {
  return blogPostSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    locale,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPost(locale, slug);
  if (!post) notFound();
  const tCommon = await getTranslations("common");
  const tHub = await getTranslations("blogHub");

  return (
    <ContentTemplate
      page={post}
      locale={locale}
      breadcrumbs={[
        { label: tCommon("home"), path: "/" },
        { label: tHub("title"), path: "/blog" },
        { label: post.breadcrumbLabel, path: `/blog/${slug}` },
      ]}
    />
  );
}
