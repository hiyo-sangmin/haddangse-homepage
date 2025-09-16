// src/app/about/layout.tsx
import Subnav from "./_components/Subnav";

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <section className="pb-16">
      {/* 상단 타이틀 영역: 최대한 담백하게 */}
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <h1 className="text-3xl font-bold tracking-tight">극단 하땅세</h1>
      </div>

      {/* 2열 레이아웃: 좌측 메뉴 / 우측 본문 */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-[200px,1fr] gap-10">
          <Subnav />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
