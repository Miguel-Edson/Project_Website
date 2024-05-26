/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Zen Loop"],
        inter:["Inter"],
        waterfall:["Waterfall"],
        infant:["Cormorant Infant"]

      },
      
    },
  },

  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: 'class',
}