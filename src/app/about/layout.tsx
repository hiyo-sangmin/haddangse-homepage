// src/app/about/layout.tsx
import Subnav from "./_components/Subnav";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pb-16">
      {/* 상단 히어로(메인 큰 배경) */}
      <div className="relative">
        <div
          className="h-[180px] md:h-[220px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505380556957-b58dd89ba3ee?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            극단 하땅세
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            하땅세의 소개 · 연혁 · 단원소개 · 연락처
          </p>
        </div>
      </div>

      {/* 본문 래퍼: 2열(사이드바 / 본문) */}
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <div className="grid grid-cols-[200px,1fr] gap-8">
          {/* 왼쪽: 세로 목차 */}
          <Subnav />

          {/* 오른쪽: 본문 */}
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
