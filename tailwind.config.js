module.exports = {
  purge: ["./**/*.js"],
  theme: {
    extend: {
      colors: {
        orange: "#f48a4e",
        orangeHover: "#FF9849",
        lightOrange: "#FAC2A2",
        darkOrange: "#893C10",
        blue: {
          "900": "#222F48"
        }
      },
      boxShadow: {
        orange: ".25rem .25rem .25rem rgba(244, 138, 78, .16)",
        orangeHover: ".25rem .25rem .5rem rgba(255, 170, 121, .5)"
      }
    }
  },
  variants: {},
  plugins: []
}
