/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rollUnfold: {
          '0%': {
            transform: 'rotateY(-90deg) scaleY(0)',
            opacity: '0',
            transformOrigin: 'left center',
          },
          '100%': {
            transform: 'rotateY(0deg) scaleY(1)',
            opacity: '1',
            transformOrigin: 'left center',
          },
        },
      },
      animation: {
        rollUnfold: 'rollUnfold 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}