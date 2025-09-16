// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HADDANGSE",
  description: "극단 하땅세 공식 홈페이지",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-8xl items-center justify-between px-8 h-16">
            <Link href="/" className="flex items-center gap-2">
             <img
              src="/logo.png"   // public/logo.png
              alt="Haddangse Logo"
              className="h-10 w-auto"  // 높이 40px, 가로 비율 자동
              />
              <span className="sr-only">HADDANGSE</span> {/* 시각장애인용 텍스트 */}
             </Link>

            <ul className="hidden md:flex gap-30 text-2xl font-semibold">
              <li><Link href="/about">극단소개</Link></li>
              <li><Link href="/shows">공연소개</Link></li>
              <li><Link href="/schedule">일정안내</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="flex items-center gap-2 text-sm">
              <Link href="#" className="rounded border px-2 py-1 hover:bg-gray-50">EN</Link>
              <Link href="#" className="rounded border px-2 py-1 hover:bg-gray-50">KO</Link>
              <Link href="#" className="ml-2 text-xs text-gray-500 hover:text-gray-800">Instagram</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
