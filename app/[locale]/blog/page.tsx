import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getBlogPostList } from "@/lib/content/blogPosts";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";

// ISR: the blog hub re-checks for new/updated posts periodically
// rather than only at build time, per the brief's Section 1 requirement.
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogHub" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/blog",
    locale,
  });
}

export default async function BlogHubPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blogHub");
  const tCommon = await getTranslations("common");
  const blogPostList = getBlogPostList(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[{ label: tCommon("home"), path: "/" }, { label: t("title"), path: "/blog" }]}
        locale={locale}
      />
      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{t("title")}</h1>
      <p className="prose-content mt-4 text-lg leading-relaxed text-text-muted">{t("intro")}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {blogPostList.map((post) => (
          <Card key={post.slug}>
            {post.publishedAt && (
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </p>
            )}
            <h2 className="mt-1 text-lg font-semibold text-text">
              <Link href={`/${post.slug}`} className="hover:text-brand-600">
                {post.h1}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {post.metaDescription}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
