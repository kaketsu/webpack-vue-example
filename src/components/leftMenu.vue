<template>
    <div class="left-menu" transition="moveFromLeft" v-show="showLeftMenu">
        <div class="md-level">
		    <h2 class="icon icon-world">All Categories</h2>
            <ul>
                <li class="icon icon-arrow-left" v-for="item in menuItems"><a href="#"><i class="fa fa-archive"></i>&nbsp;{{item.name}}</a></li>
			    
            </ul>
		<ul>
    </div>
</template>
<style lang="less">
    .left-menu{
        position: fixed;
        top: 0px;
        bottom: 0;
        left: 0px;
        z-index: 10;
        width: 300px;
        border-right:1px solid #c6d0da;
        background-color:#fff;

        .md-level{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 300px;
            height: 100%;
            background: #336ca6;

            h2{
                margin: 0;
                padding: 1em;
                color: rgba(0,0,0,0.4);
                text-shadow: 0 0 1px rgba(0,0,0,0.1);
                font-weight: 300;
                font-size: 2em;
            }

            ul{
                margin: 0;
                padding: 0;
                list-style: none;

                a{
                    display: block;
                    text-decoration: none;
                    color: #f7f7f7;
                    padding: 0.7em 1em 0.7em 1.8em;
                    text-shadow: 0 0 1px rgba(255,255,255,0.1);
                    font-size: 1.4em;
                    box-shadow: inset 0 -1px rgba(0,0,0,0.2), inset 0 1px rgba(0,0,0,0.2);
                }
            }
        }
    }
    .moveFromLeft-transition{
        transition: all 0.3s linear;
    }
    .moveFromLeft-enter, .moveFromLeft-leave{
        transform:translate(-300px,0);
    }
</style>
<script>
    export default {
        data: function(){
            return {
                showLeftMenu:false,
                menuItems:[
                    {
                        name: 'Archive'
                    },
                    {
                        name: 'Categories'
                    },
                    {
                        name: 'Tags'
                    },
                    {
                        name: 'About Me'
                    },
                    {
                        name: 'GitHub'
                    }
                ]
            }
        },
        methods: function(){

        },
        events: {
            'do-menu': function(msg){
                this.showLeftMenu = !this.showLeftMenu
            }
        }
    }
</script>