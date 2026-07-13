import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Button } from "@/components/ui/Button";
import { renderInline } from "@/lib/content/inline";
import { pickCtaAnchor } from "@/lib/content/ctaAnchors";
import { localizedUrl, ogImageUrl, SITE_NAME } from "@/lib/seo";
import type { ContentBlock, ContentPage } from "@/lib/content/types";
import type { BreadcrumbEntry } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "paragraph") {
          return (
            <div key={i} className="prose-content space-y-4 text-text-muted">
              {block.body.map((p, pi) => (
                <p key={pi}>{renderInline(p)}</p>
              ))}
            </div>
          );
        }
        if (block.kind === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <div key={i} className="prose-content space-y-3">
              {block.intro && <p className="text-text-muted">{renderInline(block.intro)}</p>}
              <ListTag
                className={`space-y-2 text-text-muted ${block.ordered ? "list-decimal" : "list-disc"} pl-5`}
              >
                {block.items.map((item, ii) => (
                  <li key={ii}>{renderInline(item)}</li>
                ))}
              </ListTag>
            </div>
          );
        }
        if (block.kind === "table") {
          return (
            <div key={i} className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-bg-subtle">
                    {block.headers.map((h) => (
                      <th key={h} className="px-4 py-2.5 font-semibold text-text">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, ri) => (
                    <tr key={ri} className="border-t border-border">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-2.5 text-text-muted">
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        // steps
        return (
          <ol key={i} className="grid gap-5 sm:grid-cols-2">
            {block.steps.map((step, si) => (
              <li key={si} className="rounded-xl border border-border bg-surface p-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                  {si + 1}
                </span>
                <h3 className="mt-3 font-semibold text-text">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {renderInline(step.body)}
                </p>
              </li>
            ))}
          </ol>
        );
      })}
    </>
  );
}

function buildFaqSchema(page: ContentPage) {
  if (!page.faqs || page.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function buildBlogPostingSchema(page: ContentPage, locale: Locale) {
  if (!page.publishedAt) return null;
  const url = localizedUrl(`/${page.slug}`, locale);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: page.h1,
    description: page.metaDescription,
    datePublished: page.publishedAt,
    dateModified: page.publishedAt,
    image: ogImageUrl(locale),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}

function buildHowToSchema(page: ContentPage, locale: Locale) {
  if (!page.howTo) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: page.howTo.name,
    step: page.howTo.steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
      url: localizedUrl(`/${page.slug}`, locale),
    })),
  };
}

export async function ContentTemplate({
  page,
  breadcrumbs,
  locale,
}: {
  page: ContentPage;
  breadcrumbs: BreadcrumbEntry[];
  locale: Locale;
}) {
  const t = await getTranslations("content");
  const faqSchema = buildFaqSchema(page);
  const howToSchema = buildHowToSchema(page, locale);
  const blogPostingSchema = buildBlogPostingSchema(page, locale);
  const ctaAnchor = pickCtaAnchor(page.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {faqSchema && <SchemaScript schema={faqSchema} />}
      {howToSchema && <SchemaScript schema={howToSchema} />}
      {blogPostingSchema && <SchemaScript schema={blogPostingSchema} />}

      <Breadcrumbs items={breadcrumbs} locale={locale} />

      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {page.h1}
      </h1>

      {page.publishedAt && (
        <p className="mt-3 text-sm text-text-muted">
          <time dateTime={page.publishedAt}>
            {new Date(page.publishedAt).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
      )}

      {page.intro && (
        <p className="prose-content mt-5 text-lg leading-relaxed text-text-muted">
          {renderInline(page.intro)}
        </p>
      )}

      <div className="mt-10 space-y-10">
        {page.sections.map((section) => {
          const HeadingTag = section.level === 3 ? "h3" : "h2";
          return (
            <section key={section.heading}>
              <HeadingTag className="text-2xl font-semibold tracking-tight text-text">
                {section.heading}
              </HeadingTag>
              <div className="mt-4 space-y-4">
                <Blocks blocks={section.blocks} />
              </div>
            </section>
          );
        })}
      </div>

      {page.faqs && page.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            {t("faqHeading")}
          </h2>
          <div className="mt-4">
            <FAQAccordion items={page.faqs} />
          </div>
        </section>
      )}

      <div className="mt-12 rounded-xl border border-border bg-bg-subtle p-6 text-center">
        <p className="text-text-muted">
          {t("ctaPrefix")}{" "}
          <Link href="/" className="font-semibold text-brand-600 hover:underline">
            {ctaAnchor}
          </Link>
          .
        </p>
        <Button as="a" href="/" className="mt-4">
          {ctaAnchor}
        </Button>
      </div>

      {page.related.length > 0 && (
        <div className="mt-12">
          <RelatedLinks title={page.relatedHeading} items={page.related} />
        </div>
      )}
    </article>
  );
}
