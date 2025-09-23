// src/components/HeroOverlayHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroOverlayHeader() {
  const [open, setOpen] = useState(false);

  // 시트 열릴 때 배경 스크롤 잠금
  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* 상단 헤더 (모바일/데스크탑 공통) */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex h-14 md:h-16 max-w-7xl items-center px-3 md:px-6">
          {/* 왼쪽 로고 */}
          <div className="shrink-0 w-[132px] md:w-[180px]">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Haddangse Logo" className="h-8 w-auto md:h-10" />
              <span className="sr-only">HADDANGSE</span>
            </Link>
          </div>

          {/* 가운데 네비(데스크탑 전용) */}
          <ul
            className="
              hidden md:flex flex-1 items-center justify-center
              gap-8 text-base md:text-lg font-semibold
            "
          >
            <li><Link href="/about" className="hover:underline underline-offset-4">극단소개</Link></li>
            <li><Link href="/shows" className="hover:underline underline-offset-4">공연소개</Link></li>
            <li><Link href="/schedule" className="hover:underline underline-offset-4">일정안내</Link></li>
            <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
          </ul>

          {/* 오른쪽: 모바일 햄버거 / 데스크탑은 오른쪽 비워둠 */}
          <div className="ml-auto md:ml-0 flex items-center">
            {/* Instagram 버튼은 요청대로 제거 */}
            {/* 모바일 햄버거 버튼 */}
            <button
              type="button"
              aria-label="메뉴 열기"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            >
              {/* 햄버거 아이콘 */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ===== 모바일 오버레이 시트 (하얀 배경) ===== */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        {/* 반투명 백드롭 */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        />
        {/* 하얀 시트 */}
        <div
          className={`
            absolute inset-x-0 top-0
            bg-white text-gray-900 shadow-lg ring-1 ring-black/5
            transition-transform duration-200
            ${open ? "translate-y-0" : "-translate-y-2"}
          `}
        >
          {/* 시트 헤더 */}
          <div className="flex items-center justify-between px-4 h-14 border-b">
            <span className="text-base font-semibold">메뉴</span>
            <button
              aria-label="메뉴 닫기"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {/* X 아이콘 */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 메뉴 목록 */}
          <nav className="max-h-[calc(100vh-56px)] overflow-y-auto divide-y">
            <MenuLink href="/about"     label="극단소개" onClick={() => setOpen(false)} />
            <MenuLink href="/shows"     label="공연소개" onClick={() => setOpen(false)} />
            <MenuLink href="/schedule"  label="일정안내" onClick={() => setOpen(false)} />
            <MenuLink href="/contact"   label="Contact"  onClick={() => setOpen(false)} />
            <MenuLink href="https://www.instagram.com/" label="Instagram" external onClick={() => setOpen(false)} />
          </nav>
        </div>
      </div>
    </>
  );
}

function MenuLink({
  href,
  label,
  external,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const Cmp = external ? "a" : Link;
  const props: any = external ? { href, target: "_blank", rel: "noreferrer" } : { href };

  return (
    <Cmp
      {...props}
      onClick={onClick}
      className="block px-6 py-4 text-lg hover:bg-gray-50"
    >
      {label}
    </Cmp>
  );
}
