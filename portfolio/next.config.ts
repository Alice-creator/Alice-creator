import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: '/Alice-creator',
  assetPrefix: '/Alice-creator',
  distDir: 'out',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
