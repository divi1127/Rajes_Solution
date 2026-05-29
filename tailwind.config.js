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
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#1C2541', // Dark navy
          900: '#0B132B', // Deepest slate navy
          950: '#050A18', // Underlay dark navy
        },
        gold: {
          50: '#FDF8EC',
          100: '#FAF0CF',
          200: '#F3DD9C',
          300: '#ECC969',
          400: '#E2B13C',
          500: '#D4AF37', // Brand gold
          600: '#B5902B',
          700: '#927120',
          800: '#6F5318',
          900: '#4B3710',
          950: '#32230A',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
