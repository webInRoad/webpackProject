module.exports = function (source) {
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace('zhangsan', 'lisi');
    callback(null, result);
  });
};
