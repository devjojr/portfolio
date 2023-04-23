/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      screens: {
        xs: { max: "575.98px" },
        sm: { min: "576px", max: "767.98px" },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
