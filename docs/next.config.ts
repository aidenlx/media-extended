import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/docs",
      destination: "/docs/v3",
      permanent: false,
    },
    ...["zh-CN", "en"].map((lang) => ({
      source: `/${lang}`,
      destination: "/docs/v3",
      permanent: false,
    })),
    ...["/getting-started/:path*", "/:lang/getting-started/:path*"].map(
      (path) => ({
        source: path,
        destination: "/docs/v3/getting-started/:path*",
        permanent: true,
      }),
    ),
    ...["/faq", "/:lang/faq"].map((path) => ({
      source: path,
      destination: "/docs/v3/faq",
      permanent: true,
    })),
    ...["/reference/:path*", "/:lang/reference/:path*"].map((path) => ({
      source: path,
      destination: "/docs/v3/reference/:path*",
      permanent: true,
    })),
  ],
};

export default withMDX(config);
