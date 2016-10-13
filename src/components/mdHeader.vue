<template>
    <div id="wrapper" v-bind:class="{'move-right':moveRight}">
        <div class="md-header">
            <div class="push-button" v-on:click="toggleLeftMenu()">
            </div>
        </div>
        <div class="scroller">
            <slot name="article" >
            </slot>
        </div>
    </div>
</template>
<style lang="less">
.md-header{
    width:10%;
    height:60px;
    border-bottom:1px solid #c6d0da;
    background-color:#eee;
    z-index: 10;

    position:fixed;
    left:0;
    top:0;
}
.push-button{
    position: relative;
    width: 100%;
    height:100%;
    border-right:1px solid #c6d0da;
    cursor: pointer;
    background-color:#fff;
}
.push-button:before{
    margin-left: -15px;
    vertical-align: -2px;
    width: 30px;
    height: 3px;
    background: #5f6f81;
    box-shadow: 0 3px black, 0 -6px #5f6f81, 0 -9px white, 0 -12px #5f6f81;
    content: '';
}
#wrapper{
    height:100%;
    width:100%;
    transition: all 0.3s linear;
    position: relative;
    
    &:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        width:0;
        height:0;
        opacity:0;
        background: rgba(0, 0, 0, 0.3);
        transition: opacity 0.3s linear;
    }
    .scroller{
        height:100%;
        overflow-y:scroll;

        .article{
            height:1500px;
            width:100%;
            background-color:#eee;
        }
    }
    
}

#wrapper.move-right{
    transform:translate(300px, 0px);

    &:after{
        height:100%;
        width:100%;
        opacity:1;
    }
}
    
</style>
<script>
    export default {
        data: function(){
            return{
                moveRight: false
            }
        },
        methods:{
            toggleLeftMenu: function(){
                this.$dispatch('toggle-menu','please expand menu')
                this.moveRight = !this.moveRight
            }
        }
    }
</script>