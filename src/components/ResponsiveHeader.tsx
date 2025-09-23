"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false);

  // 메뉴 열릴 때 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-14 md:h-16 max-w-7xl items-center px-3 md:px-6">
        {/* 왼쪽: 로고 */}
        <div className="shrink-0 w-[132px] md:w-[180px]">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Haddangse Logo" className="h-8 w-auto md:h-10" />
            <span className="sr-only">HADDANGSE</span>
          </Link>
        </div>

        {/* 가운데: 데스크톱 메뉴 (md 이상에서만 보임) */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-base md:text-lg font-semibold">
          <li><Link href="/about" className="hover:underline underline-offset-4">극단소개</Link></li>
          <li><Link href="/shows" className="hover:underline underline-offset-4">공연소개</Link></li>
          <li><Link href="/schedule" className="hover:underline underline-offset-4">일정안내</Link></li>
          <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
        </ul>

        {/* 오른쪽: 햄버거 버튼 (모바일 전용) */}
        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setOpen(true)}
          className="ml-auto inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
        >
          {/* 햄버거 아이콘 */}
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>

      {/* 오버레이 + 사이드 패널 */}
      {/* 반투명 오버레이 */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* 흰색 사이드 패널 (완전 불투명) */}
      <aside
        className={`
          fixed inset-y-0 right-0 z-50 w-[78%] max-w-[360px]
          bg-white shadow-xl border-l
          transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 h-14 border-b">
          <span className="font-semibold">메뉴</span>
          <button
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="px-4 py-4 space-y-2 text-base">
          <Link href="/about"     onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-100">극단소개</Link>
          <Link href="/shows"     onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-100">공연소개</Link>
          <Link href="/schedule"  onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-100">일정안내</Link>
          <Link href="/contact"   onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-100">Contact</Link>

          <div className="pt-3 border-t mt-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="block rounded px-2 py-2 hover:bg-gray-100 text-gray-700"
              onClick={() => setOpen(false)}
            >
              Instagram
            </a>
          </div>
        </nav>
      </aside>
    </header>
  );
}
