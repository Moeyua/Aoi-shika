<template>
  <div id="home">
    <!-- <img src="./assets/logo.png"> -->
    <search></search>
    <swipe></swipe>
    <classfication></classfication>
    <br>
    <h2>为你推荐</h2>
    <recommand></recommand>
    <br>
    <h2>热门商品</h2>
    <hotGoods></hotGoods>
    <router-view/>
  </div>
</template>

<script>
import search from '../components/search'
import swipe from '../components/swipe'
import classfication from '../components/classfication'
import recommand from '../components/recommand'
import hotGoods from '../components/hot-goods'

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
    hotGoods: hotGoods
  }
}
</script>

<style>

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
}
h2{
  text-align:left;
  margin-left:10px;
  margin-bottom: 10px;
}
</style>
