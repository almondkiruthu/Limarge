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
      //Screens
      screens: {
        sm: { max: "639px" },
        md: { min: "640px", max: "767px" },
        lg: { min: "768px", max: "1023px" },
        xl: { min: "1024px", max: "1279px" },
        "2xl": { min: "1280px" },
      },
    },
  },
  plugins: [],
};
