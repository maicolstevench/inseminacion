import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/formanimals',
      name: 'Registro de Animales',
      component: () => import('../views/FormAnimals.vue'),
    },
    {
      path: '/lasttoday',
      name: 'Lo último de hoy',
      component: () => import('../views/LastToday.vue'),
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('../views/Components.vue'),
    },
    {
      path: '/dragon ball',
      name: 'Dragon Ball',
      component: () => import('../views/Dragon Ball.vue'),
    },
  ],
})

export default router
