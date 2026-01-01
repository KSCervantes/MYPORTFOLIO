import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // For Netlify compatibility
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
