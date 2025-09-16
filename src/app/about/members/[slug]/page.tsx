import { redirect } from "next/navigation";
import { members } from "@/data/members";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ✅ 올바른 시그니처: { params } 로 구조분해
export default function MemberPage(
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // 1) 특정 멤버는 리다이렉트
  if (slug === "kim-hyuntak") {
    redirect("/about/director");
  }

  // data에 href가 지정된 멤버면 강제 리다이렉트 (옵션)
  const mOverride = members.find(x => x.slug === slug && x.href);
  if (mOverride?.href) {
    redirect(mOverride.href);
  }

  // 2) 일반 렌더링
  const m = members.find(x => x.slug === slug);
  if (!m) return notFound();

  return (
    <article className="space-y-8">
      <Link href="/about/members" className="text-sm text-gray-500 hover:underline">
        ← 단원 소개로 돌아가기
      </Link>

      <header className="grid gap-8 md:grid-cols-[minmax(260px,380px)_1fr] items-start">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={m.image}
            alt={m.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 380px"
            priority
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{m.name}</h1>
          {m.role && <p className="text-gray-600">{m.role}</p>}
          {m.bio && <p className="text-gray-800 leading-relaxed">{m.bio}</p>}
        </div>
      </header>
    </article>
  );
}
