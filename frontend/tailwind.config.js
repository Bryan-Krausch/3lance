/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        markPro: ['markPro', 'sans-serif'],
        ddin: ['ddin', 'sans-serif'],
        circular: ['circular', 'sans-serif'],
      },
      colors: {
        "header-bg": "#2a2b38",
        "background-color": "#10101a",
        "primary-color": "#c08af1",
        "text-color": "#8b8b8b"
      }
    },
  },
  plugins: [],
}
