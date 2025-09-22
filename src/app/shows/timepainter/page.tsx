// src/app/shows/timepainter/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function TimePainterShow() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-12 space-y-14">
      {/* 1) 히어로: 좌 이미지 / 우 텍스트 */}
      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
        {/* 좌측 큰 이미지 */}
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[16/10]">
          <Image
            src="/images/shows/timepainter-main.jpg" // TODO: 메인 스틸 교체
            alt="시간을 칠하는 사람 메인 스틸"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 우측 텍스트 */}
        <div className="space-y-5">
          <div className="text-center space-y-16">
            {/* 제목 */}
            <h2 className="text-4xl font-bold">시간을 칠하는 사람</h2>

            {/* 공연 이력 링크 (조금 작게) */}
            <Link href="#" className="text-2xl font-bold tracking-tight">
              공연 이력
            </Link>

            {/* 공연 이력 내용 */}
            <p className="text-base text-gray-700 leading-7">
              {/* TODO: 실제 이력으로 교체 */}
              2023 문화체육관광부 장관상 수상
              <br />
              2022 전국공연예술창제작유통 협력사업 선정_4개지역 순회
              <br />
              2021 시간을 칠하는 사람_레파토리공연_국립아시아문화전당
              <br />
              2020 시간을 칠하는 사람_5.18민주항쟁운동40주년기념 공연_국립아시아문화전당
              <br />
              2019 시간을 칠하는 사람 시범공연_국립아시아문화전당
            </p>
          </div>
        </div>
      </section>

      {/* 2) 상단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/timepainter-1.jpg",
          "/images/shows/timepainter-2.jpg",
          "/images/shows/timepainter-3.jpg",
        ].map((src, i) => (
          <div
            key={src}
            className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={src} // TODO: 각 썸네일 이미지 교체
              alt={`시간을 칠하는 사람 상단 이미지 ${i + 1}`}
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
          {/* TODO: 실제 수상 내역으로 교체 */}
          2025.08 시간을 칠하는 사람_에든버러 프린지 ‘Best of’ 셀렉션
        </p>
      </section>

      {/* 4) 하단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/timepainter-4.jpg",
          "/images/shows/timepainter-5.jpg",
          "/images/shows/timepainter-6.jpg",
        ].map((src, i) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={src} // TODO: 각 썸네일 이미지 교체
              alt={`시간을 칠하는 사람 추가 이미지 ${i + 4}`}
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
              src="https://vimeo.com/manage/videos/1111903015" // TODO: Vimeo player URL로 교체
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Time Painter Trailer"
            />
          </div>
        </div>
      </section>

    {/* 6) 본문: 작품 소개 */}
        <section className="prose max-w-none mx-auto text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
        작품 소개
      </h2>
      <div className="space-y-5">
    {[
      "시간이라는 벽에 붓질을 하는 사람",
      "옛 전남도청을 배경으로 그 건물과 같은 시간을 살아온 사람들의 이야기이다. 남겨진 건물과 사라진 사람에 대한 이 연극은 건물이 주인공이다.",
      "아시아 최대 규모 '극장1'에서 움직이는 객석에 관객을 태우고 배우들과 함께 칠장이의 기억 속을 여행한다.",
      "광주를 지움으로써 광주의 역사를 민중의 역사로, 광주항쟁을 민중들의 항쟁으로 다시 쓴다.",
    ].map((text, idx) => (
      <p key={idx} className="leading-8 text-[17px]">
        {text}
      </p>
    ))}
  </div>
</section>


{/* 7) 창작진 소개 */}
<section className="space-y-6">
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-pink-600">
    Artistic Team
  </h2>

  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-7">
    <p>
      <span className="font-semibold">연출·무대디자인:</span> 윤시중
    </p>
    <p>
      <span className="font-semibold">원작:</span> 김민정
    </p>
    <p>
      <span className="font-semibold">기획·유통PD:</span> 박서현
    </p>

    <p>
      <span className="font-semibold">드라마투르기:</span> 김옥란
    </p>
    <p>
      <span className="font-semibold">음악:</span> 박소연
    </p>
    <p>
      <span className="font-semibold">오브제디자인:</span> 하수정
    </p>
    <p>
      <span className="font-semibold">무대제작감독:</span> 김소영
    </p>
    <p>
      <span className="font-semibold">조명:</span> 박광선
    </p>
  </div>
</section>

      {/* 8) 관련 기사 */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Press</h2>
        <ul className="list-disc list-inside space-y-2 text-[15px]">
          {/* TODO: 실제 기사 링크로 교체 */}
          <li>
            <Link
              href="https://www.jnilbo.com/news/articleView.html?idxno=90000003433"
              className="underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              5·18 다룬 연극 '시간을 칠하는 사람', 에든버러 우수 프로덕션상 수상
            </Link>
          </li>
          <li>
            <Link
              href="https://www.mhns.co.kr/news/articleView.html?idxno=533428"
              className="underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              5·18 다룬 '시간을 칠하는 사람' 야외공연으로 만난다
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
