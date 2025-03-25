import { createRouter, createWebHistory } from 'vue-router'
import ChristmasPackView from '@/views/ChristmasPackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/kerstpakketten', 
      component: ChristmasPackView,
    }
  ],
})

export default router
