import { defineConfig } from "vite";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  plugins: [
    postcss({
      plugins: [],
      config: "./postcss.config.js",
      extensions: [".css"],
    }),
  ],
});
