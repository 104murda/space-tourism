/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
      },
      fontFamily: {
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        bellefair: ['Bellefair', 'sans-serif'],
      },
      backgroundImage: {
        "home-bg": "url('./img/main-bg.jfif')",
        "mob-home-bg": "url('./img/mobile-main-bg.png')",
        "destination-bg": "url('./img/destination-bg.png')",
        "crew-bg": "url('./img/crew-bg.png')",
        "technology-bg": "url('./img/technology-bg.png')"
      }
    },
  },
  plugins: [],
}

