<template>
<div id="top">
  <div id="search">
    <img src="../../static/scan_light.png" alt="扫一扫" id="scan-img">
    <input type="search" placeholder="搜索" v-model="res" />
    <router-link :to="{name:'searchRes',
      params: {result: res}}">
      <img src="../../static/search_light.png" alt="搜索" id="search-img">
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {res: this.value}
  },
  name: 'search',
  methods: {
  },
  components: {}
}
</script>

<style scoped>
#top{
  top: 0;
  left: 0px;
  height: 60px;
  position: fixed;
  width: 100%;
  background-color: #ffffff00;
  overflow: hidden;
  z-index: 999;
}
#search{
  margin: 10px 0 0 10px;
  width: calc(100% - 20px);
  height: 40px;
}
#search img{
  position: absolute;
  top: 17px;
  width: 25px;
  height: 25px;
}
#search-img{
  right: 20px;
}
#scan-img{
  left: 20px;
}
#search input{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #1c2fa8;
  outline: none;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 16px;
  box-shadow:  5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  background: #ffffff00;
}
#search input:focus{
  background: #ffffff;
}
</style>
