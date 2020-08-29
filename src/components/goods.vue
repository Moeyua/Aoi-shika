<template>
  <div id="goods">
      <div id="pic"><img src="#" alt=""></div>
      <div id="name">{{name}}</div>
      <div id="price">￥{{price}}</div>
  </div>
</template>

<script>
var data = {name: '商品名称', price: 'xx'}
export default {
  data () {
    return data
  },
  name: 'goods',
  methods: {},
  components: {}
}
</script>

<style>
#goods{
  background: #e9e3e3;
  height: 145px;
  width: cacl(100%-50px);
  margin: 5px;
  border-radius: 10px;
  text-align: left;
  font-size: 13px;
}
#pic{
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: cyan;
    margin-bottom: 5px;
}
#price{
    color: red;
}
</style>
