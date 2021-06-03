// 代码分割，和webpack无关
// webpack中实现代码分割，两种方式
// 1. 同步代码： 只需要在webpack.common.js中做optimization的配置即可
// import _ from "lodash";
// console.info(_.join(["a", "d", "c"], "***"));

// import minus from "./b";
// minus(20, 4);
// 2. 异步代码(import): 异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中
// function getComponent() {
//   return import(/*webpackChunkName:"lodash"*/ "lodash").then(
//     ({ default: _ }) => {
//       var element = document.createElement("div");
//       element.innerHTML = _.join(["a", "d", "c"], "***");
//       return element;
//     }
//   );
// }

// getComponent().then((element) => {
//   document.body.appendChild(element);
// });

// 同步的代码跟异步的代码都可以实现代码分割，并且明显同步的代码好写，也好理解，为什么会有异步这回事，并且 webpack 默认的 chunks 是 async（异步）
// 那是由于异步可以实现懒加载，不用刚刚初始化就加载。比如如下，用户点击时才去加载 lodash.js 提升首屏加载速度(懒加载)
// function getComponent() {
//   return import(/*webpackChunkName:"lodash"*/ "lodash").then(
//     ({ default: _ }) => {
//       var element = document.createElement("div");
//       element.innerHTML = _.join(["a", "d", "c"], "***");
//       return element;
//     }
//   );
// }

// 换种写法
async function getComponent() {
  const { default: _ } = await import("lodash");
  var element = document.createElement("div");
  element.innerHTML = _.join(["a", "d", "c"], "***");
  return element;
}

document.addEventListener("click", () => {
  getComponent().then((element) => {
    document.body.appendChild(element);
  });
});
