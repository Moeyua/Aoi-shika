<template>
  <div id="recommand">
    <!-- 不带参数的v-bind等价于将good的所有property都作为prop传入 -->
      <goods v-for="good in goodsList" :key="good.index" v-bind="good"></goods>
  </div>
</template>

<script>
import goods from './goods'
var goodsList = [
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://iconfont.alicdn.com/s/a0746618-4087-4dd5-a9e7-8df2b0578d47_origin.svg', href: '#'}
]
export default {
  data () {
    return {
      goodsList
    }
  },
  name: 'recommand',
  methods: {},
  components: {goods: goods}
}
</script>

<style scoped>
#recommand{
  background: #f7f7f7;
  padding:  15px 5px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
