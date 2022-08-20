/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      "car-bg1":"#1b202c",
      "car-bg2":"#040509",
      
    },
    extend: {
      colors:{
        "primary":"#94c5d9",
        "secondary":"#747b84"
       
      }
    },
  },
  plugins: [require("daisyui")],
}
