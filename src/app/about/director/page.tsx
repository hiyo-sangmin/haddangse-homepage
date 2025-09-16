// src/app/about/director/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <article className="space-y-10">
      {/* 상단 타이틀 */}
      <header className="space-y-3">
        <p className="text-black text-4xl font-extrabold tracking-wide"> 윤시중 </p>

        <h1 className="text-2xl md:text-2xl font-bold tracking-tight">
          ‘연극은 평생 잊지 못할 기억을 선물한다.’
        </h1>
      </header>

      {/* 2열: 사진 + 본문 (모바일에선 세로 스택) */}
      <section className="grid md:grid-cols-[minmax(280px,420px)_1fr] gap-10 items-start">
        {/* 사진 */}
        <figure className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          {/* ▶︎ 사진 교체: /public/images/director/main.jpg 에 넣어두면 됩니다 */}
          <Image
           src="/images/director/main.png"
           alt="연출가 윤시중"
           fill
           priority
           className="object-cover"
           sizes="(max-width: 768px) 100vw, 420px"
           />

        </figure>

        {/* 본문 */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            연출과 무대미술의 경계를 허물어 관객에게 새로운 경험을 선사하는 연출가. 하땅세의 연극은
            ‘서사’가 아닌 다양한 ‘언어’로 채워진다. 공연을 만드는 과정은 언어를 만들어가는 과정이자
            하나의 놀이가 된다. 연출 혼자가 아닌, 참가자 모두가 함께 완성해 가는 과정. 배우의 몸이 무대
            중심에서 서로 기꺼이 엮이며, 오브제들이 또 하나의 배우가 된다.
          </p>

          <p>
            그의 작업은 무대와 객석 사이의 장벽을 낮추고, 관객이 체험 속에서 이야기의 의미를 스스로
            발견하도록 안내한다. 종이·바람·소리 같은 오브제가 배우의 신체와 결합해 ‘지금-여기’의 현존을
            만든다. 유머와 리듬, 동시대성은 하땅세의 무대를 관통하는 핵심 어휘다.
          </p>

          {/* 필요하면 짧은 인용 – 가볍게 포인트만 */}
          <blockquote className="border-l-2 pl-4 text-gray-700">
            “무대의 재료들이 관객의 기억과 만나 순간적으로 새로운 서사를 만든다.”
          </blockquote>

          {/* 수상/이력 — 단순 리스트 */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">수상 & 주요 이력</h2>
            <ul className="space-y-1 text-gray-700">
              <li>2022 — 박해성예술 공연상</li>
              <li>2017 — 아시안아츠어워즈(에든버러) 연출상·대상, 작품상 후보</li>
              <li>2014 — 아시안아츠어워즈(에든버러) ‘Brush’ 수상</li>
              <li>2010 — 백상예술대상 연극 연출상</li>
              <li>2008 — 서울연극제 대통령상·우수연출상</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
