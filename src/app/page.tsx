'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type Card = {
  title: string;
  subtitle?: string;
  href: string;
  img: string;
  tag: '공연' | '공간' | '소개';
};

const CARDS: Card[] = [
  // 공간 (이미지 없으면 spaces.png 임시사용)
  { title: '라이트 하우스', subtitle: 'Light House', href: '/spaces/lighthouse', img: '/images/home/spaces.png', tag: '공간' },
  { title: '라이트 스튜디오', subtitle: 'Light Studio', href: '/spaces/lightstudio', img: '/images/home/spaces.png', tag: '공간' },
  { title: '극장 1', subtitle: 'Theater 1', href: '/spaces/theater1', img: '/images/home/spaces.png', tag: '공간' },
  { title: '극장 2', subtitle: 'Theater 2', href: '/spaces/theater2', img: '/images/home/spaces.png', tag: '공간' },

  // 공연 (파일명은 public/images/home 안과 정확히 일치)
  { title: '위대한놀이', href: '/shows/greatplay', img: '/images/home/greatplay.png', tag: '공연' },
  { title: '파리대왕', href: '/shows/lord-of-the-flies', img: '/images/home/lordoftheflies.png', tag: '공연' },
  { title: '동양극장2020 오버코트', href: '/shows/dongyang-2020-overcoat', img: '/images/home/dongyang2020.png', tag: '공연' },
  { title: '오버코트', href: '/shows/overcoat', img: '/images/home/overcoat.png', tag: '공연' },
  { title: '그때, 변홍례', href: '/projects/byeon', img: '/images/home/byeon.png', tag: '공연' },
  { title: '시간을 칠하는 사람', href: '/projects/timepainter', img: '/images/home/timepainter.png', tag: '공연' },
  { title: '만마디를 대신하는 말 한마디 1', href: '/shows/oneword-1', img: '/images/home/oneword1.png', tag: '공연' },
  { title: '만마디를 대신하는 말 한마디 2', href: '/shows/oneword-2', img: '/images/home/oneword2.png', tag: '공연' },
  { title: '고래바위에서 기다려', href: '/projects/whalestone', img: '/images/home/whalestone.png', tag: '공연' },
  { title: '모비딕', href: '/shows/moby-dick', img: '/images/home/mobydick.png', tag: '공연' },
  { title: '걸리버여행기 ZOOM IN OUT', href: '/shows/gulliver-zoom', img: '/images/home/gulliver.png', tag: '공연' },

  // 소개
  { title: '극단 소개', href: '/about/company', img: '/images/home/company.png', tag: '소개' },
  { title: '단원 소개', href: '/about/members', img: '/images/home/members.png', tag: '소개' },
  { title: '공간 소개', href: '/about/spaces', img: '/images/home/spaces.png', tag: '소개' },
];

const FILTERS = ['전체', '공연', '공간', '소개'] as const;
type Filter = (typeof FILTERS)[number];

/** 왼쪽 소개 사이드바 (모바일에선 상단, 데스크탑에선 왼쪽 고정) */
function IntroSidebar() {
  return (
    <aside className="rounded-lg border bg-white p-5 md:sticky md:top-8 md:h-fit md:p-6">
      {/* 로고 */}
      <div className="mx-auto mb-6 w-[180px]">
        <Image
          src="/images/brand/mark.png" // 없으면 /images/home/company.png 등으로 교체
          alt="HADDANGSE"
          width={360}
          height={360}
          className="h-auto w-full rounded-md ring-1 ring-black/10 object-cover"
          priority
        />
      </div>

      {/* 네비게이션 */}
      <nav className="mb-6 space-y-3 text-lg font-semibold">
        <Link href="/" className="block hover:underline">HOME</Link>
        <Link href="/about/company" className="block hover:underline">극단 소개</Link>
        <Link href="/about/members" className="block hover:underline">단원 소개</Link>
        <Link href="/about/spaces" className="block hover:underline">공간 소개</Link>
        <Link href="/contact" className="block hover:underline">CONTACT</Link>
      </nav>

      {/* 연락처 */}
      <div className="mb-6 space-y-1 text-[13px] text-neutral-600">
        <p>Seoul, Korea</p>
        <p>haddangse.com</p>
        <p>info@haddangse.com</p>
      </div>

      {/* 소셜 (간단 텍스트/아이콘 대체) */}
      <div className="flex items-center gap-3 text-sm text-neutral-600">
        <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
        <span>•</span>
        <a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a>
      </div>
    </aside>
  );
}

export default function HomePage() {
  const [filter, setFilter] = useState<Filter>('전체');

  const list = useMemo(() => {
    if (filter === '전체') return CARDS;
    return CARDS.filter((c) => c.tag === filter);
  }, [filter]);

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* 2열 레이아웃: 왼쪽 소개(280px) + 오른쪽 콘텐츠 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px,1fr]">
          {/* 모바일에선 상단, 데스크탑에선 좌측 고정 */}
          <div className="order-1 md:order-none">
            <IntroSidebar />
          </div>

          {/* 오른쪽: 필터 + 카드 그리드 */}
          <section>
            {/* 상단 필터 */}
            <div className="mb-6 flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition ${
                    filter === f ? 'bg-black text-white border-black' : 'hover:bg-black/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* 카드 그리드 (masonry 비슷) */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
              {list.map((card) => (
                <article key={card.title} className="mb-6 break-inside-avoid">
                  <Link href={card.href} className="group block">
                    <div className="relative w-full overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5">
                      <Image
                        src={card.img}
                        alt={card.title}
                        width={800}
                        height={600}
                        className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute left-3 top-3 rounded bg-white/85 px-2 py-1 text-xs font-medium">
                        {card.tag}
                      </div>
                    </div>
                    <h3 className="mt-3 font-semibold leading-tight">{card.title}</h3>
                    {card.subtitle && (
                      <p className="text-[13px] text-neutral-600">{card.subtitle}</p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
