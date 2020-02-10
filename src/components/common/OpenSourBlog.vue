<template>
  <div>
    <h4>星星是穷人的珍珠</h4>
    <a href="https://github.com/">点我</a>
    <!--<div v-for="(alink, des) of list">{{alink}}-&#45;&#45;{{des}}</div>-->
   <span @click="tiao1">点我</span>
    <ul>
      <li v-for="v in list">{{v.des}}：
        <a href="">{{v.alink}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "OpenSourBlog",
        data () {
          return {
            list: [
              {
                alink: 'https://github.com/Antabot/White-Jotter',
                des: '《白卷》-前后端分离-VUE-springboot-shiro'
              },
              {
                alink: 'https://github.com/judasn/IntelliJ-IDEA-Tutorial',
                des: 'idea中文教程'
              }
              /*{alink:
              },
              {alink:
              },
              {alink:
              },
              {alink:
              },
              {alink:
              }*/
            ]
          }
        },
      methods: {
          tiao1(){
            window.location.href = 'https://github.com/'
          }
      }
    }
</script>

<style scoped>

</style>
