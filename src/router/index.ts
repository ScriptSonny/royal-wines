import ContactForm from '@/views/ContactForm.vue';
import HomepageView from '@/views/HomepageView.vue';
import LinksPage from '@/views/LinksPage.vue';
import ShoppingBasket from '@/views/ShoppingBasket.vue';
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
      path: '/contact',
      name: 'Contact',
      component: ContactForm
    },
    {
      path: '/links',
      name: 'Links',
      component: LinksPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingBasket
    },
    {
      path: '/wines',
      name: 'Wines',
      component: WinepageView
    }
  ]
});

export default router
