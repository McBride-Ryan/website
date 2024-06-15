import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
const api = 'api'
const version = 'v1'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: `/${api}/${version}`,
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }, 
    {
      path: `/${api}/${version}/quarterbacks`,
      name: 'quarterbacks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NFL/Quarterbacks.vue')
    }, 
  ]
})

export default router
