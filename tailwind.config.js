/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      colors: {
        'brand-blue': '#054794',
        'brand-cyan': '#00AFF5',
      },
      fontSize: {
        'responsive-xl': ['clamp(1.5rem, 5vw, 3.5rem)', '1.2'],
        'responsive-2xl': ['clamp(2rem, 6vw, 4rem)', '1.1'],
        'responsive-3xl': ['clamp(2.5rem, 7vw, 5rem)', '1'],
      },
      spacing: {
        'safe': 'max(1rem, 2vw)',
      }
    },
  },
  plugins: [],
};
