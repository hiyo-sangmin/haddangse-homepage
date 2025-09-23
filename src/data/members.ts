// src/app/about/members.ts
export type Member = {
  slug: string;
  name: string;
  role?: string;
  image?: string;        // 목록용 썸네일 (/public 기준)
  profileCard?: string;  // 디테일에서 크게 보여줄 프로필 카드 1장
  bio?: string;
};

// 1) 윤시중 고정 + 2) 네가 준 최신 순서
export const members: Member[] = [
  {
    slug: "moon-suk-kyeong",
    name: "문숙경",
    role: "대표/배우",
    image: "/images/members/moon-suk-kyeong.jpg",
    profileCard: "/images/members/moon-suk-kyeong-profile.jpg",
  },
  {
    slug: "oh-ebada",
    name: "오에바다",
    role: "배우",
    image: "/images/members/oh-ebada.jpg",
    profileCard: "/images/members/oh-ebada-profile.jpg",
  },
  {
    slug: "kim-chae-yeon",
    name: "김채연",
    role: "배우",
    image: "/images/members/kim-chae-yeon.jpg",
    profileCard: "/images/members/kim-chae-yeon-profile.jpg",
  },
  {
    slug: "go-eun-byul",
    name: "고은별",
    role: "배우",
    image: "/images/members/go-eun-byul.jpg",
    profileCard: "/images/members/go-eun-byul-profile.jpg",
  },
  {
    slug: "choi-sura",
    name: "최수라",
    role: "배우",
    image: "/images/members/choi-sura.jpg",
    profileCard: "/images/members/choi-sura-profile.jpg",
  },
  {
    slug: "park-kwang-seon",
    name: "박광선",
    role: "배우",
    image: "/images/members/park-kwang-seon.jpg",
    profileCard: "/images/members/park-kwang-seon-profile.jpg",
  },
  {
    slug: "lee-jong-hun",
    name: "이종헌",
    role: "배우",
    image: "/images/members/lee-jong-hun.jpg",
    profileCard: "/images/members/lee-jong-hun-profile.jpg",
  },
  {
    slug: "kim-seung-tae",
    name: "김승태",
    role: "배우",
    image: "/images/members/kim-seung-tae.jpg",
    profileCard: "/images/members/kim-seung-tae-profile.jpg",
  },
  {
    slug: "hwang-ho-chan",
    name: "황호찬",
    role: "배우",
    image: "/images/members/hwang-ho-chan.jpg",
    profileCard: "/images/members/hwang-ho-chan-profile.jpg",
  },
  {
    slug: "kim-ye-jin",
    name: "김예진",
    role: "배우",
    image: "/images/members/kim-ye-jin.jpg",
    profileCard: "/images/members/kim-ye-jin-profile.jpg",
  },
  {
    slug: "yoo-seong-gon",
    name: "유성곤",
    role: "배우",
    image: "/images/members/yoo-seong-gon.jpg",
    profileCard: "/images/members/yoo-seong-gon-profile.jpg",
  },
  {
    slug: "baek-sang-min",
    name: "백상민",
    role: "배우",
    image: "/images/members/baek-sang-min.jpg",
    profileCard: "/images/members/baek-sang-min-profile.jpg",
  },
  {
    slug: "lee-ji-yeon",
    name: "이지연",
    role: "배우",
    image: "/images/members/lee-ji-yeon.jpg",
    profileCard: "/images/members/lee-ji-yeon-profile.jpg",
  },
  {
    slug: "go-chae-han",
    name: "고채한",
    role: "배우",
    image: "/images/members/go-chae-han.jpg",
    profileCard: "/images/members/go-chae-han-profile.jpg",
  },
  {
    slug: "park-hye-min",
    name: "박혜민",
    role: "배우",
    image: "/images/members/park-hye-min.jpg",
    profileCard: "/images/members/park-hye-min-profile.jpg",
  },
  {
    slug: "kim-ye-lyn",
    name: "김예린",
    role: "배우",
    image: "/images/members/kim-ye-lyn.jpg",
    profileCard: "/images/members/kim-ye-lyn-profile.jpg",
  },
  {
    slug: "kang-kyeong-cheon",
    name: "강경천",
    role: "배우",
    image: "/images/members/kang-kyeong-cheon.jpg",
    profileCard: "/images/members/kang-kyeong-cheon-profile.jpg",
  },
];
