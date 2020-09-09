<template>
    <div>
    <cartGoods
      v-for="item in goods"
      v-bind="item" :key="item.id"></cartGoods>
    </div>
</template>

<script>
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

export default {
  data () {
    return {
      goods
    }
  },
  components: {
    cartGoods
  }
}
</script>

<style>

</style>
