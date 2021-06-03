const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  entry: {
    // 多入口
    main: "./src/index.js",
    // sub: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   // 业务代码使用 babel 的场景
          //   // presets: [
          //   //   [
          //   //     "@babel/preset-env",
          //   //     {
          //   //       targets: {
          //   //         // 要支持的浏览器
          //   //         chrome: "67",
          //   //       },
          //   //       useBuiltIns: "usage", // 按需引入, 没使用到的 es6 代码不进行 polyfill
          //   //     },
          //   //   ],
          //   // ],
          //   // 类库使用 plugin-transform-runtime
          //   // 作为第三方组件或 UI 组件，作为库打包的时候，不需要使用 polyfill(会污染全局环境),plugin-transform-runtime 会以闭包形式注入, 不存在污染全局环境问题
          // },
        },
      },
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
          "postcss-loader", // 样式兼容
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  // 没配时, webpack 有提供了默认值, 会对异步加载的模块进行代码分割
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 优先级，越大越高
          reuseExistingChunk: true, // 相同模块打包后，不再重新打包，而是直接用现成的
          filename: "vendors11.js", // 对异步加载的模块不起作用，异步加载的名称要通过注释实现 /*webpackChunkName:"lodash"*/
        },
        default: {
          priority: -20,
          reuseExistingChunk: true, // 相同模块打包后，不再重新打包，而是直接用现成的
          filename: "common.js",
        },
      },
    },
  },
  plugins: [
    new CleanPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
    }),
    new HtmlPlugin({
      template: "./src/index.html",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled", // 不启动展示打包报告的http服务器
      generateStatsFile: true, // 是否生成stats.json文件
    }),
  ],
  output: {
    // publicPath: "https://s15.tianyuimg.com/community/",
    path: path.resolve(__dirname, "../dist"),
    // filename: "dist.js",
    filename: "[name]-[hash].js",
  },
};