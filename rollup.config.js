import typescript from "@rollup/plugin-typescript";
import jsx from "rollup-plugin-jsx";

export default {
  input: "src/index.ts",
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    jsx({ factory: "React.createElement" }),
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
