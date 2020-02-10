<!--<template>
  <el-card>
    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </el-card>
</template>-->

<template>
  <body id="poster">
  <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h1 class="login_title">欢迎光临</h1>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" class="loginBtn" style="width: 100%;background: #505458"
                 v-on:click="login">登录
      </el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: 'admin',
          password: '123'
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        var _this = this
        console.log(this.$store.state)

        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              var data = this.loginForm
              _this.$store.commit('login', _this.loginForm)
              var path = _this.$route.query.redirect
              _this.$router.replace({path: path === '/' || path === undefined ? '/home' : path})
            }
          })
          .catch(failResponse => {})
      }
    }
  }
</script>

<style>
  #poster {
    background:url("../assets/img/bg/loginbg.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }

  .login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .loginBtn {
    color: mediumorchid;
  }
</style>
