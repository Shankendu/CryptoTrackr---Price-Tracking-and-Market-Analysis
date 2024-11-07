/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        up: 'up 25s ease infinite ',
        down: 'down 25s ease infinite ',
        right: 'right 25s ease infinite ',
        left: 'left 25s ease infinite',
    },
    keyframes:{
      up:{
'0%, 100%':{
  'bottom': '415px',
},
'70%':{
  'left': '700px'
}
},
down:{
  '0%, 100%':{
    'bottom': '20%',
  },
  '70%':{
    'left': '50%'
  }
},
right:{
  '0%, 100%':{
    'left': '460px',
  },
  '70%':{
    'left': '336px'
  }
},
left:{
  '0%, 100%':{
    'right': '300px',
  },
  '70%':{
    'up': '253px'
  }
},
    }
    },
  },
  plugins: [],
}

