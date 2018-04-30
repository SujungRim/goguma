<template>
  <div class="wrap">
  <!-- 헤더 -->
  <header>
  <page-title id="sopt_title"></page-title>
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

</style>