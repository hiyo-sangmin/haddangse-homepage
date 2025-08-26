export default function TimePainterPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      {/* 상단 소개 */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 왼쪽 이미지 */}
        <div className="space-y-4">
          <img
            src="/timepainter-main.jpg"
            alt="시간을 칠하는 사람 공연 사진"
            className="rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500">© fotobee</p>
        </div>

        {/* 오른쪽 텍스트 */}
        <div>
          <h3 className="text-red-600 font-semibold mb-2">오브제극</h3>
          <h1 className="text-3xl font-bold mb-1">시간을 칠하는 사람</h1>
          <h2 className="text-lg italic text-gray-700 mb-6">
            The Time Painter
          </h2>

          <blockquote className="text-red-600 font-semibold mb-6">
            ‘가족의 기억이 작은 집에서 살아난다.’
          </blockquote>

          <p className="leading-relaxed text-gray-800 mb-4">
            1980년 민주화 운동을 경험한 전남도청에 관련된 사람들의 이야기로 확장.
            아시아에서 가장 큰 블랙박스 극장에서 작은집(성북 리허우스)으로 새롭게 태어났다.
          </p>
          <p className="leading-relaxed text-gray-800 mb-4">
            1960년대부터 1980년 그리고 2000년을 오가며 사건과 그로 인한
            인물의 심리적 갈등과 변화를 섬세한 시간과 집이라는 공간 연출을 통해
            관객에게 감동과 여운을 남길 것이다.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-6">
            <li>2025 일본 베세토 연극제 초청</li>
            <li>2024 타이완 초연</li>
          </ul>
        </div>
      </section>

      {/* 하단 상세 정보 */}
      <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="font-bold mb-4">작품 정보</h3>
          <ul className="space-y-1 text-gray-700">
            <li>▸ 집필 : 김민정</li>
            <li>▸ 작곡 : 동방작곡</li>
            <li>▸ 연출 : 윤시중</li>
            <li>▸ 출연인원 : 7명</li>
            <li>▸ 공연시간 : 70분</li>
            <li>▸ 무대크기 : 5.6m(W) × 5m(D) × 2.5m(H)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <img
            src="/timepainter-poster.jpg"
            alt="시간을 칠하는 사람 포스터"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}
