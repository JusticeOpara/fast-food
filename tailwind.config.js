/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,jsx}" ],
  theme: {
    extend: {
      fontFamily: {
        ClashDisplay:['Clash Display', "sans-serif"],
        Satoshi: ['Satoshi', 'sans-serif'],
        Commissioner: ['Commissioner', 'sans-serif'],
        Roboto: ['Roboto','sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}

