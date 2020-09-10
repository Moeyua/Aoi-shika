<template>
    <div id="order">
      <div id="top">
        <span>订单详情</span>
      </div>
      <!-- 占位盒子 -->
      <div style="height:100px"></div>

      <!-- 收货地址 -->
      <div id="address"></div>

      <!-- 商品列表 -->
      <div id="good" v-for="item in goods" :key="item.name">
        <img :src="item.src">
        <div>
          <p style="display: flex;flex-flow: column">
            <span>{{item.name}}</span>
            <span style="color:red">￥{{item.price}}</span>
          </p>
          <span id="number">{{item.number}}</span>
        </div>
      </div>
      <div id="navbar">
        <span style="color: red">合计：￥{{this.$route.params.total}}</span>
        <button>确认付款</button>
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
      goods,
      operation: this.$route.params.operation
    }
  },
  components: {
    cartGoods
  }
}
</script>

<style scoped>
#order{
  color: #666666;
}
#top{
  position: fixed;
  top: 0;
  left: 10px;
  height: 100px;
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#top span{
  font-size: 30px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 30px;
}
#order #good{
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  background: #f7f7f7;
  margin: 20px 0;
  border-radius: 20px;
}
#order div div{
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
div img{
  width: 100px;
  height: 100px;
}
#number{
  position: relative;
  left: 150px;
  font-size: 30px;
}
#navbar{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#navbar button{
  height: 45px;
  width: 100px;
  outline: none;
  background: #1c2fa8;
  color: #f7f7f7;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  margin: 20px;
}

</style>
