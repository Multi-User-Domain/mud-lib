import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import polyfillNode from "rollup-plugin-polyfill-node";

export default {
  input: "src/index.ts",
  plugins: [
    polyfillNode(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["node_modules/**"],
    }),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      module: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    babel({
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        //"@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: /node_modules/,
    }),
    // commonjs({
    //   extensions: [".js", ".jsx", ".ts", ".tsx"],
    //   exclude: /node_modules/,
    // }),
    json(),
  ],
  external: [
    "@inrupt/lit-generated-vocab-common",
    "@inrupt/solid-client",
    "@rdfjs/dataset",
  ],
  output: [
    {
      dir: "dist/cjs",
      entryFileNames: "[name].js",
      format: "cjs",
    },
    {
      dir: "dist/es",
      entryFileNames: "[name].es.js",
      format: "es",
    },
  ],
};
