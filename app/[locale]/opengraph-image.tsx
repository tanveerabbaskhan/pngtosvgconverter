import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#131022",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 88,
              height: 88,
              borderRadius: 20,
              backgroundColor: "#7c3aed",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 24 24" width={52} height={52} fill="none">
              <path
                d="M4 12c2.5-6 13.5-6 16 0-2.5 6-13.5 6-16 0Z"
                stroke="white"
                strokeWidth={1.75}
              />
              <circle cx="12" cy="12" r="2.5" stroke="white" strokeWidth={1.75} />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "#f1eefb" }}>
            PNGtoSVG
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 34,
            fontWeight: 600,
            color: "#f1eefb",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {t("h1")}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 24,
            color: "#b3adc9",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          {t("subtitle")}
        </div>
      </div>
    ),
    { ...size },
  );
}
