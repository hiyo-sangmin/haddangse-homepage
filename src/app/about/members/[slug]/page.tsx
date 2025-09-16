import { redirect } from "next/navigation";
import { members } from "@/data/members";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function MemberPage({ params }: { params: { slug: string } }) {
  // 1) 윤시중(또는 data에서 href가 지정된 멤버)이면 즉시 리다이렉트
  if (params.slug === "kim-hyuntak") {
    redirect("/about/director");
  }
  // 또는 data 기반으로 일반화:
  const mOverride = members.find(x => x.slug === params.slug && x.href);
  if (mOverride) redirect(mOverride.href!);

  // 2) 일반 멤버 렌더링
  const m = members.find(x => x.slug === params.slug);
  if (!m) return notFound();

  return (
    <article className="space-y-8">
      <Link href="/about/members" className="text-sm text-gray-500 hover:underline">
        ← 단원 소개로 돌아가기
      </Link>

      <header className="grid gap-8 md:grid-cols-[minmax(260px,380px)_1fr] items-start">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
          <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 380px" priority />
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
