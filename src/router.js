import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './views/Index'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: 'DekCom Mini Camp VI Jigsaw!'
      }
    },
    // {
    //   path: '/controller',
    //   name: 'Controller',
    //   component: Controller,
    //   meta: {
    //     title: 'IT3K Stopwatch Controller'
    //   }
    // }
  ]
})
