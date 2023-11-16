/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx}',
    './asset/**/*.{html,js,jsx}',
    './Components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        overlayColor: "rgba(0, 0, 0, 0.2)",
        baseColor: "rgba(255,240,236,0.166)",
        hoverColor: "hsla(12, 87%, 70%, 0.926)",

      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      screens: {
        'sm': '320px', // Added custom breakpoint for 320px
        'md': '768px',
        'lg': '1024px',
      },

    },
  },
  plugins: [],
  
};
