<template>
<div class="wrap">
  <!-- 헤더 -->
  <header>
  <page-title id="sopt_title"></page-title>
  </header>
  <!-- 본문 -->
  <div class="content_container"></div>
  </div>
</template>

<script>
import Title from './Title'
export default {
    name: 'SoptContainer',
    components: {
    "pageTitle": Title
    }
}
</script>

<style>
#sopt_title{
  margin-top: 46vh;
  margin-left: 54vw;
}
</style>