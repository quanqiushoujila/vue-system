<template>
  <el-form :model="numberValidateForm" ref="numberValidateForm" :rules="rules" label-width="0px" class="loginform card-box">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="numberValidateForm.account" auto-complete="off"  placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="numberValidateForm.checkPass" auto-complete="off"  placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
       <el-checkbox label="记住密码" name="type" checked></el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('numberValidateForm')" class="btn-submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import NProgress from 'nprogress'
import axios from 'axios'

export default {
  data () {
    return {
      numberValidateForm: {
        account: 'admin',
        checkPass: '123456'
      },
      rules: {
        account: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let loginParams = {username: this.numberValidateForm.account, password: this.numberValidateForm.checkPass}

          NProgress.start()

          axios.get('/api/login').then((response) => {
            let data = response.data.data
            if (data.password === loginParams.password && data.username === loginParams.username) {
              this.$router.push({ path: '/index' })
            } else {
              this.$message({
                showClose: true,
                message: '密码或用户名出错',
                type: 'error'
              })
            }
            NProgress.done()
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-box {
    padding: 20px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    width: 400px;
    border: 2px solid #8492A6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .btn-submit {
    width: 100%;
  }
  .loginform {
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
</style>
