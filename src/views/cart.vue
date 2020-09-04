<template>
  <div id="cart">
    <h1>购物车</h1>
    <cart_goods v-for="item in goods" v-bind="item" :key="item.name" @numberChanged = "changeNumber($event)"></cart_goods>
    <div id="summary">
      <p style="color: red">合计：￥{{total}}</p>
      <button>结算</button>
    </div>
    <navbar name='cart'></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import cartGoods from '../components/cart_goods'
var goods = [
  {src: '#', name: '名称1', type: '型号', price: '10', number: '1'},
  {src: '#', name: '名称2', type: '型号', price: '5', number: '1'},
  {src: '#', name: '名称3', type: '型号', price: '100', number: '1'},
  {src: '#', name: '名称4', type: '型号', price: '27', number: '1'}
]
var changeNumber = function (item) {
  console.log(item[0], item[1])
  for (var j = 0; j < goods.length; j++) {
    if (item[0] === goods[j].name) {
      console.log(goods[j].number)
      goods[j].number = parseInt(goods[j].number)
      if (goods[j].number > 0) {
        goods[j].number += item[1]
      }
    }
  }
}
export default {
  data () {
    return {
      goods: goods
    }
  },
  name: 'cart',
  methods: {
    changeNumber
  },
  components: {
    navbar: navbar,
    cart_goods: cartGoods
  },
  computed: {
    total: function () {
      var sum = 0
      for (var i = 0; i < this.goods.length; i++) {
        sum += goods[i].price * goods[i].number
      }
      return sum
    }
  }
}
</script>

<style scoped>
#cart_goods{
  margin: 20px 0;
  border-radius: 20px;
}
#summary{
  position: fixed;
  border-top: 1px solid #666666;
  height: 7%;
  width: 90%;
  padding: 0 5%;
  left: 0px;
  bottom: 60px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
</style>
