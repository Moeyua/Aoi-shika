<template>
  <div id="home">
    <!-- <img src="./assets/logo.png"> -->
    <search></search>
    <div id="main">
      <swipe></swipe>
      <br>
      <h2>热门品牌</h2>
      <classfication></classfication>
      <br>
      <h2>为你推荐</h2>
      <recommand></recommand>
      <br>
      <h2>热门商品</h2>
      <recommand></recommand>
      <p>------ 已经到底啦 ------</p>
    </div>
    <navbar name='home'></navbar>
    <router-view/>
  </div>
</template>

<script>
import search from '../components/search'
import swipe from '../components/swipe'
import classfication from '../components/classfication'
import recommand from '../components/recommand'
import navbar from '../components/navbar'

export default {
  data () {
    return {}
  },
  name: 'home',
  methods: {},
  components: {
    search: search,
    swipe: swipe,
    classfication: classfication,
    recommand: recommand,
    navbar: navbar
  }
}
</script>

<style scoped>

#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100%-20px);
  width: calc(100%-20px);
  z-index: 99;
}
#main{
  position: absolute;
  margin: 0 10px 80px 10px;
  left: 0;
  top: 70px;
  z-index: 0;
}
h2{
  text-align:left;
  margin-left:10px;
  margin-bottom: 10px;
}
</style>
