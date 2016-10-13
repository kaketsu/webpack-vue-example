<template>
    <div>
        <p>Name:{{name}}</p>
        <p>Age:{{age}}</p>
    </div>
</template>

<script>
    //es6
    export default {
        //data:function(){}，下面是es6写法
        data () {
            return {
                name:'huaQiuQiu',
                age:'26'
            }
        }
    }
</script>
