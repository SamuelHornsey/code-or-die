const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = (env, argv) => {
  const devMode = argv.mode === "development";

  return {
    // entry file - starting point for the app
    entry: "./src/js/index.js",

    // where to dump the output of a production build
    output: {
      path: path.join(__dirname, "app"),
      filename: devMode ? "bundle.js" : "bundle.[hash].js"
    },

    module: {
      rules: [
        {
          test: /\.jsx?/i,
          loader: "babel-loader"
        },

        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      }),

      new MiniCssExtractPlugin({
        filename: devMode ? "main.css" : "main.[hash].css",
        chunkFilename: devMode ? "main.[id].css" : "main.[id].[hash].css"
      }),

      new CopyPlugin([
          { from: 'src/img' }
      ])
    ],

    // enable Source Maps
    devtool: "source-map",

    devServer: {
      // serve up any static files from src/
      contentBase: path.join(__dirname, "src"),

      // enable gzip compression:
      compress: true,

      // enable pushState() routing, as used by preact-router et al:
      historyApiFallback: true
    }
  };
};
