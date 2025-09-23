// src/app/about/history/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  // 원본 파일 경로만 바꿔주면 됩니다.
  const TIMELINE_SRC = "/images/history/all-history.jpg"; // ← 여기에 한 장짜리 이미지
  const ALT = "극단 하땅세 전체 연혁";

  return (
    <article className="space-y-6">
      <header className="flex items-end justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">전체 연혁</h1>
        {/* 원본 보기/다운로드 */}
        <Link
          href={TIMELINE_SRC}
          target="_blank"
          className="text-sm text-gray-500 hover:underline"
        >
          원본 열기
        </Link>
      </header>

      {/* 확대해서 보기 좋게 스크롤/줌 컨테이너 */}
      <div className="rounded-lg border bg-white p-2 sm:p-4">
        <div className="max-h-[80vh] overflow-auto">
          {/* 가로/세로 비율은 이미지 실제 크기 대략치로 지정해주면 CLS 줄어듭니다. */}
          <Image
            src={TIMELINE_SRC}
            alt={ALT}
            width={2400}   // 대략 가로 픽셀 (원본에 맞춰 조정 가능)
            height={1100}  // 대략 세로 픽셀
            className="w-full h-auto"
            priority={false}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500">
          스크롤로 이동하거나 브라우저 확대(⌘/Ctrl +)로 자세히 볼 수 있어요.
        </p>
      </div>
    </article>
  );
}
