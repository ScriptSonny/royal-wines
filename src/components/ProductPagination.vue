<template>
  <div class="pagination">
    <button class="page-btn" @click="$emit('page-change', currentPage - 1)" :disabled="currentPage === 1">
      <Icon icon="material-symbols:keyboard-arrow-left" />
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="page-btn"
      :class="{ active: page === currentPage }"
      @click="$emit('page-change', page)"
    >
      {{ page }}
    </button>

    <button class="page-btn" @click="$emit('page-change', currentPage + 1)" :disabled="currentPage === totalPages">
      <Icon icon="material-symbols:keyboard-arrow-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

defineEmits(['page-change']);
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  gap: 5px;
}

.page-btn {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E5E5E5;
  background-color: white;
  cursor: pointer;
}

.page-btn.active {
  background-color: #E59F01;
  color: white;
  border-color: #E59F01;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
