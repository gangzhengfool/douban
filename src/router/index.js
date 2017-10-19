import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '../components/Hellovue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/world',
      name: 'world',
      component: HelloWorld
    },
     {
      path: '/vue',
      name: 'vue',
      component: HelloVue
    }
  ]
})
