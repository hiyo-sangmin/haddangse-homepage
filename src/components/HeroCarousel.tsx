// src/components/HeroCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };
type Props = {
  images: Slide[];
  intervalMs?: number;
  /** (유지용) 외부에서 넘겨도 실제 렌더는 항상 cover 로 고정 */
  fit?: "cover" | "contain";
};

export default function HeroCarousel({
  images,
  intervalMs = 6000,
}: Props) {
  const [index, setIndex] = useState(0);

  // 브라우저/노드 모두 안전한 타입
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!images.length) return;

    clearTimer();
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, intervalMs);

    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, intervalMs]);

  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);
  const next = () => setIndex((p) => (p + 1) % images.length);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      // 헤더(약 80px) 제외, 420~820px 사이에서 반응형 높이
      style={{ height: "clamp(420px, calc(100svh - 80px), 820px)" }}
    >
      {/* 슬라이드 */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            draggable={false}
            // ✅ 항상 컨테이너를 꽉 채움(크롭 허용). 세로/가로 다양한 비율도 여백 없이 맞춤.
            className="object-cover object-center select-none"
            sizes="100vw"
          />
        </div>
      ))}

      {/* 좌/우 화살표 */}
      <button
        aria-label="이전"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white p-2 shadow md:left-4"
      >
        ‹
      </button>
      <button
        aria-label="다음"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white p-2 shadow md:right-4"
      >
        ›
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={`dot-${i}`}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
