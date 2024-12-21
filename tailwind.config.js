/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      margin: {
        "16px": "16px",
        "18px": "18px",
      },
      minWidth: {
        "160px": "160px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
