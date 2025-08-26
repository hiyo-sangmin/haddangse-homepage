/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function WhalestonePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 제목 */}
        <h1 className="text-4xl font-bold mb-4">고래바위에서 기다려</h1>
        <h2 className="text-lg text-gray-600 italic mb-8">
          Wait at the Whale Rock
        </h2>

        {/* 이미지 */}
        <img
          src="/images/whalestone-main.jpg"
          alt="고래바위 공연 이미지"
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* 본문 */}
        <p className="mb-4 text-lg">
          한 아이의 ‘기다림’에서 피어난 작지만 거대한 세상
        </p>
        <p className="mb-4">
          배우들의 몸짓, 종이 오브제, 그림자와 조명을 활용해 따뜻하고도 환상적인
          세계를 만들어가는 작품입니다.
        </p>
        <p className="mb-4">
          가족극으로서 아이와 어른 모두에게 즐거움과 감동을 선사하며, 여러 해외
          페스티벌에서도 초청을 받아 공연되었습니다.
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
