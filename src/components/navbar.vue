<template>
  <footer id="navbar">
        <a :href=item.href v-for="item in items" :key="item.id" @click.left="changePic(item)" :status="item.status">
          <img :src = src(item) :alt=item.content>
          {{item.content}}
        </a>
  </footer>
</template>

<script>
var data = {
  items: [
    {content: '首页', href: '#', id: 'home', status: true},
    {content: '分类', href: '#', id: 'all', status: false},
    {content: '购物车', href: '#', id: 'cart', status: false},
    {content: '个人中心', href: '#', id: 'my', status: false}
  ]
}
var changePic = function (item) {
  // 先清除掉所有按钮的样式，再为选中按钮添加样式
  for (var i = 0; i < 4; i++) {
    this.items[i].status = false
  }
  item.status = !item.status
}
var src = function () {
  // 通过闭包函数实现参数传递，改变图标链接
  return function (item) {
    if (item.status) {
      return '../../static/' + item.id + '_fill.png'
    } else {
      return '../../static/' + item.id + '.png'
    }
  }
}
export default {
  data () {
    return data
  },
  name: 'navbar',
  methods: {changePic},
  computed: {src},
  components: {}
}
</script>

<style scoped>

#navbar{
  overflow: hidden;
  background-color: #f1f2f6;
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
}
#navbar a {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  color: #666666;
  text-align: center;
  height: 60px;
  width: 60px;
  text-decoration: none;
  font-size: 5px;
}
#navbar [status=true]{
  color: #1e32b4;
}
#navbar img{
  width: 32px;
  height: 32px;
  margin: 5px 0;
}

</style>
