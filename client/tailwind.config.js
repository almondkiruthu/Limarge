/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
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
        ms: "320px",
        mm: "375px",
        ml: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
