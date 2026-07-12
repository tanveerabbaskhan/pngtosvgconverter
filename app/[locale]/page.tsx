import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { PngToSvgTool } from "@/components/tool/PngToSvgTool";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/",
    locale,
  });
}

const bestForCards = [
  { titleKey: "bestForLogos", bodyKey: "bestForLogosBody" },
  { titleKey: "bestForPhotos", bodyKey: "bestForPhotosBody" },
  { titleKey: "bestForSketches", bodyKey: "bestForSketchesBody" },
] as const;

type Usp = { title: string; body: string };
type LinkCard = { href: string; label: string };
type ComparisonTable = { headers: string[]; rows: string[][] };

function buildSoftwareApplicationSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PNG to SVG Converter",
    url: SITE_URL,
    applicationCategory: "DesignApplication",
    operatingSystem: "Any (runs in browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description,
  };
}

function buildFaqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const usps = t.raw("usps") as Usp[];
  const useCases = t.raw("useCaseCards") as LinkCard[];
  const learnMore = t.raw("learnMoreCards") as LinkCard[];
  const faqs = t.raw("faqs") as FAQItem[];
  const comparisonTable = t.raw("comparisonTable") as ComparisonTable;
  const whoUses = t.raw("whoUses") as Usp[];
  const formatsList = t.raw("formatsList") as string[];

  return (
    <>
      <SchemaScript schema={buildSoftwareApplicationSchema(t("schemaDescription"))} />
      <SchemaScript schema={buildFaqSchema(faqs)} />

      <section className="mx-auto max-w-4xl px-4 pb-10 pt-14 text-center sm:px-6 sm:pt-20">
        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
          {t("h1")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
          {t("subtitle")}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <Badge>{t("badgeFree")}</Badge>
          <Badge>{t("badgePrivate")}</Badge>
          <Badge>{t("badgeNoSignup")}</Badge>
          <Badge>{t("badgeNoWatermark")}</Badge>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6" aria-label={t("h1")}>
        <PngToSvgTool />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("whatIsHeading")} center />
        <p className="prose-content mx-auto mt-5 text-center text-text-muted">
          {t("whatIsBody")}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("pngVsSvgHeading")} description={t("pngVsSvgIntro")} center />
        <div className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-bg-subtle">
                {comparisonTable.headers.map((h, i) => (
                  <th key={i} className="px-4 py-2.5 font-semibold text-text">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonTable.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("bestForHeading")} center />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {bestForCards.map((card) => (
            <Card key={card.titleKey}>
              <h3 className="font-semibold text-text">{t(card.titleKey)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {t(card.bodyKey)}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("whoUsesHeading")} center />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whoUses.map((persona) => (
            <Card key={persona.title}>
              <h3 className="font-semibold text-text">{persona.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {persona.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("whyHeading")} center />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp) => (
            <Card key={usp.title}>
              <h3 className="font-semibold text-text">{usp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {usp.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("formatsHeading")} center />
        <p className="prose-content mx-auto mt-5 text-center text-text-muted">
          {t("formatsBody")}
        </p>
        <ul className="mx-auto mt-6 max-w-xl list-disc space-y-2 pl-5 text-text-muted">
          {formatsList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("howHeading")} center />
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { title: t("howStep1Title"), body: t("howStep1Body") },
            { title: t("howStep2Title"), body: t("howStep2Body") },
            { title: t("howStep3Title"), body: t("howStep3Body") },
          ].map((step, index) => (
            <li key={step.title} className="rounded-xl border border-border bg-surface p-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-3 font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("useCasesHeading")} center />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <Card key={useCase.href} className="text-center">
              <Link href={useCase.href} className="font-medium text-brand-600 hover:underline">
                {useCase.label}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <SectionHeading title={t("learnMoreHeading")} center />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {learnMore.map((guide) => (
            <Card key={guide.href} className="text-center">
              <Link href={guide.href} className="font-medium text-brand-600 hover:underline">
                {guide.label}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <SectionHeading title={t("faqHeading")} center />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
        <div className="mt-10 text-center">
          <Button as="a" href="#main-content">
            {t("ctaTryTool")}
          </Button>
        </div>
      </section>
    </>
  );
}
