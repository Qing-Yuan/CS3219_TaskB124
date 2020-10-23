import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Get from '@/components/Get'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/get',
      name: 'get',
      component: Get
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    }
  ]
})
