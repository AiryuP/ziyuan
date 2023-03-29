import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/pages/first/index.vue')
        },
        {
          path: '/source',
          name: 'source',
          component: () => import('../views/pages/source/index.vue')
        }
      ],
      redirect: '/index'
    },



    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }



  ]
})

export default router
