<template>
<div class="wrap">
  <!-- 헤더 -->
  <header>
  <page-title></page-title>
  </header>

  <div class="container">
  <aside>
  <sopt-number></sopt-number>
  </aside>
  
  <section>
    <!-- list-element 넣기 -->
  </section>
  </div>
  </div>
</template>

<script>
import Title from './Title'
import SoptNumber from './SoptNumber'
export default {
    name: 'StoryContainer',
    components: {
    "soptNumber": SoptNumber,
    "pageTitle": Title
    }
}
</script>

<style>

</style>