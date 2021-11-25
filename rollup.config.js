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
    commonjs({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      include: "/node_modules/",
      module: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    babel({
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    json(),
  ],
  external: ["n3", "@inrupt/solid-client", "@rdfjs/dataset"],
  output: [
    {
      dir: "dist/es",
      entryFileNames: "[name].es.js",
      format: "es",
    },
  ],
};
