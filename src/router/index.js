import Vue from 'vue'
import Router from 'vue-router'
import storyboard from '@/components/storyboard.vue'
import charboard from '@/components/charactor.vue'
import musicboard from '@/components/music.vue'
import videoboard from '@/components/video.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: storyboard},
    {
      path: '/story', component: storyboard,},
    {path: '/charactor', component: charboard},
    {path: '/music', component: musicboard},
    {path: '/video', component: videoboard},
  ]
})
