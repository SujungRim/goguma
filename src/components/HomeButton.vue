<template>
<div>
  <div id="facebookbtn">
      <a href="https://www.facebook.com/clubsopt/"><img src="../assets/facebook_btn.png"/></a>
  </div>
  <div id="kakaobtn">
      <img src="../assets/kakao_btn.png" alt="kakao_plus_friend_button"/>
  </div>
</div>
</template>

<script>
export default {
    name: 'facebookButton'
}
</script>

<style>
#facebookbtn {
    margin-top: 3vh;
    margin-left: 21vw;
    width: 3.5vw;
    display: inline;
    margin-right: 0.2vw;
}
#facebookbtn img{
    height: 7vh;
    margin-top: 2.5vh;
}
#kakaobtn{
    margin-top: 3vh;
    margin-left: 1vw;
    width: 5vh;
    display: inline;
}
#kakaobtn img{
    height: 7vh;
    margin-top: 2.5vh;
}
</style>
