// src/app/page.tsx (Server Component)
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  // 히어로 슬라이드 이미지 (public/images/xxx에 넣고 /images/xxx로 참조)
  const slides = [
    { src: "/images/slide1.jpg", alt: "HADDANGSE – Slide 1" },
    { src: "/images/slide2.jpg", alt: "HADDANGSE – Slide 2" },
    { src: "/images/slide3.jpg", alt: "HADDANGSE – Slide 3" },
  ];

  // 현재 진행 중인 공연 카드 (원하는 만큼 추가)
  const nowShows = [
    {
      title: "그때, 변홍례",
      period: "매주 토요일 20시",
      place: "하땅세극장",
      img: "/images/now1.jpg", // public/images/now1.jpg
      href: "/shows/byeonhongrye", // 나중에 상세 페이지 연결
    },
    {
      title: "시간을 칠하는 사람 (in 베세토)",
      period: "9월 20·21",
      place: "베세토",
      img: "/images/now2.jpg",
      href: "/shows/timepainter",
    },
    {
      title: "걸리버여행기 · 워킹홀리데이",
      period: "10월 16–26 (평일 20시, 주말 15시)",
      place: "하땅세극장",
      img: "/images/now3.jpg",
      href: "/shows/gulliver",
    },
  ];

  return (
    <main className="w-full">
      {/* 상단 꽉 찬 히어로 */}
      <HeroCarousel images={slides} />

      {/* NOW SHOW */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">NOW SHOW</h2>
          <a href="/shows" className="text-sm text-gray-500 hover:text-gray-700">
            더 보기 →
          </a>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nowShows.map((n) => (
            <a
              key={n.title}
              href={n.href}
              className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <img
                  src={n.img}
                  alt={n.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{n.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{n.period}</p>
                <p className="text-sm text-gray-500">{n.place}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight">Contact</h2>
          <div className="mt-4 grid gap-4 text-sm text-gray-700 md:grid-cols-2">
            <p>
              <span className="font-medium">주소</span> — 서울시 성북구 성북로 5-7 지하1층 (하땅세극장)
            </p>
            <p>
              <span className="font-medium">전화</span> —{" "}
              <a className="underline underline-offset-2 hover:text-gray-900" href="tel:16002238">
                1600-2238
              </a>
            </p>
            <p>
              <span className="font-medium">이메일</span> —{" "}
              <a
                className="underline underline-offset-2 hover:text-gray-900"
                href="mailto:haddangse@daum.net"
              >
                haddangse@daum.net
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                className="text-sm underline underline-offset-2 hover:text-gray-900"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="text-sm underline underline-offset-2 hover:text-gray-900"
                href="https://blog.naver.com/"
                target="_blank"
                rel="noreferrer"
              >
                Naver Blog
              </a>
              <a
                className="text-sm underline underline-offset-2 hover:text-gray-900"
                href="https://haddangse.com"
                target="_blank"
                rel="noreferrer"
              >
                haddangse.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer 간단 버전 (layout에 이미 푸터가 있다면 생략 가능) */}
      {/* <footer className="border-t border-gray-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-500">
          © {new Date().getFullYear()} HADDANGSE. All rights reserved.
        </div>
      </footer> */}
    </main>
  );
}
