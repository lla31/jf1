<template>
  <div>
  <el-row>
    课程信息
  </el-row>
  <el-row style="height: 840px;">
    <el-tooltip effect="dark" placement="right"
                v-for="item in courses"
                :key="item.id">
      <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
      <p slot="content" style="font-size: 13px;margin-bottom: 6px">
        <span>{{item.author}}</span> /
        <span>{{item.date}}</span> /
        <span>{{item.press}}</span>
      </p>
      <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
      <el-card style="width: 300px;margin-bottom: 20px;height: 290px;float: left;margin-right: 15px" class="book"
               bodyStyle="padding:10px" shadow="hover">
        <div class="cover">
          <img :src="item.cover" alt="封面">
        </div>
        <div class="info">
          <div class="title">
            <a href="">{{item.title}}</a>
          </div>
        </div>
        <div class="author">{{item.author}}</div>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">加入我的课程</el-button>
        </div>
      </el-card>
    </el-tooltip>
  </el-row>

  </div>
</template>

<script>
    export default {
      name: "CourseDetailPage",

      data() {
        return {
          courses: [],
        }
      },

      created() {
        this.idsearchResult()
        id = this.$route.params.id
      },

      methods: {
        idsearchResult(id) {
          let _this = this
          this.$axios.post('/findById',
            {
              data: {
              id: this.$route.params.id
            }
          }).then(resp => {
            if (resp && resp.status === 200) {
              _this.courses = resp.data
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
