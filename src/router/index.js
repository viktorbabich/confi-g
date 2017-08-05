import Vue from 'vue'
import Router from 'vue-router'
import Config from '@/components/Config'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Config',
      name: 'Config',
      component: Config
    }
  ]
})
