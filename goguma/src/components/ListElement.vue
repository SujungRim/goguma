<template>
  <div class="article">
      <div class="left">제목</div>
      <div class="right">내용입니다다다ㅏ다아아라알아앙라</div>
  </div>
</template>

<script>
export default {
    name: 'ListElement'
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
