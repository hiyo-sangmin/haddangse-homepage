// src/components/HeroOverlayHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroOverlayHeader() {
  const [open, setOpen] = useState(false);

  // 모바일 메뉴 열릴 때 배경 스크롤 잠금
  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = open ? "hidden" : "";
    return () => {
      html.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* 상단 헤더: 항상 흰 배경(라이트/다크 공통), 보더 컬러도 고정 */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:bg-white">
        {/* 공통 래퍼: 높이만 지정, 내부는 포지셔닝으로 배치 */}
        <div className="relative h-16 md:h-20">
          {/* 1) 로고: 모바일은 수직 중앙, 데스크톱은 하단 살짝 맞춤(기존 시각 보정 유지) */}
          <div className="absolute inset-y-0 left-4 md:left-6 flex items-center md:items-end pb-0 md:pb-[6px]">
            <Link href="/" className="flex items-end" aria-label="HADDANGSE Home">
              <img
                src="/logo.png"
                alt="Haddangse Logo"
                className="block w-auto h-[clamp(28px,4.8vw,56px)]"
              />
              <span className="sr-only">HADDANGSE</span>
            </Link>
          </div>

          {/* 2) 데스크톱 메뉴: 화면 '정가운데' 고정(로고 폭과 무관) */}
          <nav
            className="
              pointer-events-none
              hidden md:flex absolute inset-0
              items-center justify-center
            "
          >
            <ul
              className="
                pointer-events-auto
                flex items-center gap-14 lg:gap-16
                text-[22px] lg:text-[26px] font-semibold tracking-tight
                text-gray-900 dark:text-gray-900  /* 다크모드에서도 항상 진한 글자 */
              "
            >
              <li>
                <Link
                  href="/about"
                  className="flex items-center h-full px-2 md:px-4 hover:opacity-80"
                >
                  극단소개
                </Link>
              </li>
              <li>
                <Link
                  href="/shows"
                  className="flex items-center h-full px-2 md:px-4 hover:opacity-80"
                >
                  공연소개
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="flex items-center h-full px-2 md:px-4 hover:opacity-80"
                >
                  일정안내
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center h-full px-2 md:px-4 hover:opacity-80"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* 3) 모바일 햄버거: 오른쪽 상단 (기능 동일) */}
          <div className="absolute inset-y-0 right-2 md:hidden flex items-center">
            <button
              type="button"
              aria-label="메뉴 열기"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ===== 모바일 오버레이 시트 (흰 배경 고정) ===== */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* 반투명 백드롭 */}
        <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />

        {/* 시트 */}
        <div
          className={`
            absolute inset-x-0 top-0
            bg-white text-gray-900 shadow-lg ring-1 ring-black/5
            transition-transform duration-200
            ${open ? "translate-y-0" : "-translate-y-2"}
          `}
        >
          <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
            <span className="text-base font-semibold">메뉴</span>
            <button
              aria-label="메뉴 닫기"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="max-h-[calc(100vh-56px)] overflow-y-auto divide-y">
            <MenuLink href="/about" label="극단소개" onClick={() => setOpen(false)} />
            <MenuLink href="/shows" label="공연소개" onClick={() => setOpen(false)} />
            <MenuLink href="/schedule" label="일정안내" onClick={() => setOpen(false)} />
            <MenuLink href="/contact" label="Contact" onClick={() => setOpen(false)} />
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
  const Cmp: any = external ? "a" : Link;
  const props: any = external ? { href, target: "_blank", rel: "noreferrer" } : { href };
  return (
    <Cmp
      {...props}
      onClick={onClick}
      className="block px-6 py-4 text-lg hover:bg-gray-50 text-gray-900"
    >
      {label}
    </Cmp>
  );
}
