import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import cart from '@/views/cart'
import my from '@/views/my'
import all from '@/views/all'
import regist from '@/views/regist'
import login from '@/views/login'
import level2 from '@/components/level2'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: {name: 'home'}},
    {path: '/home', name: 'home', component: home},
    {path: '/cart', name: 'cart', component: cart},
    {path: '/my', name: 'my', component: my},
    {path: '/regist', name: 'regist', component: regist},
    {path: '/login', name: 'login', component: login},
    {
      path: '/all',
      redirect: '/all/父类1',
      name: 'all',
      component: all,
      children: [
        {path: '/all/:name', name: 'level2', component: level2}
      ]
    }
  ]
})
