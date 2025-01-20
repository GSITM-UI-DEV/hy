const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    base: "./src/assets/js/base.js",
    vendor: ["jquery"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/", // Absolute Path
    filename: "assets/js/[name].js",
    clean: true,
  },
  devServer: {
    port: 9000,
  },
  performance: {
    hints: "error",
    maxEntrypointSize: 12000000, // 12MB
    maxAssetSize: 12000000, // 12MB
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
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
      {
        test: /\.(png|jpe?g|gif|svg|webp|webmanifest)$/i,
        type: "asset",
        generator: {
          filename: "assets/images/[name][ext]",
        },
        exclude: /\/sprites/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /sprites\/.*\.svg$/,
        loader: "svg-sprite-loader",
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          inlineRequires: "/images/",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),

      // LICENSE.txt - Exclude
      new TerserPlugin({ extractComments: false }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `Project build time : ${new Date().toLocaleTimeString()}`,
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/uid.css",
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              quality: 85,
            },
            webp: {
              lossless: 1,
            },
            avif: {
              cqLevel: 0,
            },
          },
        },
      },
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets", "js"),
          to: path.resolve(__dirname, "public", "assets", "js"),
          info: {
            minimized: true,
          },
          globOptions: {
            // ignore: ["**/file.*", "**/ignored-directory/**"],
            ignore: ["src/assets/js/base.js"],
          },
        },
        {
          from: path.resolve(__dirname, "src", "assets", "images"),
          to: path.resolve(__dirname, "public", "assets", "images"),
        },
        // {
        //   from: path.resolve(__dirname, "src", "assets", "vendors"),
        //   to: path.resolve(__dirname, "public", "assets", "vendors"),
        // },
      ],
    }),
    

    // component
    new HtmlWebpackPlugin({
      inject: false,
      title: "Component > Button | DWP Groupware",
      template: path.join("src", "handlebars", "components", "button.hbs"),
      filename: path.join("pages", "components", "button.html"),
    }),    
  ],
};
