/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {

    },
  },
  daisyui: {
    themes: [
      {
        cartheme: {
          primary: "#bde7eb",
          secondary: "#1f2533",
          accent: "#161719",
         
         
         
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
