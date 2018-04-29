<template>
  <div id="app">
    <nav-tab></nav-tab>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    "navTab" :Nav
  }
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
</style>
