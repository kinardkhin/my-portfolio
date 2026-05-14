/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf5',
          100: '#c6d1e6',
          200: '#9fb2d3',
          300: '#7793bf',
          400: '#577ab0',
          500: '#3762a1',
          600: '#2a5090',
          700: '#1B3A6B',
          800: '#142d54',
          900: '#0d1f3c',
        },
        gold: {
          50:  '#fdf6e3',
          100: '#f9e9b8',
          200: '#f4d988',
          300: '#efc958',
          400: '#e8bb35',
          500: '#B8962E',
          600: '#a07c20',
          700: '#856314',
          800: '#6a4d0b',
          900: '#4f3904',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
