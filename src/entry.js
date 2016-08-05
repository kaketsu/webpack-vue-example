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

//Part7. 一个vue文件就是一个单独的组件，vue组件开发是具有高度的独立性并且易于维护的。组件的划分可大可小，一个页面可以看做多个vue组件构成的。
// vue-loader vue文件组件化， vue-router 用来做路由分发的(http://vuejs.github.io/vue-router/zh-cn/index.html)

//Part8. vue
var Vue = require("vue");
var app = new Vue({
    el:"#Vue1",
    data:{
        message:"Hello Vue.js"
    }
})