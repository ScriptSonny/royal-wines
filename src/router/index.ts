import HomepageView from '@/views/HomepageView.vue';
import WinepageView from '@/views/WinepageView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomepageView
    },
    {
      path: '/wines',
      name: 'Wines',
      component: WinepageView
    }
  ]
});

export default router
