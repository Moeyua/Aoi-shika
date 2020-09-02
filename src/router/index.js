import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import cart from '@/views/cart'
import my from '@/views/my'
import regist from '@/views/regist'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/cart', name: 'cart', component: cart},
    {path: '/my', name: 'my', component: my},
    {path: '/regist', name: 'regist', component: regist},
    {path: '/login', name: 'login', component: login}
  ]
})
