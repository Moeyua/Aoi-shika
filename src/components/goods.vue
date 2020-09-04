<template>
  <a id="goods" :href="href">
      <div id="pic"><img :src="src" :alt="name"></div>
      <div id="name">{{name}}</div>
      <div id="price">￥{{price}}</div>
  </a>
</template>

<script>
var data = {}
export default {
  props: ['name', 'price', 'src', 'href'],
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
  margin: 5px;
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
