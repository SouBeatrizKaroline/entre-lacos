/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fdfbf7',
          100: '#f7f3eb',
          200: '#ede4d3',
          300: '#decbb2',
          400: '#caab8d',
          500: '#b88e6e',
          600: '#a77656',
          700: '#8a5c43',
          800: '#6f4937',
          900: '#5c3d2e',
        },
        terracotta: {
          light: '#e07a5f',
          DEFAULT: '#c85a32',
          dark: '#a13e1a',
        },
        sage: {
          light: '#a3b18a',
          DEFAULT: '#588157',
          dark: '#3a5a40',
        },
        navy: {
          light: '#3d5a80',
          DEFAULT: '#293241',
          dark: '#1d232e',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
