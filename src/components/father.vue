<template>
    <section class="container">
        <h1>{{header}}</h1>
        <div class="fcenter">
            <input v-model="newMsg" v-on:keyup.enter="setMsg()">
        </div>
        <button v-on:click="broadcastEvent()">Broadcast Event</button>
        <h3>{{childMsg}}</h3>
        <!-- 动态绑定msg -->
        <son v-bind:son-msg="msg"></son>
        <!-- dispatch event -->
        
    </section>
</template>

<style>
    .container{
        background-color:#ddd;
        margin:100px auto;
        width:1000px;
        height:100%;
    }
    h1{
        text-align:center;
        padding-top:20px;
        color:#42b983;
    }
    .fcenter{
        text-align:center;
    }
</style>
<script>
    import son from './son'
    export default {
        data: function(){
            return {
                header:'Hello World!',
                msg:'',
                newMsg:'',
                childMsg:''
            }
        },
        components: { son },
        
        methods: {
            setMsg:function(){
                this.msg = this.newMsg
                this.newMsg = ''
                console.log(this.msg)
            },
            broadcastEvent: function(){
                this.$broadcast('from-father-msg','this is a msg from father')
            }
        },
        events: {
            'from-child-msg': function(msg){
                console.log('receive from child')
                this.childMsg = msg
            }
        }
    }
</script>