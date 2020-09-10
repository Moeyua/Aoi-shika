<template>
  <router-link id="goods" :to="{name:'details', params: {name: name}}">
      <div id="pic"><img :src="src" :alt="name"></div>
      <div id="name">{{name}}</div>
      <div id="price">￥{{price}}</div>
  </router-link>
</template>

<script>
var data = {}
export default {
  props: ['name', 'price', 'src'],
  data () {
    return {data}
  },
  name: 'goods',
  methods: {},
  components: {}
}
</script>

<style scoped>
#goods{
  display: block;
  background: #f7f7f7;
  box-shadow:  5px 5px 10px #d2d2d2, -5px -5px 10px #ffffff;
  height: 145px;
  width: 40%;
  margin: 10px;
  border-radius: 10px;
  text-align: left;
  font-size: 13px;
  text-decoration: none;
}
#pic{
    width: 100%;
    height: 100px;
    border-radius: 10px;
    /* background: #1e32b4; */
    margin-bottom: 5px;
}
#pic img{
  width: 100%;
  height: 100%;
}
#price{
    color: red;
}
</style>
