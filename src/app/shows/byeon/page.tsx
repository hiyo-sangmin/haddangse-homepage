// src/app/shows/byeon/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ByeonShow() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-12 space-y-14">
      {/* 1) 히어로: 좌 이미지 / 우 텍스트 */}
      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
        {/* 좌측 큰 이미지 */}
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[16/10]">
          <Image
            src="/images/shows/byeon-main.jpg" // TODO: 메인 스틸 배치
            alt="그때 변홍례 메인 스틸"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 우측 텍스트 */}
        <div className="space-y-5">
          <div className="text-center space-y-16">
            {/* 제목 */}
            <h2 className="text-4xl font-bold">그때 변홍례</h2>

            {/* 공연 이력 링크(선택) */}
            <Link href="#" className="text-2xl font-bold tracking-tight">
              공연 이력
            </Link>

            {/* 공연 이력 내용 */}
            <p className="text-base text-gray-700 leading-7">
              {/* TODO: 실제 이력으로 교체 */}
              2026.03 그때 변홍례_국립극장 초청 (예정)<br />
              2025.11 그때 변홍례_서울 자체기획<br />
              2025.08 그때 변홍례_지역 페스티벌 초청
            </p>
          </div>
        </div>
      </section>

      {/* 2) 상단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/byeon-1.jpg",
          "/images/shows/byeon-2.jpg",
          "/images/shows/byeon-3.jpg",
        ].map((src, i) => (
          <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={src} // TODO: 교체
              alt={`그때 변홍례 상단 이미지 ${i + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </section>

      {/* 3) 중앙 타이틀 + 수상(한 줄만) */}
      <section className="text-center space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">수상내역</h1>
        <p className="text-lg md:text-2xl font-bold text-rose-700">
          {/* TODO: 실제 수상으로 교체 */}
          2025.09 그때 변홍례_○○페스티벌 대상
        </p>
      </section>

      {/* 4) 하단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/byeon-4.jpg",
          "/images/shows/byeon-5.jpg",
          "/images/shows/byeon-6.jpg",
        ].map((src, i) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={src} // TODO: 교체
              alt={`그때 변홍례 추가 이미지 ${i + 4}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        ))}
      </section>

      {/* 5) 영상 임베드 */}
      <section aria-label="소개 영상">
        <div className="relative w-full overflow-hidden rounded-lg bg-black">
          <div className="aspect-[16/9]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://vimeo.com/manage/videos/930862138" // TODO: Vimeo player URL
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Byeon Hong Rye Trailer"
            />
          </div>
        </div>
      </section>

{/* 6) 본문: 작품 소개 */}
<section className="prose max-w-none mx-auto text-gray-800">
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">작품 소개</h2>
  <div className="space-y-5">
    {[
      "‘사과’와 ‘그림 속 사과’ 사이를 걷는 메타연극!",
      "‘사과’와 ‘그림 속 사과’ 사이를 걷는 연극 자기 목소리를 내어준 자들의 지옥도.",
      "연극은 일제 강점기 실제 일어난 한 사건의 실제와 이면을 추적한다.",
      "각자 욕망으로 기어 올라가는 자들의 수직 낙하쇼! 연극 속의 영화, 영화 속의 연극,",
      "그 층을 넘나드는 <그때, 변홍례>는 새로운 무대 언어를 통해 현대의 지옥도를 목격하게 하고,",
      "관객을 그 과정을 파헤치는 주체자로 만든다.",
    ].map((t, i) => (
      <p key={i} className="leading-8 text-[17px]">
        {t}
      </p>
    ))}
  </div>
</section>

      {/* 7) 창작진 소개 */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-pink-600">Artistic Team</h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-7">
          <p><span className="font-semibold">작:</span> 어단비</p>
          <p><span className="font-semibold">연출:</span> 윤시중</p>
          <p><span className="font-semibold">의상:</span> 이윤진</p>
          <p><span className="font-semibold">기획:</span> 문숙경, 권제인, 김채연, 김예진</p>
          <p><span className="font-semibold">조명/음향오퍼:</span> 박진희</p>
          <p><span className="font-semibold">홍보디자인:</span> 김소영, 최수라, 박혜민</p>
          <p><span className="font-semibold">사진:</span> 양동민</p>
          <p><span className="font-semibold">진행:</span> 황호찬, 백상민, 이지연, 강경천</p>
        </div>
      </section>

      {/* 8) 관련 기사 */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Press</h2>
        <ul className="list-disc list-inside space-y-2 text-[15px]">
          {/* TODO: 실제 기사 링크 */}
          <li>
            <Link href="#" className="underline hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              매체 A – 리뷰
            </Link>
          </li>
          <li>
            <Link href="#" className="underline hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              매체 B – 인터뷰
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
