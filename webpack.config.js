const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production", // Set to 'development' during development
  entry: {
    global: "./js/global.js",
    style: "./css/style.scss",
    // "components/article": "./css/components/_article.scss",
    // "components/restricted": "./css/components/_restricted.scss",
    // "components/hero": "./css/layouts/_hero.scss",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets/dist"),
    clean: true, // Clean the output directory before building
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  resolve: {
    alias: {
      css: path.resolve(__dirname, "css"),
      js: path.resolve(__dirname, "js"),
    },
  },
};
