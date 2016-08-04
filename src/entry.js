//Part1. used to learn webpack. And this is the first entry
console.log("Hello webpack");
document.querySelector('#app').innerHTML="这是我第一个打包成功的程序";


//Part2. add second.js.  ------>  webpack会分析入口文件，解析包含依赖关系的各个文件 
require("./second.js");

//Part3. add css-loader and style-loader
require("!style!css!./style/style.css");

//Part4. add css-loader and style-loader  根据模块的类型(扩展名)自动绑定需要的loader
//use  webpack js/entry.js dist/bundle.js --module-bind "css=style\!css"
/*
require("./style/style.css");
*/

//Part5. 使用webpack.config.js来进行构建，之后就只需要webpack命令了

//Part6. 加载图片 url-loader 没成功

