// import "./index.css";
// var btn = document.createElement("button");
// btn.innerHTML = "增加";
// document.body.appendChild(btn);
// btn.onclick = function () {
//   var item = document.createElement("div");
//   item.innerHTML = "item";
//   document.body.appendChild(item);
// };
import counter from "./counter";
import number from "./number";

counter();
number();

if (module.hot) {
  module.hot.accept("./number", () => {
    console.info(2323);
    var nu = document.getElementById("number");
    document.body.removeChild(nu);
    number();
  });
}
