<template>
  <footer id="navbar">
        <a :href=item.href v-for="item in items" :key="item.content">
          <img :src=item.src :alt=item.content>
          {{item.content}}
        </a>
  </footer>
</template>

<script>
var data = {
  items: [
    {content: '首页', href: '#', src: '../../static/home_light.png'},
    {content: '分类', href: '#', src: '../../static/list.png'},
    {content: '购物车', href: '#', src: '../../static/cart_light.png'},
    {content: '个人中心', href: '#', src: '../../static/my_light.png'}
  ]

}
export default {
  data () {
    return data
  },
  name: 'navbar',
  methods: {},
  components: {}
}
</script>

<style>

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
  color: black;
  text-align: center;
  height: 60px;
  width: 90px;
  text-decoration: none;
  font-size: 5px;
}
#navbar img{
  width: 32px;
  height: 32px;
  margin: 5px 0;
}

</style>
