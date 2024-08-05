const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prodMode = process.env.NODE_ENV === "production";

const rulesCss = {
  test: /\.s[ac]ss$/i,
  use: [
    prodMode ? MiniCssExtractPlugin.loader : 'style-loader',
    "css-loader",
    "sass-loader"],
};

const rulesTypeScript = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

module.exports = () => {

  return {
    entry: prodMode ? "./src/index.ts" : "./src/main.tsx",
    module: {
      rules: [
        rulesCss,
        rulesTypeScript,
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        template: prodMode ? undefined : "src/index.html",
        filename: prodMode ? 'index.[contenthash].html' : 'index.html'
      }),
      ...(prodMode ? [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })] : [])
    ],
    output: {
      filename: prodMode ? "[name].[contenthash].js" : "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      open: false,
      port: 5173,
      compress: true,
    },
    devtool: "source-map",
  }
};
