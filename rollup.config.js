import sucrase from "@rollup/plugin-sucrase";

export default {
  input: "src/index.ts",
  plugins: [
    sucrase({
      exclude: ["node_modules/*"],
      transforms: ["jsx", "typescript"],
    }),
  ],
  external: ["react"],
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.es.js",
      format: "es",
    },
  ],
};
