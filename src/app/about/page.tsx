// src/app/about/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-10">
      {/* 상단 큰 제목 */}
      <h1 className="text-[28px] md:text-[36px] font-extrabold tracking-tight mb-6">
        극단소개
      </h1>

      {/* 본문 그리드: 좌 로고 / 우 텍스트 */}
      <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(260px,420px)_1fr] items-start">
        {/* LEFT: 로고 카드 */}
        <figure className="relative">
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm p-4">
            <Image
              src="/images/about/haddangse-mark.jpg"
              alt="극단 하땅세 로고"
              width={900}
              height={1200}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 380px"
              priority
            />
          </div>
        </figure>

        {/* RIGHT: 원문 그대로 (줄바꿈 유지) */}
        <article className="text-[17px] md:text-[18px] leading-8 text-gray-800">
          <div className="whitespace-pre-wrap">
{`창작과정과 관객에 관심을 두고, 더 자유로운 연극을 지향하는 공동창작 단체 
 - ‘하땅세’는
  ‘하늘부터 땅 끝까지 세게 간다’는 의지와
  ‘하늘을 우러러보고, 땅을 굽어보며, 세상을 살핀다’는 마음으로 공동 창작하는 연극 단체이다. 2008년 창단이래 3가지 지향점을 가지고 창작 활동을 이어가고 있다.
  1) 창작자들이 직접 몸으로 부딪히며 얻는 경험을 중요하게 여기며, 탐구하고 실험하는 과정 자체에 무게를 둔다.
  2) 무엇이든 연극이 될 수 있다고 믿는다. 형식이나 사고에 갇히지 않은 더 자유로운 연극을 지향한다.
  3) 연극을 통해 관객에게 즐거움과 몰입의 경험을 선사한다. 그러기 위해 관객에게 다가가는 표현과 접근법을 진지하게 탐구한다.
  ‘하땅세’는 이를 바탕으로 연극의 한계에서 벗어나 관객이 새로운 형태의 서사를 경험할 수 있게 하고, 관객의 삶에 깊은 영감을 주고자 노력하고 있다.`}
          </div>
        </article>
      </div>
    </section>
  );
}
