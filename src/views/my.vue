<template>
  <div id="my">
    <router-link to="/my/comment" id="comment"><img :src="comment"></router-link>
    <div id="profile">
      <router-link to="/login">
        <img :src="srcHead">
      </router-link>
      <span>{{name}}</span>
    </div>
    <ul id="list">
      <router-link :to="{ path: li.href }" v-for="li in lists" :key="li.id" >
        <img :src="src(li.id)" :alt="li.title">
        <img :src="src('right')" style="position: absolute;right:20px;">
        {{li.title}}
      </router-link>
    </ul>
    <navbar name='my'></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
var src = function (name) {
  return '../static/icon/' + name + '.png?time=' + new Date().getTime()
}
var data = {
  name: 'Evod Moeyua',
  lists: [
    {title: '我的订单', href: '#', id: 'form'},
    {title: '待付款', href: '#', id: 'pay'},
    {title: '待发货', href: '#', id: 'send'},
    {title: '待收货', href: '#', id: 'deliver'},
    {title: '优惠券', href: '#', id: 'ticket'}
  ],
  comment: '../static/icon/comment.png?time=' + new Date().getTime(),
  srcHead: '../static/head/kumiko1.jpg?time=' + new Date().getTime()
}
export default {
  data () {
    return data
  },
  name: 'my',
  methods: {src},
  components: {
    navbar: navbar
  }
}
</script>

<style scoped>

#my {
  margin: 0;
  padding: 0;
  top: 0;
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 0;
  background: #1c2fa8;
  color: #eeeeee;
}
#profile{
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  /* 使用计算属性时必须在运算符两边加空格隔开 */
  top: calc((50% - 300px)/2);
  left: calc((100% - 300px)/2);
}
#my #profile img{
  width: 100px;
  height: 100px;
  border-radius: 80px;
  background: #1c2fa8;
  box-shadow:  20px 20px 60px #18288f, -20px -20px 60px #2036c1;
}
#my #profile a{
  text-decoration: none;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 80px;
  margin: 20px;
  box-shadow:  20px 20px 60px #18288f, -20px -20px 60px #2036c1;
}
#my #comment{
  display: block;
  position: fixed;
  right: 0;
  top:0;
  width: 32px;
  height: 32px;
  margin: 20px;
}
#my #comment img{
  width: 32px;
  height: 32px;
  /* box-shadow: inset 15px 15px 30px #c1c3c8,inset -15px -15px 30px #ffffff; */

}
#my span{
  font-size: 20px;
  font-weight: 700;
  width: 100%;
}
#list{
  position: absolute;
  margin: 0 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  width: 95%;
  padding: 40px 0 60px 0;
  border-radius: 30px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #18288f, -20px -20px 60px #2036c1;
}
#list a{
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;
  font-weight: 700;
  color: #666666;
}
#list img{
  margin-left: 50px;
  margin-right: 10px;
  width: 32px;
  height: 32px;
}

</style>
