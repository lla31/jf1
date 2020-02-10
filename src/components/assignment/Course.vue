<template>
  <div>
    <el-row style="height: 840px;">
      <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
      <el-tooltip effect="dark" placement="right"
                  v-for="item in courses.slice((currentPage-1)*pagesize,currentPage*pagesize)"
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
          <div class="cover" @click="goCourseDetailPage(item)">
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
      <edit-form @onSubmit="loadCourses()" ref="edit"></edit-form>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1,2,3,4,5,6,7,8]"
        :page-size="pagesize"
        :total="courses.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
  import EditForm from './EditForm'
  import SearchBar from './SearchBar'
  export default {
    name: 'Courses',
    components: {EditForm, SearchBar},
    data () {
      return {
        courses: [],
        /* {
            cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579934693503&di=f1cb82125ce735881039945c39ef452b&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D963090220%2C61907032%26fm%3D214%26gp%3D0.jpg',//https://i.loli.net/2019/04/10/5cada7e73d601.jpg;../../../../assets/img/bg/loginbg.jpg
            title: 'java基础入门',
            author: '李国福',
            date: '2019-05-05',
            press: '湖南科技大学',
            abs: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程'
          }*/
        pagesize: 4,
        currentPage: 1,
        id: 1
      }
    },
    mounted: function () {
      this.loadCourses()
    },
    methods: {
      loadCourses() {
        var _this = this
        this.$axios.get('/courses').then(resp => {
          if (resp && resp.status === 200) {
            _this.courses = resp.data
          }
        })
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
        console.log(this.currentPage)
      },
      searchResult () {
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
      editCourses (item) {
        this.$refs.edit.dialogFormVisible = true
        this.$refs.edit.form = {
          id: item.id,
          cover: item.cover,
          title: item.title,
          author: item.author,
          date: item.date,
          press: item.press,
          abs: item.abs,
          category: {
            id: item.category.id.toString(),
            name: item.category.name
          }
        }
      },

      goCourseDetailPage(item) {
        this.$router.push({name:"CourseDetailPage",params:{id: item.id}})
      }

    }
  }
</script>

<style scoped>
  .cover {
    width: 200px;
    height: 200px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 200px;
    height: 200px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>

