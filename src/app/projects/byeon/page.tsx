/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ByeonPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 제목 */}
        <h1 className="text-4xl font-bold mb-4">그때, 변홍례</h1>
        <h2 className="text-lg text-gray-600 italic mb-8">
          At that time, Byeon Hongrye
        </h2>

        {/* 이미지 */}
        <img
          src="/images/byeon-main.jpg"
          alt="그때 변홍례 공연 이미지"
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* 본문 */}
        <p className="mb-4 text-lg">
          ‘사과’와 ‘그림 속 사과’ 사이를 걷는 메타연극!
        </p>
        <p className="mb-4">
          <strong>그때, 변홍례</strong>는 실제 사건인 1931년 변홍례 사건을
          모티브로, 연극 속 영화, 영화 속 연극 구조를 통해 인간의 욕망과 권력을
          탐구하는 작품입니다.
        </p>
        <p className="mb-4">
          해외 초청 공연과 국내 페스티벌에서 호평을 받은 이 작품은 무성영화
          스타일, 배우들의 연극적 상상력이 어우러진 무대로 관객들에게 독특한
          경험을 선사합니다.
        </p>

        {/* 다시 메인으로 */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <Link
            href="/"
            className="inline-block rounded-xl border border-black px-6 py-3 hover:bg-black/5"
          >
            메인으로
          </Link>
        </div>
      </div>
    </main>
  );
}
