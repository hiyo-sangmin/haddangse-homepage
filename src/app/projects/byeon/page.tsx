export default function ByeonPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      {/* 상단 소개 */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 왼쪽 공연 이미지 */}
        <div className="space-y-4">
          <img
            src="/byeon-main.jpg"    // ← public 폴더에 메인 공연 사진 저장
            alt="그때, 변홍례 공연 사진"
            className="rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-500">© THEATRE HADDANGSE</p>
        </div>

        {/* 오른쪽 텍스트 */}
        <div>
          <h3 className="text-red-600 font-semibold mb-2">연극 THEATER</h3>
          <h1 className="text-3xl font-bold mb-1">그때, 변홍례</h1>
          <h2 className="text-lg italic text-gray-700 mb-6">
            At that time, Byeon Hongrye
          </h2>

          <blockquote className="text-red-600 font-semibold mb-6">
            ‘사과’와 ‘그림 속 사과’ 사이를 걷는 메타연극!
          </blockquote>

          <p className="leading-relaxed text-gray-800 mb-4">
            ‘사과’와 ‘그림 속 사과’ 사이를 걷는 연극 자기 목소리를 내야한 자들의
            기록. 연극은 임제 강평기 실제 일어난 한 사건의 실패와 의미를 추적한다.
            각자 욕망으로 기어 올라가는 자들의 수직 낙하쇼! 연극 속의 영화, 영화 속의 연극,
            그 융합을 넘나드는 &lt;그때, 변홍례&gt;는 새로운 무대 언어를 통해 현대의 자유로움과
            무력함을 목격하게 하고, 관객을 그 과정을 피해자는 주체자로 만든다.
          </p>

          {/* 리뷰/평론 일부 */}
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-6">
            <li>“무성영화의 기법을 무대로 옮겨온 파격적 공연” – 김광석 국제예술평론</li>
            <li>“연극적 상상력을 불러낸 우리의 이야기 공연” – 홍진주 서울예대 공연학과 교수</li>
          </ul>
        </div>
      </section>

      {/* 하단 상세 정보 */}
      <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="font-bold mb-4">작품 정보</h3>
          <ul className="space-y-1 text-gray-700">
            <li>▸ 작가 : 안타비</li>
            <li>▸ 연출 : 윤시중</li>
            <li>▸ 출연인원 : 6명</li>
            <li>▸ 러닝타임 : 60분</li>
            <li>▸ 무대크기 : 10m(W) × 7m(D) × 3m(H)</li>
          </ul>

          <h4 className="font-bold mt-6 mb-2">주요 이력</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2024 중국 Guilin Festival 초청</li>
            <li>2024 하땅세 극장 오픈런 진행</li>
            <li>2024 창작열전 선정작</li>
            <li>2023 예술경영지원센터 쇼케이스</li>
            <li>2023 영국 에든버러 Fringe Festival 참가</li>
            <li>2020 프랑스 피가로 극장 초청</li>
            <li>2019 리투아니아 International Theatre Festival 초청</li>
            <li>2018 스페인 산탄데르 극장 초청</li>
            <li>2018 SPF 최우수상 수상</li>
            <li>2018 서울연극제 초청</li>
          </ul>
        </div>

        <div className="space-y-4">
          <img
            src="/byeon-poster.jpg"   // ← public 폴더에 포스터 이미지 저장
            alt="그때, 변홍례 포스터"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* 메인으로 돌아가기 버튼 */}
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
