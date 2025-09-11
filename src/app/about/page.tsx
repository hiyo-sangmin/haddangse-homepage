// src/app/about/page.tsx
import Link from "next/link";

export default function AboutHome() {
  return (
    <main style={{ padding: 16, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ marginTop: 0 }}>극단소개</h1>
      <p>아래에서 원하는 항목을 선택하세요.</p>
      <ul>
        <li><Link href="/about/history">연혁</Link></li>
        <li><Link href="/about/intro">극단소개</Link></li>
        <li><Link href="/about/members">단원소개</Link></li>
        <li><Link href="/about/director">연출소개</Link></li>
      </ul>
    </main>
  );
}
