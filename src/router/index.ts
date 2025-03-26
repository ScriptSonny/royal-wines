import ContactForm from '@/views/ContactForm.vue';
import HomepageView from '@/views/HomepageView.vue';
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
      Component: ContactForm
    },
    {
      path: '/links',
      name: 'Links',
      Component: LinksPage
    },
    {
      path: '/shoppingBasket',
      name: 'Shoppingbasket',
      Component: ShoppingBasket
    }
  ]
});

export default router
