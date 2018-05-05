<template>
  <div class="wrap">
  <!-- 헤더 -->
  <header>
  <page-title id="home_title"></page-title>
  <facebook-button></facebook-button>
  </header>
  <!-- 본문 -->
  <div class="content_container"></div>
  </div>
</template>

<script>
import Title from './Title'
import FacebookButton from './HomeButton'

export default {
    name: 'HomeContainer',
    components: {
    "pageTitle": Title,
    "facebookButton": FacebookButton,
    }
}
</script>

<style>
.wrap {
  background-image: url('../assets/sopt_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}

#home_title {
  margin-top: 30.4vh;
  margin-left: 21vw;
  width: 21.3vw;
  line-height: 7rem;
  font-family: 'Raleway', sans-serif;
}

</style>