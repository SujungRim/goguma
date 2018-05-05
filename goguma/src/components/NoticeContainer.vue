<template>
<div class="wrap">
  <!-- 헤더 -->
  <header>
  <page-title></page-title>
  </header>

  <div class="content_container">
  <aside class="snumber">
  <sopt-number></sopt-number>
  </aside>

  <section class="element_list">
    <list-element :propsdata="item" v-for="item in listData"></list-element>
  </section>
  </div>
  </div>
</template>

<script>
import noticelist from '../noticelist'
import Title from './Title'
import SoptNumber from './SoptNumber'
import ListElement from './ListElement'
export default {
    name: 'NoticeContainer',
    components: {
    "soptNumber": SoptNumber,
    "pageTitle": Title,
    "listElement": ListElement
    },
    data () {
      return {
      }
    },
    computed: {
      listData: function() {
        var Path = this.$route.path;
        if (Path === '/notice')
         return noticelist.notice;
        else
         return null;
      }
    },
    created () {
      console.log();
    }
}
</script>

<style>
.content_container{
  overflow: hidden;
}
.snumber{
  float: left;
  display: inline;
}

.element_list{
  margin-top: 12vh;
  margin-left: 19vw;
  float: left;
}
</style>