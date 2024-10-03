/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(./assets/bg-hero.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
