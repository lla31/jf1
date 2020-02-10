<template>
  <div>
    <el-row>
      <el-menu
        class="categories"
        default-active="0"
        router
        active-text-color="red">
        <el-menu-item index="/assignment/coursenotice">
          <i class="el-icon-menu"></i>
          notice
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">任务目标</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">课件</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">在线测试</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">疯狂互动</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">帮助</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">其他</span>
        </el-menu-item>
      </el-menu>
    </el-row>
    <el-row>
      <router-view></router-view>
    </el-row>

  </div>
</template>

<script>
    export default {
        name: "SideMenu"
    }
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -600px;
    top: 100px;
    width: 150px;
  }
</style>
