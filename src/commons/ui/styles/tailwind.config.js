/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ec7f13',
        'background-light': '#f8f7f6',
        'background-dark': '#221910',
        'coffee-cream': '#f3ede7',
        'coffee-bean': '#3d2b1f',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans'],
      },
      borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
    },
  },
};
