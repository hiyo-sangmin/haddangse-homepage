// src/app/shows/page.tsx
import Image from "next/image";
import Link from "next/link";

type Show = {
  slug: string;
  title: string;
  /** 상세 페이지(메인) 이미지 — 기존 그대로 유지 */
  image: string;
  /** 리스트(카드) 전용 이미지 — 네가 새로 넣을 썸네일 */
  listImage?: string;
};

const shows: Show[] = [
  {
    slug: "gulliver",
    title: "걸리버 여행기",
    image: "/images/shows/gulliver-main.jpg",
    // ⬇️ 리스트(카드)용 썸네일 (네가 준비한 파일로 교체)
    listImage: "/images/shows/list/gulliver-card.jpg",
  },
  {
    slug: "timepainter",
    title: "시간을 칠하는 사람",
    image: "/images/shows/timepainter-main.jpg",
    listImage: "/images/shows/list/timepainter-card.jpg",
  },
  {
    slug: "byeon",
    title: "그때 변홍례",
    image: "/images/shows/byeon-main.jpg",
    listImage: "/images/shows/list/byeon-card.jpg",
  },
  {
    slug: "waiting",
    title: "고래바위에서 기다려",
    image: "/images/shows/waiting-main.jpg",
    listImage: "/images/shows/list/waiting-card.jpg",
  },
];

export default function ShowsPage() {
  return (
    <article className="w-full px-0 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 px-8">
        공연 소개
      </h1>

      <ul className="space-y-8">
        {shows.map((show) => (
          <li key={show.slug}>
            <Link href={`/shows/${show.slug}`}>
              <div className="relative w-full h-[400px] overflow-hidden group">
                <Image
                  // ✅ 리스트(카드)에서는 listImage 사용, 없으면 기존 image로 폴백
                  src={show.listImage ?? show.image}
                  alt={show.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-8 right-8 text-right">
                  <p className="text-white text-2xl font-bold">{show.title}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
