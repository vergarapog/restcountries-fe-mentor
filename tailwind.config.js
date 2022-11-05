/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkbg: "hsl(207, 26%, 17%)",
        darktext: "hsl(0, 0%, 100%)",
        darkelement: "hsl(209, 23%, 22%)",
        lightbg: "hsl(0, 0%, 98%)",
        lighttext: "hsl(200, 15%, 8%)",
        lightelement: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
