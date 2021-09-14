// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cloudy':         "url('/src/assets/Cloudy.png')",
        'sunny':          "url('/src/assets/Sunny.png')",
        'snowy':          "url('/src/assets/Snowy.png')",
        'rainy':          "url('/src/assets/Rainy.png')",
        'thunderstormy':  "url('/src/assets/Thunderstormy.png')",
        'foggy':          "url('/src/assets/Foggy.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}