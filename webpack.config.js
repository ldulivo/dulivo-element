const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rulesCss = () => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      "css-loader",
      "sass-loader"],
  }
};

const rulesTypeScript = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

module.exports = (env, argv) => {
  const { mode } = argv;
  const prodMode = mode === 'production';

  return {
    entry: "./src/main.tsx",
    module: {
      rules: [
        rulesCss(prodMode),
        rulesTypeScript,
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "src/index.html" })
    ],
    output: {
      filename: prodMode ? "[name].[contenthash].js" : "bundle.js",
      path: prodMode ? path.resolve(__dirname, "build") : path.resolve(__dirname, "dist"),
    },
    devServer: {
      open: false,
      port: 5173,
      compress: true,
    },
    devtool: "source-map",
  }
};
