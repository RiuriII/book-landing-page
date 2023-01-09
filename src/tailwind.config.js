/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      'sand': '#F7F7F7',
      'white': '#FFFFFF'
    },

    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        blue: {
          400: '#3498DB'
        }
      }
    },
  },
  plugins: [],
}
