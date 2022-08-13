module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GoogleFont: ['DynaPuff', 'cursive'],
        GoogleFont2: ['IBM Plex Sans KR', 'sans-serif'],
        GoogleFont3: ['Jua', 'sans-serif'],
      },
      backgroundImage:{
        'festivalImg':"url('./img/festival.jpeg')",
      },
    },
  },
  plugins: [],
};
