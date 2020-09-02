<template>
    <div id="login">
        <div id="content">
            <h1>Creat your account</h1>
            <p>输入您的账户开始您的购物之旅吧！！</p>
        </div>
        <form>
            <p>邮箱</p>
            <input type="email">
            <p>密码</p>
            <input type="password" id="first" v-model.lazy="account.password">
            <p>再次输入密码</p>
            <input type="password" id="second" v-model.lazy="vfPwd" @change="pwd">
            <p style="color: red">{{notify}}</p>
            <button>注册</button>
        </form>
        <div id="others">
            <p>-or-</p>
            <p>其他方式登录</p>
            <div></div>
        </div>
        <p>已有账户？<router-link to="/login">点击登录</router-link></p>
    </div>
</template>

<script>
var data = {
  account: {
    email: '',
    password: ''
  },
  vfPwd: '',
  notify: ''
}
var pwd = function () {
  if (this.account.password !== this.vfPwd) {
    this.notify = '密码不一致！！'
  }
}
export default {
  data () {
    return data
  },
  computed: {},
  components: {},
  methods: {pwd}
}
</script>

<style scoped>

</style>
