<template>
  <div>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"

    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">战胜恐惧的最好办法 就是……</span>
    <!--<el-input
      @keyup.enter.native="searchResult01"
      ref="searchBar"
      placeholder="searching for truth"
      prefix-icon="el-icon-search"
      size="medium"
      style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
      v-model="keywords">
      &lt;!&ndash;<el-button size="small" type="primary" icon="el-icon-search" @click="searchResult01">搜索</el-button>&ndash;&gt;
    </el-input>-->

      <el-header class="searchGroup">
        <input type="text" v-model="keyword">
        <button @click="search">搜索</button>
      </el-header>

      <iframe :src="iframeSrc" v-show="iframeSrc"></iframe>

  </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/assignment', navItem: '我的课程'},
          {name: '/hyperlink', navItem: '爱心链接'},
          {name: '/admin', navItem: '个人中心'}
        ],

        keywords: '',
        iframeSrc: ""
      }
    },
    methods: {
      searchResult01 () {
        var _this = this
        this.$axios
          .post('/search',{
            keywords: this.$refs.searchBar.keywords
          }).then(resp =>{
          if (resp && resp.status ===200) {
            _this.courses = resp.data
          }
        })
      },

      search (){
        this.iframeSrc = "https://www.baidu.com/s?wd="+this.keyword
      }
    }

  }
</script>

<style scoped>
  .searchGroup{
    height: 1000px;
    width: 1000px;
  }

  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>

