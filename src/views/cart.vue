<template>
  <div id="cart">
    <div id="top">
        <span>购物车</span>
        <button id="delete" @click="deleteGoods">删除</button>
    </div>

    <div id="goods">
      <cartGoods
      v-for="item in goods"
      :style=" justify(item.id) ? style : ''"
      v-bind="item" :key="item.id"
      @numberChanged = "changeNumber($event)"
      @click.native="selectGoods(item)"></cartGoods>
      <p>------ 已经到底啦 ------</p>
    </div>

    <div id="summary">
      <label>
        <input type="checkbox" @click="selectAll(checked)" v-model="checked">
        全选
      </label>
      <span>合计：￥{{total}}</span>
      <router-link :to="{name:'order', params:{operation: operation,total: total}}">
          <button>提交订单</button>
      </router-link>
    </div>
    <navbar name='cart'></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import cartGoods from '../components/cartGoods'

// 商品列表
var goods = [
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称1', type: '型号', price: '10', number: 1, id: 1111},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称2', type: '型号', price: '5', number: 2, id: 24433},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称3', type: '型号', price: '110', number: 1, id: 344},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称4', type: '型号', price: '36', number: 1, id: 5555},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称5', type: '型号', price: '280', number: 1, id: 444},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称6', type: '型号', price: '90', number: 1, id: 3444},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称7', type: '型号', price: '190', number: 1, id: 244},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称8', type: '型号', price: '12', number: 1, id: 3114},
  {src: 'https://iconfont.alicdn.com/t/7c3c9ef8-aa69-4c3d-8743-89942f4a91cc.png', name: '名称9', type: '型号', price: '27', number: 1, id: 4546}
]

// 更改数量
var changeNumber = function (item) {
  for (var j = 0; j < goods.length; j++) {
    if (item[0] === goods[j].name) {
      goods[j].number = parseInt(goods[j].number)
      if (goods[j].number > 0) {
        goods[j].number += item[1]
      }
    }
  }
}

// 选择商品
var selectGoods = function (item) {
  var arr = this.operation
  // 判断是否已经选中
  var justify = this.justify(item.id)
  // 已经选中则删除，没有选中则添加至数组中
  if (justify) {
    arr.splice(arr.indexOf(item.id), 1)
  } else {
    this.operation.push(item.id)
  }
}

// 判断该商品是否被选择中
var justify = function (id) {
  var arr = this.operation
  return arr.some(function (elem, index, arr) {
    return elem === id
  })
}

// 删除商品
var deleteGoods = function () {
  for (var i = 0; i < this.operation.length; i++) {
    var id = this.operation[i]
    for (var j = 0; j < this.goods.length; j++) {
      if (id === goods[j].id) {
        goods.splice(j, 1)
        this.operation.splice(i, 1)
        i--
      }
    }
  }
}

// 全选
var selectAll = function (checked) {
  for (var i = 0; i < goods.length; i++) {
    if (checked) {
      this.operation.pop()
    } else {
      if (!this.justify(goods[i].id)) {
        this.operation.push(goods[i].id)
      }
    }
  }
}
export default {
  data () {
    return {
      goods: goods,
      operation: [],
      checked: false,
      style: {boxShadow: '10px 10px 17px #d9d9d9, -10px -10px 17px #ffffff'}
    }
  },
  name: 'cart',
  methods: {
    changeNumber, selectGoods, justify, deleteGoods, selectAll
  },
  components: {
    navbar: navbar,
    cartGoods: cartGoods
  },
  computed: {
    total: function () {
      var sum = 0
      for (var i = 0; i < this.operation.length; i++) {
        var id = this.operation[i]
        for (var j = 0; j < this.goods.length; j++) {
          if (this.goods[j].id === id) {
            sum += this.goods[j].price * this.goods[j].number
            break
          }
        }
      }
      return sum
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
#top button{
  display: none;
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  background: #ffffff;
  border: none;
  color: #666666;
  font-size: 16px;
}
#goods{
  position: relative;
  top: 80px;
  padding-bottom: 160px;
}
#cartGoods{
  margin: 20px 0;
  border-radius: 20px;
  background-color: #f7f7f7;
}
#summary{
  position: fixed;
  height: 90px;
  width: 90%;
  padding: 0 5%;
  left: 0px;
  bottom: 60px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background: #ffffff;
  align-items: center;
  box-shadow:  5px -5px 10px #d9d9d9, -5px 5px 10px #ffffff;
}
#summary span{
  color: red;
}
#summary button{
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
}
</style>
