// src/app/about/members/page.tsx
import Image from "next/image";
import Link from "next/link";
import { members } from "@/data/members";

export default function Page() {
  return (
    <article className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Creative Team</h1>

      {/* 이미지 그리드 */}
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <li key={m.slug} className="group">
            <Link href={`/about/members/${m.slug}`} className="block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={false}
                />
              </div>
              <div className="mt-3">
                <p className="font-semibold">{m.name}</p>
                {m.role && <p className="text-sm text-gray-600">{m.role}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
