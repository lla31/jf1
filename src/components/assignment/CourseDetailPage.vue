<template>
  <div id="detail">
    <nav-menu></nav-menu>
    <div>{{id}}</div>

  </div>
</template>

<script>
  import NavMenu from "../common/NavMenu";
    export default {
     name: "CourseDetailPage",
      components: {NavMenu},
      data() {
        return {
          courses: [],
          id: null
        }
      },

      created() {
        this.idsearchResult()
        this.id = this.$route.params.id
      },

      methods: {
        idsearchResult(id) {
          this.$axios.post('/findById',
            {
              data: {
              id: this.id
            }
          }).then(resp => {
            if (resp && resp.status === 200) {
              this.courses = resp.data
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
