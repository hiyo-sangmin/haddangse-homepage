// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import HeroOverlayHeader from "@/components/HeroOverlayHeader";

export const metadata: Metadata = {
  title: "HADDANGSE",
  description: "극단 하땅세 공식 홈페이지",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <HeroOverlayHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
