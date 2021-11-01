const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
// const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
  target: "web",

  mode: "development",

  // devtool: "source-map",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/bundle.js",
  },

  devServer: {
    contentBase: "./public",
    hot: true,
    // host: "0.0.0.0",
    port: 9000,
    // compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
          {
            loader: "postcss-loader",
          },
        ],
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "css-loader" },
      //     { loader: "less-loader" },
      //   ],
      // },
      {
        test: /\.(jpeg|png)$/,
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       name: "image/[name]-[hash:6].[ext]",
        //       limit: 100 * 1024
        //     }
        //   }
        // ]
        type: "asset",
        generator: {
          filename: "image/[name]-[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "font/[name]-[hash:6].[ext]"
        //     }
        //   }
        // ]
        generator: {
          filename: "font/[name]-[hash:6][ext]",
        },
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   presets: [
            //     ["@babel/preset-env"]
            //   ]
            // }
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "XXX",
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "./",
    //       globOptions: {
    //         ignore: [
    //           "**/index.html"
    //         ]
    //       }
    //     }
    //   ]
    // })
    new VueLoaderPlugin()
  ],
}
