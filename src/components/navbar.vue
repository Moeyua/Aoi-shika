<template>
  <footer id="navbar">
    <!-- 动态传入参数 -->
        <router-link :to="{ path: item.href }"
         v-for="item in items" :key="item.id" @click.native="changePic(item)">
          <img :src = src(item) :alt=item.content :status="items.status">
          {{item.content}}
        </router-link>
  </footer>
</template>

<script>
var data = {
  items: [
    {content: '首页', href: '/', id: 'home', status: true},
    {content: '分类', href: '/all', id: 'all', status: false},
    {content: '购物车', href: '/cart', id: 'cart', status: false},
    {content: '个人中心', href: '/my', id: 'my', status: false}
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
/* 未激活样式 */
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

/* 激活样式 */
.router-link-exact-active{
  color: #1e32b4 !important;
}

#navbar img{
  width: 32px;
  height: 32px;
  margin: 5px 0;
}

</style>
