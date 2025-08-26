// src/app/page.tsx
export default function HomePage() {
  return (
<main className="min-h-screen bg-gradient-to-br from-[#081226] via-[#0A1E3F] to-[#00050E] text-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 bg-transparent border-b border-white/10">
  <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-white">
    <div className="font-bold tracking-tight">Haddangse</div>
    <nav className="hidden sm:flex gap-4 text-sm">
      <a href="#about" className="hover:underline">소개</a>
      <a href="#works" className="hover:underline">작업</a>
      <a href="#contact" className="hover:underline">문의</a>
    </nav>
  </div>
</header>


      {/* 히어로 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#e2e8f0,transparent_40%),radial-gradient(circle_at_80%_10%,#f1f5f9,transparent_40%)]" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            관객에게 남는 건 <span className="underline decoration-8 decoration-black/80">좋은 경험</span>
          </h1>
          <p className="mt-6 text-lg text-black/70 max-w-prose">
            안녕하세요. 극단 하땅세 홈페이지에 방문하신것을 환영합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="rounded-2xl px-5 py-3 bg-black text-white hover:opacity-90">더 알아보기</a>
            <a href="#contact" className="rounded-2xl px-5 py-3 border hover:bg-black/5">문의하기</a>
          </div>
        </div>
      </section>

<section id="works" className="max-w-6xl mx-auto px-4 pb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-white">작업 하이라이트</h2>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    {/* 1. 시간을 칠하는 사람 */}
    <a href="/projects/timepainter"
       className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm hover:shadow-md transition block">
      <div className="aspect-video rounded-xl bg-white/10 grid place-items-center text-white/70">
        이미지 1
      </div>
      <div className="mt-3 font-semibold text-white">시간을 칠하는 사람</div>
      <p className="text-sm text-white/70 mt-1">오브제극 · 기억과 시간</p>
    </a>

    {/* 2. 그때, 변홍례 */}
    <a href="/projects/byeon"
       className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm hover:shadow-md transition block">
      <div className="aspect-video rounded-xl bg-white/10 grid place-items-center text-white/70">
        이미지 2
      </div>
      <div className="mt-3 font-semibold text-white">그때, 변홍례</div>
      <p className="text-sm text-white/70 mt-1">실화 기반 블랙코미디</p>
    </a>

    {/* 3. 고래바위에서 기다려 */}
    <a href="/projects/whalestone"
       className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm hover:shadow-md transition block">
      <div className="aspect-video rounded-xl bg-white/10 grid place-items-center text-white/70">
        이미지 3
      </div>
      <div className="mt-3 font-semibold text-white">고래바위에서 기다려</div>
      <p className="text-sm text-white/70 mt-1">눕극 · 새로운 연극 경험</p>
    </a>
  </div>
</section>

      {/* 작업 하이라이트 */}
      <section id="works" className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold">작업 하이라이트</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-white grid place-items-center text-black/60">
                이미지 {i}
              </div>
              <div className="mt-3 font-semibold">프로젝트 {i}</div>
              <p className="text-sm text-black/70 mt-1">간단한 설명. 자세한 링크는 추후 추가.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 문의/푸터 */}
      <footer id="contact" className="border-t bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold">문의</h3>
            <p className="mt-2 text-black/70">협업/초청은 아래로 연락 주세요.</p>
            <div className="mt-4 space-y-2 text-sm text-black/80">
              <div>이메일: contact@example.com</div>
              <div>전화: +82 10-1234-5678</div>
              <div>인스타그램: @haddangse</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold">빠른 이동</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">소개</a></li>
              <li><a href="#works" className="hover:underline">작업</a></li>
              <li><a href="#contact" className="hover:underline">문의</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-black/50 py-6">
          © {new Date().getFullYear()} Haddangse. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
