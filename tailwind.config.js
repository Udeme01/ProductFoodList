/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   xs: "375px",
    //   xl: "1440px",
    // },
    colors: {
      red: "hsl(14, 86%, 42%)",
      redHover: "hsl(14, 86%, 30%)",
      green: "hsl(159, 69%, 38%)",

      white: "hsl(0, 100%, 100%)",

      rose50: "hsl(20, 50%, 98%)",
      rose100: "hsl(13, 31%, 94%)",
      rose300: "hsl(14, 25%, 72%)",
      rose400: "hsl(7, 20%, 60%)",
      rose500: "hsl(12, 20%, 44%)",
      rose900: "hsl(14, 65%, 9%)",
    },

    fontFamily: {
      redHat: ["Red Hat Text", "sans-serif"],
    },

    fontWeight: {
      redHat400: "400",
      redHat600: "600",
      redHat700: "700",
    },

    extend: {},
  },
  plugins: [],
};
