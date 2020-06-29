module.exports = {
  purge: ["./**/*.js"],
  theme: {
    boxShadow: {
      orange: ".25rem .25rem .25rem rgba(244, 138, 78, .16)",
      orangeHover: ".25rem .25rem .5rem rgba(255, 170, 121, .5)"
    },
    extend: {
      colors: {
        orange: "#f48a4e",
        orangeHover: "#FF9849",
        blue: {
          "900": "#222F48"
        }
      }
    }
  },
  variants: {},
  plugins: []
}
