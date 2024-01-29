import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/temp',
      name: 'temperature',
      component: () => import('../views/TempView.vue')
    },
    {
      path: '/co2',
      name: 'co2',
      component: () => import('../views/CO2View.vue')
    },
    {
      path: '/metan',
      name: 'metan',
      component: () => import('../views/MetanView.vue')
    },
    {
      path: '/no2',
      name: 'no2',
      component: () => import('../views/NO2View.vue')
    },
    {
      path: '/ice',
      name: 'ice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IceView.vue')
    }
  ]
})

export default router
