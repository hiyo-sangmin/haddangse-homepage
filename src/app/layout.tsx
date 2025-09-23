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
          <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
            {/* 왼쪽: 로고(모바일에서 조금 더 작게) */}
            <div className="w-[140px] md:w-[180px] shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="Haddangse Logo" className="h-8 w-auto md:h-10" />
                <span className="sr-only">HADDANGSE</span>
              </Link>
            </div>

            {/* 가운데: 메뉴(모바일에서 폰트/간격 축소 + 가로 스크롤 허용) */}
            <ul className="
              flex flex-1 items-center justify-center
              gap-4 text-sm
              sm:gap-6 sm:text-base
              md:gap-10 md:text-xl
              font-semibold
              overflow-x-auto whitespace-nowrap
            ">
              <li><Link href="/about" className="hover:underline underline-offset-4">극단소개</Link></li>
              <li><Link href="/shows" className="hover:underline underline-offset-4">공연소개</Link></li>
              <li><Link href="/schedule" className="hover:underline underline-offset-4">일정안내</Link></li>
              <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
            </ul>

            {/* 오른쪽: EN/KO/Instagram(모바일에서 살짝 축소) */}
            <div className="w-[140px] md:w-[180px] shrink-0 flex items-center justify-end gap-1.5 md:gap-2 text-xs md:text-sm">
              <Link href="#" className="rounded border px-2 py-1 hover:bg-gray-50">EN</Link>
              <Link href="#" className="rounded border px-2 py-1 hover:bg-gray-50">KO</Link>
              <Link href="#" className="ml-2 text-[11px] md:text-xs text-gray-500 hover:text-gray-800">Instagram</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
