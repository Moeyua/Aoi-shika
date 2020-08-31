<template>
  <div id="hot-goods">
    <!-- 不带参数的v-bind等价于将good的所有property都作为prop传入 -->
      <goods v-for="good in goodsList" :key="good.index" v-bind="good"></goods>
  </div>
</template>

<script>
import goods from './goods'
var goodsList = [
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'},
  {name: '商品名称', price: 'xx', src: '#'}
]
export default {
  data () {
    return {
      goodsList
    }
  },
  name: 'hot-goods',
  methods: {},
  components: {goods: goods}
}
</script>

<style>
#hot-goods{
  background: #ffffff;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 60px;
}
</style>
