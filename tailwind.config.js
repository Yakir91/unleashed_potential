/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7f4',
          100: '#e0ebe4',
          200: '#c2d7cb',
          300: '#97b9a7',
          400: '#6a947f',
          500: '#4a7460',
          600: '#385c4b',
          700: '#2d4a3c',
          800: '#253c32',
          900: '#1f322a',
          950: '#101c17',
        },
        secondary: {
          50: '#f5f6f7',
          100: '#e6e8eb',
          200: '#d0d5da',
          300: '#aeb6bf',
          400: '#858f9c',
          500: '#6a7380',
          600: '#555c68',
          700: '#464c55',
          800: '#3c4149',
          900: '#353940',
          950: '#22252a',
        },
        accent: {
          50: '#f8f5f0',
          100: '#efe6d8',
          200: '#decbb0',
          300: '#c9a97f',
          400: '#b88d5c',
          500: '#a87648',
          600: '#905f3c',
          700: '#744a34',
          800: '#603e30',
          900: '#52352b',
          950: '#2e1b15',
        },
        ink: {
          DEFAULT: '#141916',
          muted: '#5c665f',
          soft: '#8a938c',
        },
        surface: {
          DEFAULT: '#f3f4f2',
          elev: '#ffffff',
          dark: '#171b19',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        stat: ['Nunito', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgba(20, 25, 22, 0.28)',
        lift: '0 24px 60px -24px rgba(20, 25, 22, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
