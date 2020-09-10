<template>
  <div id="myOrder">
      <div id="top">
        <span>我的订单</span>
      </div>
      <div id="main">
          <div v-for="orderItem in order" :key="orderItem.orderNo" id="order">
              <div v-for="goodsItem in orderItem.goods" :key="goodsItem.name">
                 <img :src="goodsItem.src">
                 <div>
                    <p style="display: flex;flex-flow: column">
                        <span>{{goodsItem.name}}</span>
                        <span style="color:red">￥{{goodsItem.price}}</span>
                    </p>
                    <span id="number">{{goodsItem.number}}</span>
                 </div>
              </div>
              <div id="navbar">
                  <span>订单编号：{{orderItem.orderNo}}</span>
                  <span style="color:red">合计：￥{{sum(orderItem.goods)}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import cartGoods from '../components/cartGoods'
// 商品列表
var goods = [
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称1', type: '型号', price: '10', number: 1, id: 1111},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称2', type: '型号', price: '5', number: 2, id: 24433},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称3', type: '型号', price: '110', number: 1, id: 344}
]
export default {
  data () {
    return {
      order: [
        {goods: goods, orderNo: '114514'},
        {goods: goods, orderNo: '114515'},
        {goods: goods, orderNo: '114516'},
        {goods: goods, orderNo: '114517'}]
    }
  },
  components: {cartGoods},
  computed: {
    sum: function () {
      return function (goodsItem) {
        var sum = 0
        for (var i = 0; i < goodsItem.length; i++) {
          sum += parseInt(goodsItem[i].price)
        }
        return sum
      }
    }
  }
}
</script>

<style scoped>
#top{
  height: 80px;
  width: 100%;
  left: 0;
  top: 0;
  background: #ffffff;
  position: fixed;
  z-index: 10;
}
#top span{
  float: left;
  margin-left: 20px;
  margin-top: 30px;
  color: #666666;
  font-size: 30px;
  font-weight: 700;
}
#main{
    position: relative;
    top: 80px;
}
#main #order{
    background: #f7f7f7;
    margin-bottom: 20px;
    border-radius: 20px;
}
#main #order div{
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  background: #f7f7f7;
  border-radius: 20px;
}
#main #order #navbar{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #666666;
    border-radius: 0;
}
#main #order div div{
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
div img{
  width: 80px;
  height: 80px;
}
#number{
  position: relative;
  left: 150px;
  font-size: 30px;
}
</style>
