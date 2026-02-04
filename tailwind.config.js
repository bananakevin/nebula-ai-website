/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nebula-blue': '#0066FF',
        'nebula-purple': '#6366F1',
        'nebula-dark': '#0F172A',
      },
    },
  },
  plugins: [],
}
