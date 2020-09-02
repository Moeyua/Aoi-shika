<template>
  <div id="home">
    <h1>购物车</h1>
    <cart_goods v-for="item in goods" v-bind="item" :key="item.name"></cart_goods>
    <div id="summary">
    </div>
    <navbar name='home'></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import cartGoods from '../components/cart_goods'
var goods = [
  {src: '#', name: '名称1', details: '型号', price: '价格', number: '数量'},
  {src: '#', name: '名称2', details: '型号', price: '价格', number: '数量'},
  {src: '#', name: '名称3', details: '型号', price: '价格', number: '数量'},
  {src: '#', name: '名称4', details: '型号', price: '价格', number: '数量'}
]
export default {
  data () {
    return {
      goods: goods
    }
  },
  name: 'cart',
  methods: {},
  components: {
    navbar: navbar,
    cart_goods: cartGoods
  },
  computed: {}
}
</script>

<style>
</style>
