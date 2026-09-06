import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep the Next.js "N" badge from covering mobile content in previews
  devIndicators: false,
};

export default nextConfig;
