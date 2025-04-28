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
    {
      source: "/getting-started/install",
      destination: "/docs/v3/getting-started/install",
      permanent: true,
    },
    {
      source: "/getting-started/first-note",
      destination: "/docs/v3/getting-started/first-note",
      permanent: true,
    },
    {
      source: "/getting-started/media-clip",
      destination: "/docs/v3/getting-started/media-clip",
      permanent: true,
    },
    {
      source: "/getting-started/subtitle",
      destination: "/docs/v3/getting-started/subtitle",
      permanent: true,
    },
    {
      source: "/faq",
      destination: "/docs/v3/faq",
      permanent: true,
    },
    {
      source: "/reference/commands",
      destination: "/docs/v3/reference/commands",
      permanent: true,
    },
  ],
};

export default withMDX(config);
