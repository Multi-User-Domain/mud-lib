import typescript from "@rollup/plugin-typescript";
import sucrase from "@rollup/plugin-sucrase";

export default {
  input: "src/index.ts",
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
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
