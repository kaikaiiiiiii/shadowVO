import Vue from 'vue'
import Router from 'vue-router'
import storyboard from '@/components/storyboard.vue'
import charboard from '@/components/charactor.vue'
import musicboard from '@/components/music.vue'
import videoboard from '@/components/video.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: "/vojp/cn/story"},
    {path: '/:volang/:textlang/story', component: storyboard,props: true},
    {path: '/:volang/:textlang/charactor', component: charboard,props: true},
    {path: '/:volang/:textlang/music', component: musicboard,props: true},
    {path: '/:volang/:textlang/video', component: videoboard,props: true},
  ]
})
