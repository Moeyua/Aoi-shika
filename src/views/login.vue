<template>
    <div id="login">
        <div id="content">
            <h1>Creat your account</h1>
            <p>输入您的账户开始您的购物之旅吧！！</p>
        </div>
        <form>
            <p>用户名</p>
            <input type="text">
            <p>密码</p>
            <input type="password" id="first" v-model.lazy="account.password">
            <br>
            <button><router-link to="/my">登录</router-link></button>
        </form>
        <div id="others">
            <p>-or-</p>
            <p>其他方式登录</p>
            <div></div>
        </div>
        <p>还没有账户？<router-link to="/regist">点击注册</router-link></p>
    </div>
</template>

<script>
var data = {
  account: {
    email: '',
    password: ''
  }
}
export default {
  data () {
    return data
  },
  computed: {},
  components: {},
  methods: {}
}
</script>

<style scoped>

</style>
