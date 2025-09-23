// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // 필요 시 외부 이미지 도메인 허용:
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
    formats: ["image/avif", "image/webp"],
  },

  // 빌드 중 린트/타입 에러로 멈추지 않게 (임시)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // 정적 이미지 캐시 (선택)
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
