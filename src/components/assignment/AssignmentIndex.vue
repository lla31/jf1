<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <!--<switch></switch>-->
      <SideMenu></SideMenu>
    </el-aside>
    <!--<el-main>
      &lt;!&ndash;<course class="course-area"></course>&ndash;&gt;
    </el-main>-->
  </el-container>
</template>

<script>
  import SideMenu from "./SideMenu";
  import Course from "./Course";
  import CourseNotice from "./CourseNotice";
    export default {
        name: "AssignmentIndex",
        components:{CourseNotice, SideMenu, Course}
    }
</script>

<style scoped>
  .course-area {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
