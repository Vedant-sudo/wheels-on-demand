/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Optional: enable dark mode support
  content: [
    "./public/index.html", // Ensure Tailwind scans the public HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scans all your JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

