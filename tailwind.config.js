/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        accent: "var(--accent-bg)",
        bg: "var(--bg)",
        cta: "var(--cta)",
      },
    },
  },
  plugins: [],
};
