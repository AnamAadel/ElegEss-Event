/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CFEFA6",
        dark: "#50493E",
        bisque: "bisque"
      }
    },
  },
  plugins: [require("daisyui")],
}


