/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f8fdfb',
          100: '#f0fbf7',
          200: '#ccf1e5',
          300: '#99e7d4',
          400: '#66ddbc',
          500: '#33d3a8',
          600: '#00c994',
          700: '#00a377',
          800: '#007d5a',
          900: '#00573d',
          950: '#003123',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        slideDown: 'slideDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        slideUp: 'slideUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        slideIn: 'slideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        scaleIn: 'scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        float: 'float 6s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}