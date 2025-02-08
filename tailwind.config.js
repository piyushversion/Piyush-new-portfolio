/** @type {import('tailwindcss').Config} */
export default {

  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{

        ninefifty:"950px",
        fiveeighty:"580px",
        ninehundred:"900px",
        sevenhundred:"700px",
        fourfifty:"450px",
        fourhundred:"400px"

      },

    fontFamily:{

        nuninto:["Nunito", "serif"],
        rubik:["Rubik", "serif"],
        playwrite:["Playwrite IN", "serif"]
    },
    content:{

       'empty':"''"
    }

    },
  },
  plugins: [],
}