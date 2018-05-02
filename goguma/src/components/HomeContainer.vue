<template>
  <div class="wrap">
  <!-- 헤더 -->
  <header>
  <page-title id="home_title"></page-title>
  </header>
  <!-- 본문 -->
  <div class="container"></div>
  </div>
</template>

<script>
import Title from './Title'
export default {
    name: 'HomeContainer',
    components: {
    "pageTitle": Title
    }
}
</script>

<style>
#home_title {
  margin-top: 30.4vh;
  margin-left: 21vw;
  width: 21.3vw;
  line-height: 7rem;
}
</style>