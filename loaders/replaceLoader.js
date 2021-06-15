module.exports = function (source) {
  // return `${source.replace('zhangsan', `lisi and age is ${this.query.age}`)} `;
  const result = source.replace('lisi', `lisi and age is ${this.query.age}`);
  this.callback(null, result);
};
