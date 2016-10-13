//使用es6的模块系统import 模块
//使用babel来编译es6
/* eslint-disable */
require('!style!css!./style/main.css');
require('!style!css!./style/normalize.css');
import Vue from 'vue';

/*
new Vue({
    el:'#demo1',
    data:{
        message:'Hello Vue'
    }
})

//demo2 渲染列表
new Vue({
    el:'#demo2',
    data:{
        msgs:[
            {text:'I have to learn'},
            {text:'webpack'},
            {text:'and Vue.js'}
        ]
    }
})

//demo3 处理点击事件
new Vue({
    el:'#demo3',
    data:{
        message:'Hello HuaQiuQiu'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
})

//demo4 todoMVC
var vm = new Vue({
    el:'#todoMVC',
    data:{
        newTodo:'',
        todos:[
            {msg:'todo No.1'}
        ]
    },
    methods:{
        addTodo:function(){
            this.todos.push({
                msg:this.newTodo
            })
            this.newTodo = '';
        },
        removeTodo:function(index){
            this.todos.splice(index,1);
        }
    }
})

vm.$watch('todos',function(newVal,oldVal){
    console.log(oldVal);
});


*/
/*
//通过.vue文件构建组件
import app from './components/app'


Vue.config.debug = false;
Vue.component('app', app)
new Vue({
    el:'body',
    components:{app}
})

*/
/*
import pushMenu from './components/pushMenu'
Vue.component('push-menu', pushMenu)
new Vue({
    el:'body',
    components:{pushMenu}
})


import vheader from './components/header'
Vue.component('pm-header', vheader)
new Vue({
    el:'body',
    components:{vheader}
})

*/


//import father from './components/father'
//import son from './components/son'
import mdHeader from './components/mdHeader'
import leftMenu from './components/leftMenu'

//Vue.component('father',father)
Vue.component('md-header',mdHeader)
Vue.component('left-menu',leftMenu)

new Vue({
    el:'#container',
    data: {
        message:'Hello HuaQiuQiu',
        isOverlap:false
    },
    methods: {
        
    },
    events: {
        'toggle-menu':function(msg){
            //broadcast message to leftmenu
            this.$broadcast('do-menu','please do this menu')
        }
    },
    components: [
        leftMenu,
        mdHeader
    ]
})
