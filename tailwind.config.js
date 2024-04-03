/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      vsm: "436px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      lp: "1024px",

      dp: "1280px",
    },
    extend: {},
  },
  plugins: [],
}