// src/app/shows/waiting/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function WaitingShow() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-12 space-y-14">
      {/* 1) 히어로: 좌 이미지 / 우 텍스트 */}
      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
        {/* 좌측 큰 이미지 */}
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[16/10]">
          <Image
            src="/images/shows/waiting-main.jpg" // TODO: 메인 스틸
            alt="Waiting! 메인 스틸"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 우측 텍스트 */}
        <div className="space-y-5">
          <div className="text-center space-y-16">
            {/* 제목 */}
            <h2 className="text-4xl font-bold">Waiting!</h2>

            {/* 공연 이력 링크(선택) */}
            <Link href="#" className="text-2xl font-bold tracking-tight">
              공연 이력
            </Link>

            {/* 공연 이력 내용 */}
            <p className="text-base text-gray-700 leading-7">
              {/* TODO: 실제 이력으로 교체 */}
              2026.02 Waiting!_○○페스티벌 초청 (예정)
              <br />
              2025.10 Waiting!_하땅세극장2F 자체기획
              <br />
              2025.06 Waiting!_프리뷰 쇼케이스
            </p>
          </div>
        </div>
      </section>

      {/* 2) 상단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/waiting-1.jpg",
          "/images/shows/waiting-2.jpg",
          "/images/shows/waiting-3.jpg",
        ].map((src, i) => (
          <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={src} // TODO: 교체
              alt={`Waiting! 상단 이미지 ${i + 1}`}
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
          {/* TODO: 실제 수상으로 교체 (없으면 섹션 자체 삭제 OK) */}
          2025.09 Waiting!_○○어워즈 Best Show
        </p>
      </section>

      {/* 4) 하단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/waiting-4.jpg",
          "/images/shows/waiting-5.jpg",
          "/images/shows/waiting-6.jpg",
        ].map((src, i) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={src} // TODO: 교체
              alt={`Waiting! 추가 이미지 ${i + 4}`}
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
              src="https://player.vimeo.com/video/000000000" // TODO: Vimeo player URL
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Waiting! Trailer"
            />
          </div>
        </div>
      </section>

      {/* 6) 본문: 작품 소개 */}
      <section className="prose max-w-none mx-auto text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">작품 소개</h2>
        <div className="space-y-5">
          {[
            // TODO: 시놉/소개 문단 교체
            "고래바위 앞, 누군가는 떠나고 누군가는 기다린다.",
            "시간이 느려지는 해변에서 기억과 소문, 바람과 목소리가 겹쳐진다.",
            "움직임과 소리, 영상과 오브제가 파도처럼 밀려오며 기다림의 얼굴을 드러낸다.",
            "“당신은 누구를, 무엇을 기다리고 있나요?”",
          ].map((t, i) => (
            <p key={i} className="leading-8 text-[17px]">{t}</p>
          ))}
        </div>
      </section>

      {/* 7) 창작진 소개 */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-pink-600">Artistic Team</h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-7">
          {/* TODO: 실제 명단으로 교체 */}
          <p><span className="font-semibold">연출:</span> (이름)</p>
          <p><span className="font-semibold">드라마터그:</span> (이름)</p>
          <p><span className="font-semibold">퍼포머:</span> (이름들)</p>
          <p><span className="font-semibold">음악:</span> (이름)</p>
          <p><span className="font-semibold">조명:</span> (이름)</p>
          <p><span className="font-semibold">무대:</span> (이름)</p>
          <p><span className="font-semibold">오브제디자인:</span> (이름)</p>
          <p><span className="font-semibold">프로듀서:</span> (이름)</p>
        </div>
      </section>

      {/* 8) 관련 기사 */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Press</h2>
        <ul className="list-disc list-inside space-y-2 text-[15px]">
          {/* TODO: 실제 기사 링크로 교체(없으면 섹션 삭제 OK) */}
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
