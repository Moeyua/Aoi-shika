import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import my from '@/views/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
