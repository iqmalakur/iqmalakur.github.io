/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2C78A4',
      },
      fontFamily: {
        playfair: "'Playfair Display', serif",
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
