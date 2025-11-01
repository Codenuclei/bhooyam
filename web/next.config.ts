import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow loading images from images.unsplash.com (used by next/image)
    domains: ["images.unsplash.com"],
    // recommended formats for optimization
    formats: ["image/avif", "image/webp"],
    // alternatively, use remotePatterns for more granular control:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //     pathname: "/**",
    //   },
    // ],
    
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint checks in production builds
  },
};

export default nextConfig;
