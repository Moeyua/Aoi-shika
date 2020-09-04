<template>
<div id="all">
    <search></search>
    <ul id="li1">
      <li v-for="item in li1" :key="item.name">
        <router-link
          :to="{name: 'level2',
          params: { name: item.name, li2: item.li2 }}">
          {{item.name}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
    <navbar name="all"></navbar>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import search from '../components/search'
import lv2 from '../components/level2'
var li2 = [
  {name: '子类1', href: '#', src: '#'},
  {name: '子类2', href: '#', src: '#'},
  {name: '子类3', href: '#', src: '#'},
  {name: '子类4', href: '#', src: '#'},
  {name: '子类5', href: '#', src: '#'},
  {name: '子类6', href: '#', src: '#'},
  {name: '子类7', href: '#', src: '#'},
  {name: '子类8', href: '#', src: '#'},
  {name: '子类9', href: '#', src: '#'},
  {name: '子类10', href: '#', src: '#'}
]
export default {
  data: function () {
    return {
      li1: [
        {name: '父类1', li2: li2},
        {name: '父类2', li2: li2},
        {name: '父类3', li2: li2},
        {name: '父类4', li2: li2},
        {name: '父类5', li2: li2},
        {name: '父类6', li2: li2},
        {name: '父类7', li2: li2},
        {name: '父类8', li2: li2},
        {name: '父类9', li2: li2}
      ]
    }
  },
  components: {
    navbar,
    search,
    lv2
  }
}
</script>

<style scoped>
#all{
  height: 100%;
}
#li1{
  position: fixed;
  width: 120px;
  height: calc(100% - 127px);
  top: 65px;
  left: 0px;
  background: rgb(191, 191, 240);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #666666;
  display: block;
  line-height: 50px;
}
</style>
