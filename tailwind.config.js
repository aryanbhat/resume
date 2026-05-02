/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        paper:  "#faf7f2",
        ink:    "#1c1916",
        ash:    "#6b6560",
        fog:    "#a09890",
        line:   "#e2ddd4",
        warm:   "#f4f0e8",
        gold:   "#c47d10",
      },
    },
  },
  plugins: [],
};
