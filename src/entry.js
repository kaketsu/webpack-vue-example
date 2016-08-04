//Part1. used to learn webpack. And this is the first entry
console.log("Hello webpack");
document.querySelector('#app').innerHTML="这是我第一个打包成功的程序";


//Part2. add second.js.  ------>  webpack会分析入口文件，解析包含依赖关系的各个文件 
require("./second.js");