// src/app/schedule/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function SchedulePage() {
  const MONTH_LABEL = "2025년 9월";
  const IMG_SRC = "/images/schedule/2025-09.jpg";

  return (
    <article className="space-y-6">
      {/* ✅ 가운데 정렬 */}
      <header className="text-center space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">공연 일정 안내</h1>
        <span className="block text-sm text-gray-600">{MONTH_LABEL}</span>
      </header>

      {/* ✅ 폭 유지 + 정사각형 박스 */}
      <div className="rounded-lg border bg-white p-2 sm:p-4 max-w-2xl mx-auto">
        <div className="relative aspect-square overflow-hidden rounded-md bg-gray-50">
          <Image
            src={IMG_SRC}
            alt={`${MONTH_LABEL} 일정 이미지`}
            fill
            className="object-contain"   // 자르지 않고 전체 표시
            sizes="(min-width: 1024px) 640px, 90vw"
            priority
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-sm">
          <p className="text-gray-500">
            이미지를 확대하려면 브라우저 확대(⌘/Ctrl +) 또는 아래 링크를 눌러주세요.
          </p>
          <Link href={IMG_SRC} target="_blank" className="underline text-gray-700 hover:text-gray-900">
            원본 열기
          </Link>
        </div>
      </div>
    </article>
  );
}
