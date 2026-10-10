/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0b0f19',
        cardBg: 'rgba(17, 24, 39, 0.7)',
        accentViolet: '#8b5cf6',
        accentCyan: '#06b6d4',
      },
    },
  },
  plugins: [],
}
