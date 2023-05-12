const {
  merge
} = require("webpack-merge");
const baseConfig = require("./webpack.config");
const MiniCssExtractPluin = require("mini-css-extract-plugin");

const config = {
  mode: "production",
  module: {
    rules: [{
      test: /\.(s[ac]|c)ss$/i,
      use: [{
          loader: MiniCssExtractPluin.loader,
        },
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    }, ],
  },
  plugins: [
    new MiniCssExtractPluin({
      filename: "css/[name].css",
    }),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${path.join(__dirname, "../src")}/**/*`, {
    //     nodir: true,
    //   }),
    // }),
  ],
  //   devtool: "none",
};

module.exports = merge(baseConfig, config);