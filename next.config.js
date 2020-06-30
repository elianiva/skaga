const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const reactSvgLoader = require("next-react-svg")
const path = require("path")

const nextConfig = {
  webpack(config, options) {
    // set root directory for importing modules to ./
    config.resolve.modules.push(path.resolve("./"))
    config.resolve.alias.images = path.join(__dirname, "images")

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    }
    return config
  }
}

module.exports = withPlugins(
  [
    [reactSvgLoader, { include: path.resolve(__dirname, "public") }],
    [optimizedImages, { handleImages: ["jpeg", "png", "webp"] }]
  ],
  nextConfig
)
