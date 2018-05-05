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
    <list-element :propsdata = "{index:i, title: item}" v-for="(item, i) in listData"></list-element>
  </section>  </div>
  </div>
</template>

<script>
import storylist from '../storylist'
import Title from './Title'
import SoptNumber from './SoptNumber'
import ListElement from './ListElement'
export default {
    name: 'StoryContainer',
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
        if (Path === '/story')
         return storylist.story;
        else
         return null;
    }
  }
}
</script>

<style>
.content_container{
  overflow: hidden;
}
.snumber{
  float: left;
}

.element_list{
  margin-top: 12vh;
  margin-left: 19.5vw;
  float: left;
}
</style>