"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = { src: string; alt?: string };

function useInterval(cb: () => void, delay: number | null) {
  const saved = useRef(cb);
  useEffect(() => { saved.current = cb; }, [cb]);
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function HeroCarousel({ images }: { images: Slide[] }) {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx(i => (i + 1) % images.length);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);

  // 자동 넘김 (조금 여유롭게)
  useInterval(next, 6000);

  return (
    <div className="relative w-full h-[80vh] md:h-[74vh] min-h-[520px]">
      {/* 슬라이드 이미지 */}
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={idx}
          src={images[idx].src}
          alt={images[idx].alt ?? `slide-${idx + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.25, scale: 1.01 }}
          transition={{ duration: 0.9 }}
        />
      </AnimatePresence>

      {/* 하단 그라데이션 마스크 (텍스트 대비용, 필요 없으면 지워도 됨) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />

      {/* 좌우 버튼 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 backdrop-blur px-3 py-2 shadow hover:bg-white"
        aria-label="Prev"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 backdrop-blur px-3 py-2 shadow hover:bg-white"
        aria-label="Next"
      >
        ›
      </button>

      {/* 하단 도트 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-8 bg-white" : "w-4 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
