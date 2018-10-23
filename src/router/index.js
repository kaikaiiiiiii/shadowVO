import Vue from 'vue'
import Router from 'vue-router'
import storyboard from '@/components/storyboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: storyboard
    }
  ]
})
