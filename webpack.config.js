const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: {
    // 多入口
    main: "./src/index.js",
    // sub: "./src/index.js",
  },
  // development devtool: 'cheap-module-eval-source-map',
  // production devtool: 'cheap-module-source-map',
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          // loader: "file-loader",
          loader: "url-loader", // 比 file-loader 多了 limit 参数
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images",
            limit: 10240, // 10 Kb ,表示当图片小于10 kb 时，则以 base64 形式打包 js 里，大于10 kb，则是以图片形式嵌入
          },
        },
      },
      {
        test: /\.(woff|ttf)/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, // 2 表示往后退 2 格，即表示所有的 scss 都从 postcss-loader 开始处理，而不是直接用 css-loader, 哪怕是在 scss 文件里以 @import 引入的
              // modules: true, //模块化
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanPlugin(["build"]),
    new HtmlPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: "./dist", // 在哪里创建个服务
    open: true,
    port: "3000",
  },
  output: {
    // publicPath: "https://s15.tianyuimg.com/community/",
    path: path.resolve(__dirname, "build"),
    // filename: "dist.js",
    filename: "[name]-[contentHash].js",
  },
};
