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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "1xl": "1440px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
