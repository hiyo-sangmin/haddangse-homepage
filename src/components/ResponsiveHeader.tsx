// src/components/ResponsiveHeader.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
        {/* 왼쪽: 로고 */}
        <div className="w-[160px] shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Haddangse Logo" className="h-9 w-auto" />
            <span className="sr-only">HADDANGSE</span>
          </Link>
        </div>

        {/* 가운데: 메뉴 (md 이상에서만 보임) */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-base lg:text-lg font-semibold">
          <li><Link href="/about" className="hover:underline underline-offset-4">극단소개</Link></li>
          <li><Link href="/shows" className="hover:underline underline-offset-4">공연소개</Link></li>
          <li><Link href="/schedule" className="hover:underline underline-offset-4">일정안내</Link></li>
          <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
        </ul>

        {/* 오른쪽: 액션 (md 이상) */}
        <div className="hidden md:flex w-[180px] shrink-0 items-center justify-end gap-2 text-sm">
          <Link href="#" className="rounded border px-2 py-1 hover:bg-gray-50">EN</Link>
          <Link href="#" className="rounded border px-2 py-1 hover:bg-gray-50">KO</Link>
          <Link href="#" className="ml-2 text-xs text-gray-500 hover:text-gray-800">Instagram</Link>
        </div>

        {/* 모바일: 햄버거 버튼 (md 미만) */}
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded hover:bg-gray-100"
        >
          <span className="sr-only">메뉴</span>
          <span className="block h-0.5 w-6 bg-gray-900" />
        </button>
      </nav>

      {/* 모바일 드롭다운 (md 미만) */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-3">
            <ul className="grid gap-2 text-base font-medium">
              <li>
                <Link href="/about" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-50">
                  극단소개
                </Link>
              </li>
              <li>
                <Link href="/shows" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-50">
                  공연소개
                </Link>
              </li>
              <li>
                <Link href="/schedule" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-50">
                  일정안내
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setOpen(false)} className="block rounded px-2 py-2 hover:bg-gray-50">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-3 flex items-center gap-2">
              <Link href="#" className="rounded border px-2 py-1 text-xs hover:bg-gray-50">EN</Link>
              <Link href="#" className="rounded border px-2 py-1 text-xs hover:bg-gray-50">KO</Link>
              <Link href="#" className="ml-2 text-xs text-gray-500 hover:text-gray-800">Instagram</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
