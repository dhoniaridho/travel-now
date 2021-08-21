module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Nunito','ui-sans-serif', 'system-ui'],
      'mono': ['Crimson Text', 'serif'],
    },
    extend: {
      shadows: {
        'red': '0 2px 4px 0 rgba(255, 0, 0, 0.10)',
        'green': '0 2px 4px 0 rgba(0, 255, 0, 0.10)',
        'blue': '0 2px 4px 0 rgba(0, 0, 255, 0.10)',
        'custom-hex-color': '0 2px 4px 0 #af9cdd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
