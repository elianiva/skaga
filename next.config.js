const withReactSvg = require("next-react-svg")
const path = require("path")

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public"),
  webpack(config, options) {
    // set root directory for importing modules to ./
    config.resolve.modules.push(path.resolve("./"))
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    }
    return config
  }
})
