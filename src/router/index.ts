import ChristmasPackView from '@/views/ChristmasPackView.vue';
import HomepageView from '@/views/HomepageView.vue';
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
      path: '/',
      name: 'Kerstpakketten',
      component: ChristmasPackView
    }
  ]
});

export default router
