// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        haddangse: {
          deep: "#0A1E3F",      // 진한 네이비 블루
          point: "#153E75",     // 포인트 블루
          highlight: "#2E5A9E", // 조금 밝은 블루
          light: "#E6ECF5",     // 아주 연한 블루
        },
      },
    },
  },
  plugins: [],
};
