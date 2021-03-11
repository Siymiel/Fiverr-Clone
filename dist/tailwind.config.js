module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: {
          900: '#881337'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
