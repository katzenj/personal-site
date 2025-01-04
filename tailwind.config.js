import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        eggshell: "#F7F6EB",
        "dark-blue": "#141A28",
        "neptune": "#80BEBE",
        "sinbad": "#A0CFCE"

      },
      margin: {
        "16px": "16px",
        "18px": "18px",
      },
      minWidth: {
        "160px": "160px",
      },
    },
  },
  plugins: [typography],
};
