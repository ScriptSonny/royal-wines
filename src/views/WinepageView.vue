<template>
  <div>
    <!-- Breadcrumb -->
    <div class="breadcrumb-container">
      <div class="breadcrumb">
        <button @click="goBack" class="breadcrumb-back">
          <Icon icon="material-symbols:arrow-back-ios-new" />
          Terug
        </button>
        <router-link to="/" class="breadcrumb-link">Home</router-link>
        <Icon icon="material-symbols:navigate-next" width="20" color="#E59F01" />
        <span class="breadcrumb-current">Wijnen</span>
      </div>
    </div>

    <div class="wines-container">
      <div class="content-container">
        <div class="page-title">
          <h1>Wijnen</h1>
        </div>

        <ProductsHeader :filters-visible="filtersVisible" :results-count="265" :is-mobile="windowWidth <= 768"
          @toggle-filters="toggleFilters" />

        <div class="products-layout">
          <!-- Desktop filter -->
          <FilterSidebar v-if="filtersVisible && windowWidth > 768" :filters="filters"
            @update:filters="handleFilterUpdate" />

          <!-- Mobiele filter overlay -->
          <transition name="slide-left">
            <div v-if="showMobileFilter && windowWidth <= 768" class="mobile-filter-overlay">
              <FilterSidebar :filters="filters" @update:filters="handleFilterUpdate" />
            </div>
          </transition>

          <!-- Producten -->
          <div class="products-container">
            <div class="products-grid">
              <ProductCard v-for="(product, index) in paginatedProducts" :key="index" :title="product.title"
                :price="product.price" :volume="product.volume" :image="product.image" />
            </div>
          </div>
        </div>

        <Pagination :total-pages="Math.ceil(allProducts.length / itemsPerPage)" :current-page="currentPage"
          @page-change="handlePageChange" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import type { FilterOption } from "@/components/FiltersSidebar.vue";
import ProductsHeader from "../components/ProductsHeader.vue";
import FilterSidebar from "../components/FiltersSidebar.vue";
import ProductCard from "../components/ProductCard.vue";
import Pagination from "../components/ProductPagination.vue";
import wineImage1 from "@/assets/wine_image1.png";

const router = useRouter();
const filtersVisible = ref(true);
const showMobileFilter = ref(false);
const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value > 768) {
    showMobileFilter.value = false;
    document.body.style.overflow = "";
  }
};

onMounted(() => window.addEventListener("resize", updateWindowWidth));
onUnmounted(() => window.removeEventListener("resize", updateWindowWidth));

const toggleFilters = () => {
  if (windowWidth.value <= 768) {
    showMobileFilter.value = !showMobileFilter.value;
    document.body.style.overflow = showMobileFilter.value ? "hidden" : "";
  } else {
    filtersVisible.value = !filtersVisible.value;
  }
};

const goBack = () => router.back();

const filters = ref<FilterOption[]>([
  { key: "price", title: "Prijs", type: "range", modelValue: [0, 799], min: 0, max: 799 },
  {
    key: "type", title: "Type", type: "checkbox",
    options: { Rood: 100, Wit: 150, Rosé: 80 }, modelValue: []
  },
  {
    key: "grape", title: "Druivensoort", type: "checkbox",
    options: { Chardonnay: 40, Merlot: 50, Sauvignon: 30 }, modelValue: []
  },
  {
    key: "country", title: "Land", type: "radio",
    options: { Frankrijk: 0, Italië: 0, Spanje: 0, Duitsland: 0 }, modelValue: ""
  },
  {
    key: "region", title: "Streek", type: "checkbox",
    options: { Bordeaux: 12, Piemonte: 8, Rioja: 6 }, modelValue: []
  },
  {
    key: "advice", title: "Serveer advies", type: "checkbox",
    options: { Vlees: 23, Vis: 17, Aperitief: 10 }, modelValue: []
  }
]);

const handleFilterUpdate = (updated: FilterOption[]) => {
  filters.value = updated;
};

const allProducts = ref(
  Array.from({ length: 20 }, (_, i) => ({
    title: `Wijn ${i + 1}`,
    price: `€ ${(8 + i).toFixed(2)}`,
    volume: 75,
    image: wineImage1
  }))
);

const currentPage = ref(1);
const itemsPerPage = computed(() => (filtersVisible.value && windowWidth.value > 768 ? 8 : 12));
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return allProducts.value.slice(start, start + itemsPerPage.value);
});
const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>

<style scoped>
.wines-container {
  width: 980px;
  margin: 0 auto;
}

.content-container {
  padding: 0 20px;
}

.breadcrumb-container {
  width: 100%;
  background-color: #f9f4ed;
}

.breadcrumb {
  max-width: 948px;
  margin: 0 auto;
  padding: 14px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  margin-bottom: 20px;
}

.breadcrumb-back {
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid rgba(102, 51, 51, 0.2);
  background-color: transparent;
  color: #663333;
  font-weight: bold;
  padding: 6px;
  margin-right: 12px;
  cursor: pointer;
}

.breadcrumb-link {
  text-decoration: none;
  color: #5A2D2E;
  font-weight: bold;
}

.breadcrumb-current {
  color: rgba(102, 51, 51, 0.75);
  font-weight: bold;
}

.page-title {
  margin: 20px 0;
}

.page-title h1 {
  color: #5A2D2E;
  font-size: 24px;
  font-weight: bold;
}

.products-layout {
  display: flex;
  gap: 70px;
}

.products-container {
  flex: 1;
}

.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

.products-grid>* {
  flex: 0 0 300px;
}

/* Mobile filter overlay */
.mobile-filter-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 999;
  overflow-y: auto;
  padding: 20px;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.4s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-left-enter-to,
.slide-left-leave-from {
  transform: translateX(0%);
}

@media screen and (max-width: 768px) {
  .products-layout {
    align-items: flex-start;
  }

  .breadcrumb {
    justify-content: center;
  }
}

@media screen and (max-width: 480px) {
  .wines-container {
    width: 100%;
    max-width: none;
  }

  .breadcrumb {
    width: 60%;
  }

  .content-container {
    padding: 0 10px;
  }

  .products-grid {
    flex-direction: column;
    align-items: center;
  }

  .products-grid>* {
    flex: 0 0 100%;
    max-width: 300px;
    width: 100%;
  }

  .mobile-filter-overlay {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    height: calc(100vh - 100px);
    background: white;
    z-index: 999;
    overflow-y: auto;
    padding: 20px;
  }
}
</style>
