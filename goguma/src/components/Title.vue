<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
    name: 'Title',
    data () {
        return {
            title: '타이틀'
        }
    }
}
</script>

<style>
h1{
    font-size: 8rem;
    font-weight: 800;
    margin-top: 17vh;
    margin-left: 16vw;
    color: #707070;
}
</style>
