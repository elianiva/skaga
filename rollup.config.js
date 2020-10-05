import { createRollupConfigs } from "./scripts/base.config.js"
import autoPreprocess from "svelte-preprocess"
import postcssImport from "postcss-import"
import postcss from "rollup-plugin-postcss"
import svelteSvg from "rollup-plugin-svelte-svg"

const production = !process.env.ROLLUP_WATCH
process.env.NODE_ENV = production ? "production" : "development"

export const config = {
  staticDir: "static",
  distDir: "dist",
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: rollup => {
    rollup.plugins = [
      ...rollup.plugins,
      postcss({ plugins: [postcssImport()] }),
      svelteSvg(),
    ]
    return rollup
  },
  svelteWrapper: svelte => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: { plugins: [postcssImport()] },
        defaults: { style: "postcss" },
      }),
    ]
  },
  swWrapper: worker => worker,
}

const configs = createRollupConfigs(config)

export default configs

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/
