/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#16130b",
        primary: "#D4AF37",
        "primary-container": "#d4af37",
        secondary: "#0EA5E9",
      },
      fontFamily: {
        sans: ["Inter", "Vazirmatn", "sans-serif"],
      }
    }
  },
  plugins: []
}
