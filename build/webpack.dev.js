const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  // development devtool: 'cheap-module-eval-source-map',
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // webpack-dev-server 内部自动将 HotModuleReplacementPlugin 加入了
  ],
  // Tree shaking
  //在 development 下加如下配制, 只会给一行注释说明哪些代码没用到,但并不会真的将代码去掉，因为去掉会影响 source map 的定位
  //在 production 下无需加如下配制,但 devtool 不可以有 eval, 要不然也是会有没引入的代码
  optimization: {
    usedExports: true,
  },
  devServer: {
    contentBase: "./dist", // 在哪里创建个服务
    open: true,
    port: "3000",
    hot: true,
    hotOnly: true, // 构建失败时，也不刷新页面，比如页面显示错误,也不刷新
  },
  output: {
    // filename: "dist.js",
    filename: "[name].js",
  },
};

module.exports = merge(commonConfig, devConfig);
