import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      // this setting is for default caching similar to next 14
      dynamic: 30,
      static: 300, // 300 seconds
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  headers: async () => [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value:
            "danishnasarudin-portfolio-6mfvlzcw5-danishnasarudins-projects.vercel.app",
        },
      ],
      headers: [{ key: "X-Robots-Tag", value: "noindex" }],
    },
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value:
            "danishnasarudin-portfolio-danishnasarudins-projects.vercel.app",
        },
      ],
      headers: [{ key: "X-Robots-Tag", value: "noindex" }],
    },
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value:
            "danishnasarudin-portfolio-git-main-danishnasarudins-projects.vercel.app",
        },
      ],
      headers: [{ key: "X-Robots-Tag", value: "noindex" }],
    },
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "danishnasarudin.vercel.app",
        },
      ],
      headers: [{ key: "X-Robots-Tag", value: "noindex" }],
    },
  ],
};

export default nextConfig;
