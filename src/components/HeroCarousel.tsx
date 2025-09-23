// src/components/HeroCarousel.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);

  return (
    <section className="w-screen overflow-hidden mt-4 md:mt-0"> {/* ← 모바일에서 헤더 아래 살짝 내리기 */}
      <div className="relative mx-auto max-w-[1600px]">
        {/* 슬라이드 영역 */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] md:h-[560px]">
          <Image
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* 좌/우 버튼은 필요 시 유지 */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
            onClick={() => setIndex((p) => (p - 1 + images.length) % images.length)}
            aria-label="이전 이미지"
          >
            ‹
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
            onClick={() => setIndex((p) => (p + 1) % images.length)}
            aria-label="다음 이미지"
          >
            ›
          </button>
          {/* 인디케이터 */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/60"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
