// src/app/shows/page.tsx
import Image from "next/image";
import Link from "next/link";

const shows = [
  { slug: "gulliver",  title: "걸리버 여행기",       image: "/images/shows/gulliver-main.jpg" },
  { slug: "timepainter", title: "시간을 칠하는 사람", image: "/images/shows/timepainter-main.jpg" },
  { slug: "byeon",     title: "그때 변홍례",         image: "/images/shows/byeon-main.jpg" },
  { slug: "waiting",   title: "고래바위에서 기다려",            image: "/images/shows/waiting-main.jpg" }, // ← 여기만 교체
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
                  src={show.image}
                  alt={show.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
