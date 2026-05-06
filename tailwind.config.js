/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#00f0ff",
        lime: "#a8ff3e",
        dark: "#020408",
        muted: "#4a6080",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
