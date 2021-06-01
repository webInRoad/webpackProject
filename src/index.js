// import "@babel/polyfill"; // 配置了 usage 参数就会自动导入 polyfill, 不用手动引入了
import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return <div>hello</div>;
};

ReactDom.render(<App />, document.getElementById("root"));
