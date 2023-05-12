const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
        generator: {
          filename: "assets/[name][hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              cacheDirectory: true, // 添加缓存
            },
          },
          "ts-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ProgressPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", "..."],
  },
};
