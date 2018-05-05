<template>
  <div class="wrap">
  <!-- 헤더 -->
  <header>
  <page-title></page-title>
  </header>

  <div class="content_container">
  <text-box id="one" v-text="one"></text-box>
  <text-box id="two" v-text="two"></text-box>
  <b-button id="three" variant="outline-secondary" v-text="three"></b-button>
  </div>
  </div>
</template>

<script>
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import Title from './Title'
import TextBox from './TextBox'
import bButton from '../../node_modules/bootstrap-vue/es/components/button/button'
export default {
    name: 'RecruitContainer',
    components: {
    "pageTitle": Title,
    "textBox": TextBox,
    "bButton": bButton
    },
  data () {
    return {
    one: 'APPLY',
    two: '당신의 열정을 SOPT에서 펼쳐보세요.',
    three: 'SOPT 22기 지원하기'
    }
  }
}
</script>

<style>
#one,
#two,
#three {
  margin-left: 16vw;
  font-size: 2.5rem;
}
#one {
  margin-top: 14.5vh;
  margin-bottom: 3.9vh;
}
#two {
  margin-bottom: 5vh;
  font-size: 5rem;
}
#three {
  width: 18.2vw;
  height: 9vh;
  font-size: 2.5rem;
}
</style>