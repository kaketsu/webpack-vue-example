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

//demo3 处理点击事件
new Vue({
    el:"#demo3",
    data:{
        message:"Hello HuaQiuQiu"
    },
    methods:{
        reverseMessage:function(){
            console.log(this);
            this.message = this.message.split("").reverse().join("");
        }
    }
})

//demo4 todoMVC
new Vue({
    el:"#todoMVC",
    data:{
        newTodo:"",
        todos:[
            {msg:"todo No.1"}
        ]
    },
    methods:{
        addTodo:function(){
            this.todos.push({
                msg:this.newTodo
            })
            this.newTodo = "";
        },
        removeTodo:function(index){
            this.todos.splice(index,1);
        }
    }
})


//构建组件通过.vue文件

import app from "./components/app.vue"

Vue.config.debug = true;

new Vue({
    el:"body",
    components:{app}
})