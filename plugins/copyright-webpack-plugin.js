class CopyRightWebpackPlugin {
  constructor() {
    console.info(2323);
  }

  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    // eslint-disable-next-line no-debugger
    // 同步的 hook ,采用 tap,第二个函数参数只有 compilation 参数
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.info(`${compilation}compilation`);
    });
    // 异步的 hook ,采用 tap,第二个函数参数有 compilation 跟 cb 参数,一定要调用 cb()
    // eslint-disable-next-line no-console
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        // eslint-disable-next-line no-debugger
        debugger;
        // eslint-disable-next-line no-param-reassign
        compilation.assets['copyright.txt'] = {
          source() {
            return 'copyright by webInRoad';
          },
          size() {
            return 11;
          },
        };
        cb();
      }
    );
  }
}
module.exports = CopyRightWebpackPlugin;
