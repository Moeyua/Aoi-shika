<template>
  <div id="navbar">
      <a href="#home">{{bar1}}</a>
      <a href="#news">{{bar2}}</a>
      <a href="#contact">{{bar3}}</a>
      <a href="#about">{{bar4}}</a>
    </div>
</template>

<script>
var data = {
  bar1: '首页',
  bar2: '分类',
  bar3: '购物车',
  bar4: '个人中心'
}
export default {
  data () {
    return data
  },
  name: 'navbar',
  methods: {},
  components: {}
}
</script>

<style>

#navbar{
  overflow: hidden;
  background-color: #333;
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  width: 100%;
}
#navbar a {
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

</style>
