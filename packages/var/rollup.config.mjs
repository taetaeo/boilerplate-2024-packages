import ts from "rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
  },
  plugins: [ts(), resolve(), commonjs()],
};
