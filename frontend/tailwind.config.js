/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Circular std"', 'sans-serif']
      },
      colors: {
        "header-bg": "#2a2b38",
        "background-color": "#10101a"
      }
    },
  },
  plugins: [],
}
