<template>
  <div>
    <div class="breadcrumb-container">
      <div class="breadcrumb">
        <button @click="goBack" class="breadcrumb-back">
          <Icon icon="material-symbols:arrow-back-ios-new" />
          Terug
        </button>
        <router-link to="/" class="breadcrumb-link">Home</router-link>
        <Icon icon="material-symbols:navigate-next" width="20" color="#E59F01" />
        <span class="breadcrumb-current">
          {{ searchQuery ? `Zoekresultaten voor: ‘${searchQuery}’` : 'Overig' }}
        </span>
      </div>
    </div>

    <div class="others-container">

      <div v-if="searchQuery" class="search-results-heading">
        <h2>Zoekresultaten voor: ‘{{ searchQuery }}’</h2>
      </div>
      <div class="content-container">
        <div class="page-title">
          <h1>Overig</h1>
        </div>

        <ProductsHeader :filters-visible="filtersVisible" :results-count="filteredProducts.length"
          :is-mobile="windowWidth <= 768" @toggle-filters="toggleFilters" @sort="handleSort" />

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
import { useRouter, useRoute } from "vue-router";
import type { FilterOption } from "@/components/FiltersSidebar.vue";
import ProductsHeader from "../components/ProductsHeader.vue";
import FilterSidebar from "../components/FiltersSidebar.vue";
import ProductCard from "../components/ProductCard.vue";
import Pagination from "../components/ProductPagination.vue";
import { dummyProducts } from "@/data/dummyProducts";
import { watch } from "vue";

const router = useRouter();
const filtersVisible = ref(true);
const showMobileFilter = ref(false);
const windowWidth = ref(window.innerWidth);
const route = useRoute();
const searchQuery = ref(route.query.search?.toString().toLowerCase() || "");

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value > 768) {
    showMobileFilter.value = false;
    document.body.style.overflow = "";
  }
};

watch(() => route.query.search, (newSearch) => {
  searchQuery.value = newSearch?.toString().toLowerCase() || "";
});

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

function generateFilterOptions(products = dummyProducts) {
  const categorie: Record<string, number> = {};

  products.forEach((product) => {
    categorie[product.categorie] = (categorie[product.categorie] || 0) + 1;
  });
  return { categorie };
}

const { categorie } = generateFilterOptions();

const filters = ref<FilterOption[]>([
  { key: "categorie", title: "Categorie", type: "checkbox", options: categorie, modelValue: [] },
  { key: "price", title: "price", type: "range", modelValue: [0, 799], min: 0, max: 799 },
]);

const handleFilterUpdate = (updated: FilterOption[]) => {
  filters.value = updated;
};

const filteredProducts = computed(() => {
  return allProducts.value.filter((product) => {
    if (searchQuery.value && !product.title.toLowerCase().includes(searchQuery.value)) return false;

    const priceFilter = filters.value.find(f => f.key === "price")!;
    const [minprice, maxprice] = priceFilter.modelValue as [number, number];
    if (product.price < minprice || product.price > maxprice) return false;

    const categorieFilter = filters.value.find(f => f.key === "categorie")!;
    const categorieën = categorieFilter.modelValue as string[];
    if (categorieën.length && !categorieën.includes(product.categorie)) return false;

    return true;
  });
});

const allProducts = ref(dummyProducts.filter(product => product.categorie !== 'Wijn'));

const currentPage = ref(1);
const itemsPerPage = computed(() => (filtersVisible.value && windowWidth.value > 768 ? 8 : 12));
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredProducts.value.slice(start, start + itemsPerPage.value);
});
const handlePageChange = (page: number) => {
  currentPage.value = page;
};

const handleSort = (option: string) => {
  const sorted = [...allProducts.value]; // kopie maken zodat reactiviteit behouden blijft

  switch (option) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  allProducts.value = sorted;
  currentPage.value = 1; // reset naar 1e pagina
}
</script>

<style scoped>
.others-container {
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

.search-results-heading {
  padding: 10px 0;
  margin: 0 20px;
}

.search-results-heading h2 {
  font-size: 20px;
  font-weight: bold;
  color: #5A2D2E;
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
  .others-container {
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
