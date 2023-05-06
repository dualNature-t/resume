const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].chunk.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.(tsx|ts)$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
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
    ],
  },

  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
    splitChunks: {
      chunks: "all",
      // minSize: 30,
      // cacheGroups: {
      //   default: {
      //     name: "common",
      //     chunks: "initial",
      //     minChunks: 2,
      //     priority: -20,
      //   },
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: "vendors",
      //     chunks: "initial",
      //     priority: -10,
      //   },
      // },
    },
  },

  plugins: [new webpack.ProgressPlugin()],

  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
  },
};
