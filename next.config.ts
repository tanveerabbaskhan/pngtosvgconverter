import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pngtosvgconverter.com" }],
        destination: "https://pngtosvgconverter.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
