export const minus = (a, b) => {
  console.info(a - b);
};
console.info(minus(2, 3)); // 模块里本身有副作用，要在 package.json 里设置 sideEffects 打包后才不会有该代码
