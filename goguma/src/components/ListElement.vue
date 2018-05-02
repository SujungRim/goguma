<template>
  <div class="article">
      <!-- <div class="loading" v-if="loading">
          Loading...
      </div>

      <div class="error" v-if="error">
          {{error}}
      </div> -->

      <div class="real_article">
         <div class="left"><span style="white-space: pre;">{{propsdata.title}}</span></div>
        <div class="right"><span style="white-space: pre;">{{propsdata.content}}</span></div>
      </div>
  </div>
</template>

<script>
import noticelist from '../noticelist'
export default {
    name: 'ListElement',
    data () {
        return {
            
        }
    },
    props: ['propsdata'],
    methods: {

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
}
</style>
