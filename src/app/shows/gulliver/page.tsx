// src/app/shows/gulliver/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function GulliverShow() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-12 space-y-12 text-center">
      {/* 상단: 좌 이미지 / 우 텍스트 */}
      <section className="grid gap-10 md:grid-cols-[1fr,1.05fr] items-start">
        {/* 좌측 큰 이미지 */}
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[16/10]">
          <Image
            src="/images/shows/gulliver-main.jpg" // public에 파일 배치
            alt="걸리버 여행기 메인 스틸"
            fill
            className="object-cover"
            priority
          />

          {/* 오버레이 */}
          <div className="absolute left-4 bottom-4 flex items-center gap-4">
            <div className="rounded bg-black/70 px-3 py-2 text-white text-sm leading-tight text-left">
              <div className="select-none text-lg">★★★★★</div>
              <div className="underline">
                <Link href="#" className="hover:opacity-90">
                  British Theatre Guide
                </Link>
              </div>
              <div className="underline">
                <Link href="#" className="hover:opacity-90">
                  The Scotsman
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center rounded-full bg-cyan-600/90 text-white text-sm font-semibold w-24 h-24">
              FRINGE
            </div>
          </div>
        </div>

        {/* 우측 텍스트 블록 (중앙 정렬 추가) */}
        <div className="space-y-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            걸리버 여행기
          </h1>

          <p className="text-lg leading-relaxed">
            <span className="font-semibold">HADDANGSE</span> 제작 · 신체와 오브제가
            교차하는 무대 언어로 재구성한 &lt;걸리버 여행기&gt;.
          </p>

          <p className="text-[15px] leading-7 text-gray-800">
            7월 31일 – 8월 25일, 매일 12:00 · 13:30{" "}
            <span className="text-gray-500">(11일·18일 제외)</span>
            <br />
            at{" "}
            <Link href="#" className="underline hover:text-gray-900">
              Summerhall (Dissection Room)
            </Link>
          </p>

          <ul className="space-y-2 text-[15px]">
            <li>
              <Link href="#" className="underline hover:text-gray-900">
                The Guardian – 20 theatre shows to see this summer
              </Link>
            </li>
            <li>
              <Link href="#" className="underline hover:text-gray-900">
                Total Theatre review by Dorothy Max Prior
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 하단 3열 갤러리 (이미지 가운데 정렬은 기본 유지됨) */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="/images/shows/gulliver-1.jpg"
            alt="걸리버 공연 스틸 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="/images/shows/gulliver-2.jpg"
            alt="걸리버 공연 스틸 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="/images/shows/gulliver-3.jpg"
            alt="걸리버 공연 스틸 3"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 소개 본문도 중앙 정렬 */}
      <section className="prose max-w-none text-center mx-auto">
        <p>&lt;여기에 내용&gt;</p>
      </section>
    </article>
  );
}
