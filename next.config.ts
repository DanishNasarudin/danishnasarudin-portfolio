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
};

export default nextConfig;
