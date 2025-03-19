<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <MainHeader />

  <RouterView />
</template>

<style scoped>
header {
  max-width: none;
  width: 100%;
}
</style>
