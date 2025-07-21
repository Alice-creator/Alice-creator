import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: '',
  basePath: '',
  experimental: {
    optimizeCss: false
  }
};

export default nextConfig;
