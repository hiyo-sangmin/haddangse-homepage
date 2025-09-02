import Image from "next/image";
import Link from "next/link";

export default function TimePainterPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* 홈과 동일한 여백/폭 */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* 상단 브레드크럼 & 카테고리 */}
        <div className="mb-6 flex items-center gap-3 text-xs text-neutral-500">
          <Link href="/" className="hover:underline">HOME</Link>
          <span>›</span>
          <Link href="/?filter=공연" className="hover:underline">연극 THEATER</Link>
        </div>

        {/* 제목영역 – 홈 타이포 느낌 유지 */}
        <header className="mb-8">
          <p className="text-[13px] text-neutral-500">오브제극</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
            시간을 칠하는 사람
          </h1>
          <p className="mt-1 text-[13px] text-neutral-600">The Time Painter</p>
        </header>

        {/* 핵심 문구 */}
        <div className="mb-6 rounded-lg bg-neutral-50 px-4 py-3 text-[15px] font-semibold text-neutral-700">
          ‘가족의 기억이 작은집에서 살아난다.’
        </div>

        {/* 2단 그리드 – 좌 이미지+영상 / 우 설명 */}
        <section className="grid gap-8 lg:grid-cols-[1fr,0.95fr]">
          {/* 좌: 큰 이미지 + 유튜브 영상 */}
          <div className="space-y-5">
            {/* 큰 이미지 */}
            <div className="relative w-full overflow-hidden rounded-lg ring-1 ring-black/5">
              <Image
                src="/images/projects/timepainter/hero.jpg"
                alt="시간을 칠하는 사람"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* 유튜브 영상 (반응형) */}
            <div className="overflow-hidden rounded-lg ring-1 ring-black/5">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/NYFuQYhFlKw?rel=0&modestbranding=1&playsinline=1"
                  title="시간을 칠하는 사람 - Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 우: 작품 소개 */}
          <article className="text-[15px] leading-relaxed text-neutral-800">
            <p className="mb-4">
              1980년 민주화 운동을 경험한 전남도청에 관련된 사람들의 이야기로 확장,
              아시아에서 가장 큰 블랙박스 극장에서 작은집(형식 라이트하우스)으로 새롭게 태어났다.
            </p>
            <p className="mb-4">
              1960년대부터 1980년 그리고 2000년을 오가며 시간극을 조합한 개인의 삶을 표현한다.
              아픈 과거 속 기억, 그로 인한 각 인물의 심리적 갈등과 변화를 섬세한 시간과 집이라는 공간 연출을 통해
              관객에게 감동과 여운을 남길 것이다.
            </p>

            {/* 작품 정보 */}
            <div className="mt-6 grid gap-3 text-[14px] text-neutral-700 md:grid-cols-2">
              <ul className="space-y-1">
                <li>▸ 원작 : 김리정</li>
                <li>▸ 작가 : 공동창작</li>
                <li>▸ 연출 : 윤시중</li>
              </ul>
              <ul className="space-y-1">
                <li>▸ 출연 인원 : 7명</li>
                <li>▸ 공연시간 : 70분</li>
                <li>▸ 무대 크기 : 5.6m(W) × 5m(D) × 2.5m(H)</li>
              </ul>
            </div>

            {/* 수상/기록 */}
            <div className="mt-8 space-y-1 text-[14px] text-neutral-700">
              <p>· 2025 일본 비페스티벌 연극제 초청</p>
              <p>· 2024 라이트하우스 초연</p>
            </div>

            {/* 포스터 (우측 하단 느낌) */}
            <div className="mt-8 w-full max-w-[280px]">
              <div className="relative overflow-hidden rounded-md ring-1 ring-black/10">
                <Image
                  src="/images/projects/timepainter/poster.jpg"
                  alt="시간을 칠하는 사람 포스터"
                  width={560}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-2 text-[12px] text-neutral-500">공식 포스터</p>
            </div>
          </article>
        </section>

        {/* 하단 액션 & 돌아가기 */}
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6">
          <div className="text-[13px] text-neutral-600">
            극단 하땅세 THEATRE HADDANGSE
          </div>
          <div className="flex gap-2">
            <Link
              href="/?filter=공연"
              className="rounded-md border px-3 py-2 text-sm hover:bg-black hover:text-white hover:border-black transition"
            >
              목록으로
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-black px-3 py-2 text-sm text-white hover:bg-black/85 transition"
            >
              문의하기
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
