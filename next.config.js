const withReactSvg = require("next-react-svg")
const path = require("path")

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public"),
  webpack(config, options) {
    // set root directory for importing modules to ./
    config.resolve.modules.push(path.resolve("./"))
    return config
  }
})
