/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#e6f7e6',
          200: '#d1f0d1', // Lighter green for the header background
          300: '#9ed99e',
          400: '#7aca7a',
          500: '#56bb56',
          600: '#45a645',
          700: '#348834',
          800: '#236b23',
          900: '#124d12',
        },
      },
    },
  },
  plugins: [],
};