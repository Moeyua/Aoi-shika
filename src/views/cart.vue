<template>
  <div id="cart">
    <div id="top">
        <span>购物车</span>
        <button id="delete" @click="deleteGoods">删除</button>
    </div>

    <cart_goods
    v-for="item in goods"
    :style=" justify(item.id) ? style : ''"
    v-bind="item" :key="item.id"
    @numberChanged = "changeNumber($event)"
    @click.native="selectGoods(item)"></cart_goods>

    <div id="summary">
      <label>
        <input type="checkbox" @click="selectAll(checked)" v-model="checked">
        全选
      </label>
      <span style="color: red">合计：￥{{total}}</span>
      <button>结算</button>
    </div>
    <navbar name='cart'></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import cartGoods from '../components/cart_goods'

// 商品列表
var goods = [
  {src: '#', name: '名称1', type: '型号', price: '10', number: 1, id: 1111},
  {src: '#', name: '名称2', type: '型号', price: '5', number: 2, id: 24433},
  {src: '#', name: '名称3', type: '型号', price: '100', number: 1, id: 344},
  {src: '#', name: '名称4', type: '型号', price: '27', number: 1, id: 4546}
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
      style: {border: '1px red solid'}
    }
  },
  name: 'cart',
  methods: {
    changeNumber, selectGoods, justify, deleteGoods, selectAll
  },
  components: {
    navbar: navbar,
    cart_goods: cartGoods
  },
  computed: {
    total: function () {
      var sum = 0
      for (var i = 0; i < this.operation.length; i++) {
        var id = this.operation[i]
        for (var j = 0; j < this.goods.length; j++) {
          if (goods[j].id === id) {
            sum += goods[j].price * goods[j].number
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
#cart_goods{
  margin: 20px 0;
  border-radius: 20px;
  background-color: #f7f7f7;
}
#top{
  height: 60px;
  width: 100%;
  line-height: 60px;
  background: #1b2ea7;
  /* position: fixed; */
}
#top span{
  float: left;
  color: #ededee;
}
#top button{
  float: right;
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
