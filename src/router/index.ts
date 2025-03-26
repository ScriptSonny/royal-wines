import ChristmasPackView from '@/views/ChristmasPackView.vue';
import HomepageView from '@/views/HomepageView.vue';
import LoginView from '@/views/LoginView.vue';
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
      path: '/kerstpakketten',
      name: 'Kerstpakketten',
      component: ChristmasPackView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
});

export default router
