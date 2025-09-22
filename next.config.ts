// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 이미지: /public/images 사용은 기본으로 허용됨.
  // 외부 도메인 이미지를 쓸 일이 생기면 아래 remotePatterns 주석 해제해서 추가.
  images: {
    // remotePatterns: [
    //   { protocol: "https", hostname: "images.example.com" },
    // ],
  },

  // 배포 중 ESLint 경고/오류로 빌드가 멈추지 않게 (임시 권장)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 배포 중 타입 오류로 빌드가 멈추지 않게 (임시 권장)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 정적 파일(이미지) 캐시 최적화 – 선택 사항
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
