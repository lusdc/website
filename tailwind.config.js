/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': 'rgb(23,23,23)',
        'custom-light-orange': 'rgb(239, 142, 52)',
        'custom-dark-orange': 'rgb(236, 92, 41)',
      }
    },
  },
  plugins: [],
}

