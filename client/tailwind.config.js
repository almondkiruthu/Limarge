/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["DM Mono", "...defaultTheme.fontFamily.mono"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        customBlue: "#183282",
        customOrange: "#FF9A63",
        customBackground: "#ECEADD",
      },
    },
  },
  plugins: [],
};
