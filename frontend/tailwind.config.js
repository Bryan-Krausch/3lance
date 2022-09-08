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
        "orange-color": "#e6972f",
        "green-color": "#6b9796;",
        "blue-color": "#57a3c7",
        "text-color": "#8b8b8b",
        "bg-table": "#2C2C2C"
      }
    },
  },
  plugins: [],
}
