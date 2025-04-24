/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-light-grey": "rgba(226, 226, 226, 1)",
        "variable-collection-white": "rgba(255, 255, 255, 1)",
        // ...other colors from your Anima design
      },
      fontFamily: {
        montserrat: ["Montserrat", "Helvetica", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
