/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#1F1F1F",
        "blue-green": "#11BBBB",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
