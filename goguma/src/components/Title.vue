<template>
  <h1>{{titleData}}</h1>
</template>

<script>
export default {
    name: 'Title',
    data () {
        return {
            title: ["SHOUT OUR PASSION TOGETHER", "SOPT", "Notice", "Story", "Information", "Recruit", "Not found"]
        }
    },
    watch: {
        '$route': 'titleData'
    },
    computed: {
        titleData: function() {
            var Path = this.$route.path;
            if (Path === '/home' || Path === '/')
                return this.title[0];
            else if (Path === '/sopt'){
                return this.title[1];}
            else if (Path === '/notice')
                return this.title[2];
            else if (Path === '/story')
                return this.title[3];
            else if (Path === '/information')
                return this.title[4];
            else if (Path === '/recruit')
                return this.title[5];
            else
                return this.title[6];
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
