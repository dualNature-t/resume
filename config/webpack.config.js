const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  ProgressPlugin
} = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [{
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
        use: [{
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
      templateParameters: {
        loading: `<style>
        * {
            margin: 0;
            padding: 0;
        }
        .loadingWrapper {
            height: 100vh;
            display: flex;
            align-items: center;
        }

        .loadingFormCol {
            width: 100%;
        }

        .loadingPageWrapper {
            margin: auto;
            width: 90%;
            text-align: center;
        }

        .loadingPageTitle {
            font: normal normal normal 50px poppins-semibold, poppins, sans-serif;
            letter-spacing: 1rem;
            margin-top: 0.5rem;
            color: #fd6b0b;
            font-size: 42px;
            @media screen and (max-width: 767px) {
                font-size: 19px;
            }
        }

        .loadingAnimation {
            font-family: Helvatica, lato, sans-serif;
            font-size: 14px;
            margin: auto;
            font-weight: bold;
            margin-top: 3rem;
        }

        .cubeGrid {
            width: 40px;
            height: 40px;
            margin: 10px auto;
        }

        .loadingCube {
            width: 33%;
            height: 33%;
            background-color: #fd6b0b;
            float: left;
            -webkit-animation: loadingCubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: loadingCubeGridScaleDelay 1.3s infinite ease-in-out;
        }

        .loadingCube1 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }

        .loadingCube2 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }

        .loadingCube3 {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
        }

        .loadingCube4 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
        }

        .loadingCube5 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }

        .loadingCube6 {
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
        }

        .loadingCube7 {
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
        }

        .loadingCube8 {
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
        }

        .loadingCube9 {
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }

        @-webkit-keyframes loadingCubeGridScaleDelay {
            0%,
            70%,
            100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            }
            35% {
                -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
            }
        }

        @keyframes loadingCubeGridScaleDelay {
            0%,
            70%,
            100% {
                -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
            }
            35% {
                -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
            }
        }
    </style>
    <div class="loadingWrapper">
        <div class="loadingFormCol">
            <div class="loadingPageWrapper">
                <div class="loadingPageTitle">Loading</div>
                <div class="loadingAnimation">
                    <div class="cubeGrid">
                        <div class="loadingCube1 loadingCube"></div>
                        <div class="loadingCube2 loadingCube"></div>
                        <div class="loadingCube3 loadingCube"></div>
                        <div class="loadingCube4 loadingCube"></div>
                        <div class="loadingCube5 loadingCube"></div>
                        <div class="loadingCube6 loadingCube"></div>
                        <div class="loadingCube7 loadingCube"></div>
                        <div class="loadingCube8 loadingCube"></div>
                        <div class="loadingCube9 loadingCube"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
      }
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