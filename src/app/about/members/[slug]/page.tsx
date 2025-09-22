// src/app/about/members/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { members } from "@/data/members";

export default async function MemberPage({
  params,
}: {
  // ✅ Next.js 15: params 는 Promise 일 수 있음
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // (선택) 특정 멤버는 다른 페이지로 보내기
  if (slug === "kim-hyuntak") {
    redirect("/about/director");
  }

  // (선택) 데이터에 href가 있으면 강제 이동
  const mOverride = members.find((x) => x.slug === slug && (x as any).href);
  if ((mOverride as any)?.href) redirect((mOverride as any).href as string);

  // 일반 렌더링
  const m = members.find((x) => x.slug === slug);
  if (!m) return notFound();

  // 폴백 이미지 (없어도 동작하도록)
  const THUMB_FALLBACK = "/images/members/placeholder.jpg";
  const CARD_FALLBACK = "/images/members/placeholder-wide.jpg";

  return (
    <article className="space-y-8">
      <Link href="/about/members" className="text-sm text-gray-500 hover:underline">
        ← 단원 소개로 돌아가기
      </Link>

      {/* 타이틀 */}
      <header className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{m.name}</h1>
        {m.role && <p className="text-gray-600">{m.role}</p>}
      </header>

      {/* ✅ profileCard가 있으면 카드 이미지 크게 표시 */}
      { (m as any).profileCard ? (
        <section className="space-y-6">
          <div className="rounded-xl border bg-gray-50 p-3">
            <Image
              src={(m as any).profileCard || CARD_FALLBACK}
              alt={`${m.name} 프로필 카드`}
              width={1600}
              height={900}
              className="w-full h-auto rounded-lg object-contain"
              priority
            />
          </div>
          {/* bio가 있으면 카드 아래에 설명 */}
          {m.bio && (
            <p className="text-gray-800 leading-relaxed">{m.bio}</p>
          )}
        </section>
      ) : (
        // ❗ profileCard가 없으면 기존 레이아웃(썸네일 + 텍스트)
        <section className="grid gap-8 md:grid-cols-[minmax(260px,380px)_1fr] items-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={m.image || THUMB_FALLBACK}
              alt={m.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
              priority
            />
          </div>
          <div className="space-y-3">
            {m.bio && <p className="text-gray-800 leading-relaxed">{m.bio}</p>}
          </div>
        </section>
      )}
    </article>
  );
}

// (있으면 유지) 정적 생성 파라미터 — ✅ 항상 배열 반환!
export async function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}
