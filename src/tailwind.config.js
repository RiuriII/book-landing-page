/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      'sand': '#F7F7F7',
      'white': '#FFFFFF',
      'black': '#353535'
    },

    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        blue: {
          400: '#3498DB'
        }
      },
      keyframes: {
      
      pulse: {
          '0%': {
              transform: 'scale(0.9)',
              boxShadow: '0 0 0 0 rgba(52, 152, 219, 1)'
          },
          '70%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 30px rgba(52, 152, 219, 0)'
          },
          '100%': {
              transform: 'scale(0.9)'
          }
      },
      cartAnimation: {
        '0%' : { top: '-2px'},
        '70%' : {transform: 'rotate(-45deg)', top: '-4px'},
        '100%' : {transform: 'rotate(0deg)', top: '0'}
      }
      },
      animation: {
        pulse: 'pulse 2s infinite',
        cartAnimation: 'cartAnimation linear .4s '
      }
    },
  },
  plugins: [],
}
