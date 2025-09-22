// src/app/shows/gulliver/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function GulliverShow() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-12 space-y-14">
      {/* 1) 히어로: 좌 이미지 / 우 텍스트 */}
      <section className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
        {/* 좌측 큰 이미지 */}
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[16/10]">
          <Image
            src="/images/shows/gulliver-main.jpg"
            alt="걸리버 여행기 메인 스틸"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 우측 텍스트 */}
        <div className="space-y-5">
          <div className="text-center space-y-16">
            {/* 제목 */}
            <h2 className="text-4xl font-bold">걸리버 여행기 줌 인 아웃</h2>

            {/* 공연 이력 링크 (조금 작게) */}
            <Link href="#" className="text-2xl font-bold tracking-tight">
              공연 이력
            </Link>

            {/* 공연 이력 내용 */}
            <p className="text-base text-gray-700 leading-7">
              2026.01 걸리버 여행기 ZOOM IN &amp; OUT_아시테지 공식초청 (예정)
              <br />
              2025.11 걸리버 여행기 ZOOM IN &amp; OUT_부산영화의전당 공식초청 (예정)
              <br />
              2025.10 걸리버 여행기 ZOOM IN &amp; OUT_하땅세극장2F 자체기획
              <br />
              2025.07 걸리버 여행기 ZOOM IN &amp; OUT_하땅세극장2F 자체기획
              <br />
              2025.05 걸리버 여행기 ZOOM IN &amp; OUT_춘천세계인형극제 공식초청
            </p>
          </div>
        </div>
      </section>

      {/* 2) 상단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/gulliver-1.jpg",
          "/images/shows/gulliver-2.jpg",
          "/images/shows/gulliver-3.jpg",
        ].map((src, i) => (
          <div
            key={src}
            className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={src}
              alt={`걸리버 여행기 상단 이미지 ${i + 1}`}
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
          2025.05 걸리버 여행기 ZOOM IN &amp; OUT_춘천세계인형극제 ‘바우상’
        </p>
      </section>

      {/* 4) 하단 3장 썸네일 */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "/images/shows/gulliver-4.jpg",
          "/images/shows/gulliver-5.jpg",
          "/images/shows/gulliver-6.jpg",
        ].map((src, i) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={src}
              alt={`걸리버 여행기 추가 이미지 ${i + 4}`}
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
              src="https://player.vimeo.com/video/1120395163"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Gulliver Trailer"
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
            "한 아이가 낯선 세계로 들어선다.",
            "그곳은 거인의 나라처럼 거대하고, 낯선 규칙이 지배하는 땅처럼 기묘하다.",
            "거대한 사람들 앞에서 아이의 몸은 핸드폰 속으로 들어갈 만큼 작아지고, 미로처럼 흩어지는 길은 아이의 발걸음을 흔든다.",
            "두려움과 상실, 놀이와 환희가 교차하는 모험 속에서 무대 위 스크린을 가득 채운 거인이 된 아이.",
            "작아졌다가 커졌다가, 사라졌다가 다시 나타나는 그 변주 속에서 관객은 아이의 내면과 세계의 크기를 함께 체험한다.",
            "[걸리버 여행기: Zoom In and Out]은 아이의 성장과 자기결정의 순간을 환상적이면서도 섬세하게 그려낸 가족극이다.",
            "무대와 스크린, 그림자와 영상이 겹쳐지는 여정 속에서 아이와 어른 모두에게 조용히 물음이 건네진다.",
            "“당신의 여행은 지금 어디쯤인가요?”",
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
            <span className="font-semibold">원작:</span> 조너선 스위프트
          </p>
          <p>
            <span className="font-semibold">공동연출:</span> 윤시중, 표지인
          </p>
          <p>
            <span className="font-semibold">공동작가:</span> 정승진, 윤시중
          </p>
          <p>
            <span className="font-semibold">드라마터그:</span> 조태준
          </p>
          <p>
            <span className="font-semibold">음악:</span> 김헌기
          </p>
          <p>
            <span className="font-semibold">의상:</span> 이윤진
          </p>
          <p>
            <span className="font-semibold">무대:</span> 윤시중
          </p>
          <p>
            <span className="font-semibold">공간디자인:</span> 김소영
          </p>
          <p>
            <span className="font-semibold">조명:</span> 박광선
          </p>
          <p>
            <span className="font-semibold">음향:</span> 유성곤
          </p>
          <p>
            <span className="font-semibold">기획:</span> 이주연
          </p>
          <p>
            <span className="font-semibold">조명오퍼:</span> 강명수
          </p>
          <p>
            <span className="font-semibold">티켓:</span> 김의진
          </p>
        </div>
      </section>

      {/* 8) 관련 기사 */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Press</h2>
        <ul className="list-disc list-inside space-y-2 text-[15px]">
          <li>
            <Link
              href="https://www.yna.co.kr/view/AKR20250528133100062?input=1195m"
              className="underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              연합뉴스
            </Link>
          </li>
          <li>
            <Link
              href="https://www.dailysmart.co.kr/news/articleView.html?idxno=111011"
              className="underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              [거침없이 연극 리뷰] '무대가 영상'이라는 이질적 도구를 포용하는
              슬기로운 방식에 관한 연극…극단 하땅세의 ‘걸리버 여행기, 줌 인 아웃’​
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
