<template>
  <div id="app">
    <nav>
    <ul>
      <li class="first">
        <router-link to="/home">SOPT</router-link>
        </li>
      <li class="second">
        <router-link to="/sopt">S.O.P.T</router-link>
        </li>
      <li class="third">
        <router-link to="/notice">Notice</router-link>
        </li>
      <li class="fourth">
        <router-link to="/story">Story</router-link>
        </li>
      <li class="fifth">
        <router-link to="/information">Information</router-link>
        </li>
      <li class="sixth">
        <router-link to="/recruit">Recruit</router-link>
        </li>
    </ul>
  </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
  font-family: 'Noto Sans', sans-serif;
}

*{
  margin: 0;
  padding: 0;
}

nav{
  position: absolute;
    top: 0px;
    width: 100vw;
    background-color: #EEEEEE;
    /* font-size: 10px; */
    color: #707070;
}

ul{
  font-size: 2rem;
  list-style-type: none;
}

.first{
  font-size: 3rem;
  font-weight: 700;
  margin-left: 7vw;
  padding-left: 0;
}

ul li {
    display: inline;
    padding-right: 10vw;
}

.sixth{
  padding-right: 7vw;
}
</style>
