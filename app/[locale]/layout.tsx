import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL, SITE_NAME, localizedUrl } from "@/lib/seo";
import { ThemeScript } from "@/components/ui/ThemeScript";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { SchemaScript } from "@/components/ui/SchemaScript";
import "../globals.css";

function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/icon`, width: 32, height: 32 },
  };
}

function buildWebSiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: localizedUrl("/", locale),
    inLanguage: locale,
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  verification: {
    google: "tDdV_tWkrT7MCpfVbsm9ktjtIteb48PW07SSIVzVp8c",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <head>
        <ThemeScript />
        <SchemaScript schema={buildOrganizationSchema()} />
        <SchemaScript schema={buildWebSiteSchema(locale)} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3YXTY34BXW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3YXTY34BXW');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-bg text-text">
        <NextIntlClientProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
