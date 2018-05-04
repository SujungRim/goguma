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
    <list-element></list-element>
    <list-element></list-element>
    <list-element></list-element>
    <list-element></list-element>
    <list-element></list-element>
    <list-element></list-element>
  </section>
  </div>
  </div>
</template>

<script>
import Title from './Title'
import SoptNumber from './SoptNumber'
import ListElement from './ListElement'
export default {
    name: 'InformationContainer',
    components: {
    "soptNumber": SoptNumber,
    "pageTitle": Title,
    "listElement": ListElement
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