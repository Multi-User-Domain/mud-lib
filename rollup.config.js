import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      module: true,
      browser: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    babel({
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        //["@babel/preset-react", {"runtime": "automatic"}],
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: /node_modules/,
    }),
    commonjs({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      include: /node_modules/,
    }),
    json(),
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
