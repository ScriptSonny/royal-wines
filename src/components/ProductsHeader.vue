<template>
  <div class="products-header">
    <div class="left-side">
      <button v-if="showFilterToggle" @click="$emit('toggle-filters')" class="fixed-filter-btn">
        <Icon :icon="isMobile ? 'material-symbols:filter-list' : 'material-symbols:filter-alt'" class="filter-icon" />
        <span v-if="!isMobile" class="desktop-label">
          {{ filtersVisible ? "Verberg filter" : "Toon filter" }}
        </span>
      </button>
    </div>

    <div class="right-side">
      <span class="results-count">{{ resultsCount }} resultaten</span>
      <div class="sort-dropdown">
        <button class="filter-btn">
          Sorteer op
          <Icon icon="material-symbols:keyboard-arrow-down" />
        </button>
        <div class="sort-menu">
          <button v-for="option in sortOptions" :key="option.value" class="sort-option" @click="$emit('sort', option.value)">
            {{ option.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps({
  filtersVisible: Boolean,
  resultsCount: Number,
  isMobile: Boolean,
  showFilterToggle: {
    type: Boolean,
    default: true
  },
  sortOptions: {
    type: Array as () => { label: string; value: string }[],
    default: () => [
      { label: 'Prijs: laag - hoog', value: 'price-asc' },
      { label: 'Prijs: hoog - laag', value: 'price-desc' },
      { label: 'Productnaam: A - Z', value: 'name-asc' },
      { label: 'Productnaam: Z - A', value: 'name-desc' }
    ]
  }
});

defineEmits(['toggle-filters', 'sort']);
</script>

<style scoped>
.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.right-side {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  border: 2px solid #E59F01;
  background-color: transparent;
  color: #E59F01;
  cursor: pointer;
  font-weight: bold;
}

.fixed-filter-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;
  border: 2px solid #E59F01;
  background-color: transparent;
  color: #E59F01;
  cursor: pointer;
}

.fixed-filter-btn span {
  font-weight: bold;
}

.filter-btn:hover {
  color: white;
  background-color: #E59F01;
}

.fixed-filter-btn:hover {
  color: white;
  background-color: #E59F01;
}

.results-count {
  color: #5A2D2E;
  font-weight: bold;
}

.sort-dropdown {
  position: relative;
}

.sort-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  border: 1px solid #E59F01;
  background-color: white;
  color: #5A2D2E;
  cursor: pointer;
}

.sort-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #E5E5E5;
  z-index: 10;
  min-width: 200px;
}

.sort-dropdown:hover .sort-menu {
  display: block;
}

.sort-option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.sort-option:hover {
  background-color: #f5f5f5;
}

.desktop-label {
  display: inline;
}

@media screen and (max-width: 768px) {
  .desktop-label {
    display: none;
  }

  .filter-btn {
    padding: 10px;
    width: 40px;
    justify-content: center;
  }

  .fixed-filter-btn {
    position: fixed;
    top: 32px;
    left: 12px;
    height: 40px;
    width: 40px;
    z-index: 1000;
    border: 2px solid #E59F01;
    background-color: transparent;
    color: #E59F01;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .filter-icon {
    width: 24px;
    height: 24px;
  }

  .fixed-filter-btn:hover {
    background-color: #E59F01;
    color: white;
  }

  .products-header {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .right-side {
    flex-direction: row;
    align-items: center;
  }

  .filter-btn {
    width: 120px;
  }
}
</style>
