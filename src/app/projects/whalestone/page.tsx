export default function WhaleStonePage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      {/* 상단 소개: 좌 이미지 / 우 텍스트 */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 왼쪽 메인 이미지 */}
        <div className="space-y-4">
          <img
            src="/whalestone-main.jpg"      // ← /public 폴더에 넣어주세요
            alt="고래바위에서 기다려 공연 사진"
            className="rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500">© THEATRE HADDANGSE</p>
        </div>

        {/* 오른쪽 텍스트 */}
        <div>
          <h3 className="text-red-600 font-semibold mb-2">가족극 FAMILY THEATER</h3>
          <h1 className="text-3xl font-bold mb-1">고래바위에서 기다려</h1>
          <h2 className="text-lg italic text-gray-700 mb-6">Wait at the Whale Rock</h2>

          <blockquote className="text-red-600 font-semibold mb-6">
            한 아이의 ‘기다림’에서 피어나는 작지만 거대한 세상
          </blockquote>

          <p className="leading-relaxed text-gray-800 mb-4">
            눕극으로 함께 만들어가는 일상과 꿈의 스크린! 배우의 구불구불 풀어내는 곱말짓
            에너지와 관객이 바라보는 스크린 세계가 만나는 순간, 섬세하고 감동적인 상상의
            세계를 만들어냅니다.
          </p>
          <p className="leading-relaxed text-gray-800 mb-4">
            감각적 고래패브릭, 그 속에 사는 형광색 생명들, 블랙라이트로 드러나는
            변화의 몽이 오는데요. 상상을 뛰어넘는 섬세한 장면은 관객에게 오래 남을
            추억을 선사합니다.
          </p>

          {/* 평/리뷰 일부 예시 */}
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-6">
            <li>“상상의 푹신한 장면들이 끊임없이 관람객을 안아주는 선한 극” – 지역언론</li>
            <li>“무엇도 못한 것은 없던 밤” – 관객 리뷰 중</li>
          </ul>
        </div>
      </section>

      {/* 하단 상세 정보 + 포스터 */}
      <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="font-bold mb-4">작품 정보</h3>
          <ul className="space-y-1 text-gray-700">
            <li>▸ 작가 : 정승진</li>
            <li>▸ 연출 : 윤시중</li>
            <li>▸ 출연인원 : 3명</li>
            <li>▸ 공연시간 : 45분 + 체험 10분</li>
            <li>▸ 무대크기 : 7m(W) × 6m(D) × 5m(H)</li>
          </ul>

          <h4 className="font-bold mt-6 mb-2">주요 이력</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2025 광주 공연구상페스티벌 초청</li>
            <li>2024 아시아시어터연맹 연극상(형상연출) 수상</li>
            <li>2023 ○○국제어린이청소년연극제 초청</li>
          </ul>
        </div>

        <div className="space-y-4">
          <img
            src="/whalestone-poster.jpg"    // ← /public 폴더에 넣어주세요
            alt="고래바위에서 기다려 포스터"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* 아래로 돌아가기 버튼(선택) */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <a
          href="/"
          className="inline-block rounded-xl border border-black px-6 py-3 hover:bg-black/5"
        >
          메인으로
        </a>
      </div>
    </main>
  );
}
