export type Member = {
  slug: string;
  name: string;
  role?: string;
  image: string;
  bio?: string;
  href?: string; // ← 추가: 특정 멤버만 다른 경로로 보낼 때 사용
};

export const members: Member[] = [
  {
    slug: "Yoon-Si Joong",
    name: "윤시중",
    role: "연출",
    image: "/images/members/kim-hyuntak.jpg",
    bio: "하땅세 연출가. 몸과 오브제를 결합한 무대를 탐구한다.",
    href: "/about/director", // ← 이 멤버만 연출 소개로
  },
  {
    slug: "Mun Suk Kyunge",
    name: "문숙경",
    role: "배우 / 대표",
    image: "/images/members/Mun.jpg",
  },
  {
    slug: "Oh Ebada",
    name: "오에바다",
    role: "배우",
    image: "/images/members/Oh.jpg",
  },
  {
    slug: "Kim Chae Yeon",
    name: "김채연",
    role: "배우",
    image: "/images/members/Kim Chae Yeon.jpg",
  },  
  {
    slug: "Go Eun Byul",
    name: "오에바다",
    role: "배우",
    image: "/images/members/Go Eun Byul.jpg",
  },
];
