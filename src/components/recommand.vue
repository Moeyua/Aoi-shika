<template>
  <div id="recommand">
    <!-- 不带参数的v-bind等价于将good的所有property都作为prop传入 -->
      <goods v-for="good in goodsList" :key="good.index" v-bind="good"></goods>
  </div>
</template>

<script>
import goods from './goods'
var goodsList = [
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'},
  {name: '商品名称', price: 'xx', src: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1621790841/O1CNA16o9cNG100f1237df130b1db394000b_!!1-0-picassodesign.jpg_580x580Q90.jpg_.webp', href: '#'}
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
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
