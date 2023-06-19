/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Nunito", "sans-serif"],
      },
      colors: {
        "brand":'#486340',
        "brand-hover": '#7d9e34',
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '28': '7rem',
        '80': '20rem',
        '96': '24rem',
      },
      height: {
        '1/2': '50%',
      },
      scale: {
        '30': '.3',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(101, 31, 255, 0.4)',
      },
    },
    
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};