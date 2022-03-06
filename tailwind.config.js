

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut .5s ease-in-out',
        fadeIn: 'fadeIN .5s ease-in-out',

      },

  
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 , marginTop:20},
          '100%': { opacity: 1 },
        },
        fadeIN:{
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }

        }
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


