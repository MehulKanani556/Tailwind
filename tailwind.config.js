/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['./1tailwind.html','./2index.html','./3Flowbite.html'],
  theme: {
    extend: {
      backgroundImage:{
        "img1": "url('../image/1.jpg')",
        'img2': "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('../image/1.jpg')"
      },
      listStyleImage: {
        'checkmark': 'url("../image/download.png")'
      }
    },
    container:{
      screens:{
        sm:"540px",
        md:"720px",
        lg:"960px",
        xl:"1140px",
        "2xl":"1320px",
      }
    }
  },
  plugins: [],
}

