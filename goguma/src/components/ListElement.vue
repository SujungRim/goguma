<template>
  <div class="article">
      <div class="real_article_notice" v-if="getPath === '/notice'">
         <div class="left"><span id="notice_title">{{propsdata.title}}</span></div>
        <div class="right"><span id="notice_content">{{propsdata.content}}</span></div>
      </div>

      <div class="real_article_story" v-else-if="getPath === '/story'">
         <div class="left"><span style="white-space: pre;" >{{propsdata.index}}</span></div>
        <div class="right"><span style="white-space: pre;">{{propsdata.title.title}}</span></div>
      </div>
  </div>
</template>

<script>
import noticelist from '../noticelist'
import storylist from '../storylist'
export default {
    name: 'ListElement',
    data () {
        return {
            
        }
    },
    props: ['propsdata'],
    methods: {

    },
    computed: {
	getPath: function() {
    return this.$route.path
  }
},
    created () {
        console.log(this.propsdata.content)
    }
}
</script>

<style>
.article{
    width: 40vw;
    height: 14vh;
    line-height: 14vh;
    background-color: #f0f0f0;
    margin-bottom: 3.6vh;
    overflow: hidden;
    text-align: center;
}

.left{
    width: 16vw;
    font-size: 4.5rem;
    float: left;
}

.right{
    width: 24vw;
    font-size: 2rem;
    float: left;
    padding-top: 3vh;
}

#notice_content{
    font-size: 2rem;
    white-space: pre;
    line-height: 3rem; 
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>