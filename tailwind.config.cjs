/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Nunito Sans"],
      display: ["Montserrat"],
      body: ["Roboto"],
    },
  },
  plugins: [require("daisyui")],
};
