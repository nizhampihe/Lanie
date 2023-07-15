const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Repository Name
const repo = "Lanie";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: repo + "/script.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: repo }],
    }),
  ],
  devServer: {
    port: 8000,
    open: {
      target: ["http://localhost:8000/" + repo],
      app: {
        name: "chrome",
        arguments: ["--incognito"],
      },
    },
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/" + repo + "/404.html" }],
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
