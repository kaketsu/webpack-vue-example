//使用es6的模块系统import 模块
//使用babel来编译es6

import Vue from "vue";

new Vue({
    el:"#demo1",
    data:{
        message:"Hello Vue"
    }
})

//demo2 渲染列表
new Vue({
    el:"#demo2",
    data:{
        msgs:[
            {text:"I have to learn"},
            {text:"webpack"},
            {text:"and Vue.js"}
        ]
    }
})


//构建组件通过.vue文件

import app from "./components/app.vue";

Vue.config.debug = true;

new Vue(app);