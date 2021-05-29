// ES Moudule 模块引入方式
// CommonJS 模块引入规范
// CMD
// ADM

// webpack 模块打包工具
// js 模块打包工具 ->
// var Header = require('./header.js');
// var Sidebar = require('./sidebar.js');
// var Content = require('./content.js');

import Header from "./header";
import SideBar from "./sidebar";
import Content from "./content";

new Header();
new SideBar();
new Content();
