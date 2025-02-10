import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '15px' }, // <--- Setting base font
      })
    }),
  ],
}
