// src/app/page.tsx
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  // 캐러셀에 쓸 이미지 배열
  const slides = [
    { src: "/images/slide1.jpg", alt: "HADDANGSE – Slide 1" },
    { src: "/images/slide2.jpg", alt: "HADDANGSE – Slide 2" },
    { src: "/images/slide3.jpg", alt: "HADDANGSE – Slide 3" },
  ];

  return (
    <main className="w-full">
      {/* HeroCarousel 에 props 전달 */}
      <HeroCarousel images={slides} />
    </main>
  );
}
