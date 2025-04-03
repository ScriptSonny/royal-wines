<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import Cart from './views/Cart.vue'

import { provide, ref } from 'vue';

const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
provide('isLoggedIn', isLoggedIn);

const cartItems = ref([]);

provide('cart', cartItems);
</script>

<template>
  <div class="app-grid">
  <MainHeader />

  <main class="main-content">
  <RouterView />
  </main>
  <MainFooter />
  </div>
</template>

<style scoped>
.app-grid {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header, footer {
  width: 100%;
}
</style>
