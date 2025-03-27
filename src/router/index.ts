import ChristmasPackView from '@/views/ChristmasPackView.vue';
import HomepageView from '@/views/HomepageView.vue';
import OtherpageView from '@/views/OtherpageView.vue';
import SalespageView from '@/views/SalespageView.vue';
import SearchResultsView from '@/views/SearchResultsView.vue';
import WinepageView from '@/views/WinepageView.vue';
import LoginView from '@/views/LoginView.vue';
import ContactForm from '@/views/ContactForm.vue';
import LinksPage from '@/views/LinksPage.vue';
import ShoppingBasket from '@/views/ShoppingBasket.vue';

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
    },
    {
      path: '/other',
      name: 'Other',
      component: OtherpageView
    },
    {
      path: '/search',
      name: 'SearchResults',
      component: SearchResultsView
    },
    {
      path: '/sales',
      name: 'Sales',
      component: SalespageView
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
