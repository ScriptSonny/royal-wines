<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
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
  grid-template-rows: auto 1fr auto; /* Header auto, Content expands, Footer auto */
  min-height: 100vh;
}

.main-content {
  padding: 20px;
}
header, footer {
  width: 100%;
}
</style>
