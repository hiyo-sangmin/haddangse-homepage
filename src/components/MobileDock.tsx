"use client";

import Link from "next/link";
import { useState } from "react";
import { Grid3X3 as Apps, Home, Info, Theater, Calendar, Phone, Globe } from "lucide-react";

type AppItem = { label: string; href: string; icon: React.ReactNode };

const APPS: AppItem[] = [
  { label: "극단소개",  href: "/about",     icon: <Info className="h-6 w-6" /> },
  { label: "공연소개",  href: "/shows",     icon: <Theater className="h-6 w-6" /> },
  { label: "일정안내",  href: "/schedule",  icon: <Calendar className="h-6 w-6" /> },
  { label: "Contact",  href: "/contact",   icon: <Phone className="h-6 w-6" /> },
  { label: "Instagram", href: "https://www.instagram.com/", icon: <Globe className="h-6 w-6" /> },
];

export default function MobileDock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 하단 도크: 모바일 전용 */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40">
        <div className="mx-auto max-w-6xl px-4 pb-[env(safe-area-inset-bottom)]">
          <div className="flex items-center justify-between rounded-2xl border bg-white/90 backdrop-blur px-6 py-3 shadow">
            <Link href="/" className="flex flex-col items-center text-xs text-gray-700" aria-label="홈">
              <Home className="h-6 w-6" />
              <span className="mt-1">홈</span>
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="flex flex-col items-center text-xs text-gray-700"
              aria-label="앱 메뉴 열기"
            >
              <Apps className="h-6 w-6" />
              <span className="mt-1">메뉴</span>
            </button>

            <Link href="/schedule" className="flex flex-col items-center text-xs text-gray-700" aria-label="일정안내">
              <Calendar className="h-6 w-6" />
              <span className="mt-1">일정</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 앱 그리드 바텀시트 */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-label="닫기" />
          <div className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white p-6 pb-[calc(env(safe-area-inset-bottom)+1rem)] shadow-2xl">
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-gray-300" />
            <h2 className="mb-4 text-center text-base font-semibold">메뉴</h2>
            <div className="grid grid-cols-3 gap-4">
              {APPS.map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center rounded-lg border p-4 hover:bg-gray-50"
                >
                  <div className="text-gray-800">{a.icon}</div>
                  <span className="mt-2 text-sm text-gray-800">{a.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link href="/shows" onClick={() => setOpen(false)} className="rounded-lg bg-black px-4 py-3 text-center text-sm font-medium text-white">
                공연 보러가기
              </Link>
              <Link href="/about" onClick={() => setOpen(false)} className="rounded-lg border px-4 py-3 text-center text-sm font-medium">
                극단 소개
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
