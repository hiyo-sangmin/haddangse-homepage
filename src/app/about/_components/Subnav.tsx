"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Subnav() {
  const pathname = usePathname();

  const items = [
    { href: "/about", label: "극단 소개" },
    { href: "/about/history", label: "극단 연혁" },
    { href: "/about/director", label: "연출 소개" },
    { href: "/about/members", label: "단원 소개" },
    ];

  return (
    <nav aria-label="About sections" className="text-lg">
      <ul className="flex gap-6 border-b border-gray-200">
        {items.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          const base = "pb-2 transition-colors";
          const off = "text-gray-500 hover:text-gray-900 border-b-2 border-transparent";
          const on = "font-semibold text-gray-900 border-b-2 border-gray-900";
          return (
            <li key={href}>
              <Link href={href} className={`${base} ${active ? on : off}`}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
