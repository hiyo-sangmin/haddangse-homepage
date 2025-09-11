// src/app/about/_components/Subnav.tsx
export default function Subnav() {
  return (
    <nav className="p-4 bg-gray-100 rounded-xl">
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <a href="/about/director" className="hover:underline">
            🎭 연출 소개
          </a>
        </li>
        <li>
          <a href="/about/history" className="hover:underline">
            📖 극단 연혁
          </a>
        </li>
        <li>
          <a href="/about/members" className="hover:underline">
            👥 단원 소개
          </a>
        </li>
      </ul>
    </nav>
  );
}
