<template>
  <div>
    <div>
    <course class="course-area"></course>
    </div>
    <iframe class="searchGroup">
      <input type="text" v-model="keywords">
      <button @click="search">搜索</button>
    </iframe>
    <iframe :src="iframeSrc" v-show="iframeSrc" style="
          position:absolute;top: -300px;left: 0px;width:3000px;height:300px"></iframe>
  </div>
</template>

<script>
  import Course from "../assignment/Course";
  import SideMenu from "../assignment/SideMenu";
  export default {
    name: 'AppIndex',
    components: {Course},
    data() {
      return {
        keywords: '',
        iframeSrc: ""
      }
    },
    methods: {
      search (){
        this.iframeSrc = "https://www.baidu.com/s?wd="+this.keyword
      }
    }
  }
</script>

<style scoped>

</style>
