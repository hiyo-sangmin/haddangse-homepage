// src/components/HeroCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function HeroCarousel({
  images,
  autoPlay = true,
  interval = 5000,
}: {
  images: Slide[];
  autoPlay?: boolean;
  interval?: number; // ms
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (delta: number) =>
    setIndex((prev) => (prev + delta + count) % count);
  const goTo = (i: number) => setIndex(i);

  // Auto play
  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => go(1), interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, autoPlay, interval, count]);

  // 기본 스와이프(터치) 지원
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  if (count === 0) return null;
  const current = images[index];

  return (
    <div
      className="relative w-full select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* 슬라이드 높이: 화면 크기에 따라 반응 */}
      <div className="relative w-full h-[42vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh]">
        {/* 단순 페이드 전환 */}
        {images.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* 좌우 화살표 */}
      {count > 1 && (
        <>
          <button
            aria-label="이전"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white p-2 shadow"
          >
            ‹
          </button>
          <button
            aria-label="다음"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white p-2 shadow"
          >
            ›
          </button>
        </>
      )}

      {/* 인디케이터 점 */}
      {count > 1 && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`${i + 1}번째 슬라이드로 이동`}
              onClick={() => goTo(i)}
              className={`pointer-events-auto h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
