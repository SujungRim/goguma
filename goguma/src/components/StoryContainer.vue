<template>
<div class="container">
  <sopt-number></sopt-number>
  <page-title></page-title>
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