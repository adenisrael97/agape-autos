/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-500': '#22d3ee', // legacy cyan accent
        'gold': {
          400: '#FFD700', // main gold
          500: '#FFC300', // deeper gold
        },
        'black': '#18181b',
        'gray': {
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          200: '#e5e7eb',
        },
        'white': '#fff',
      },
    },
  },
  plugins: [],
};
