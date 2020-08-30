<template>
  <div id="search">
    <img src="../../static/scan_light.png" alt="扫一扫" id="scan-img">
    <input type="search" placeholder="搜索"/>
    <img src="../../static/search_light.png" alt="搜索" id="search-img">
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  name: 'search',
  methods: {},
  components: {}
}
</script>

<style>
#search {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
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
  font-size: 16px;
}
</style>
