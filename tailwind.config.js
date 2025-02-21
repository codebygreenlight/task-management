/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}