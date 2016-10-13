<template>
    <section class="sub-container">
        <h4>I am son</h4>
        <h4>Father says: {{sonMsg}}</h4>
        <button v-on:click="dispatchEvent()">Dispatch Event</button>
        <h4>{{fatherMsg}}</h4>
    </section>
</template>
<style language='sass'>
    .sub-container{
        width:600px;
        margin:auto;
        margin-top:200px;
        background-color:#fff;
        
    }
    h4{
        text-align:center;
    }
    
</style>
<script>
    export default {
        data: function(){
            return{
                fatherMsg:''
            }
        },
        props:['sonMsg'],
        methods:{
            dispatchEvent: function(){
                console.log('dispatch Event')
                this.$dispatch('from-child-msg','this is from child')
            }
        },
        events: {
            'from-father-msg': function(msg){
                this.fatherMsg = msg
            }
        }
    }
    
</script>