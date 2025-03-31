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
        <span class="breadcrumb-current">Kerstpakketten</span>
      </div>
    </div>

    <div class="kerstpakketten-container">
      <div class="content-container">
        <div class="page-title">
          <h1>Kerstpakketten</h1>
        </div>

        <div class="top-bar">
          <div class="contact-info">
            <p>
              Voor de prijs-bestellijst kunt u een e-mail sturen aan
              <a href="mailto:verkoop@royalwinesanddrinks.nl">verkoop@royalwinesanddrinks.nl</a>
              of via het <a href="#">contactformulier</a>.
            </p>
          </div>

          <ProductsHeader :filters-visible="filtersVisible" :results-count="products.length"
            :is-mobile="windowWidth <= 768" :show-filter-toggle="false" @sort="handleSort" :sort-options="[
              { label: 'Productnaam: A - Z', value: 'name-asc' },
              { label: 'Productnaam: Z - A', value: 'name-desc' }
            ]" />
        </div>

        <div class="products-layout">
          <!-- Producten -->
          <div class="products-container">
            <div class="products-grid">
              <div class="product-card" v-for="(product, index) in paginatedProducts" :key="index">
                <img :src="product.image" :alt="product.title" class="product-img" />
                <h3>{{ product.title }}</h3>
                <router-link :to="`/product-info/${encodeURIComponent(product.title)}`" class="info-btn">
                  INFO
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <Pagination :total-pages="Math.ceil(products.length / itemsPerPage)" :current-page="currentPage"
          @page-change="handlePageChange" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import ProductsHeader from "../components/ProductsHeader.vue";
import Pagination from "../components/ProductPagination.vue";
import PackImage from '@/assets/kerstpakket_image1.jpg';

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

const goBack = () => router.back();

const products = ref([
  {
    title: 'Eco-expeditie',
    image: PackImage,
    description: 'Een duurzaam pakket met koffie, thee, chocolade en verantwoorde snacks.',
    categorie: 'Kerst'
  },
  {
    title: 'Feestnummer',
    image: PackImage,
    description: 'Een sprankelend feestpakket boordevol borrelhapjes en feestelijke drankjes.',
    categorie: 'Kerst'
  },
  {
    title: 'España olé',
    image: PackImage,
    description: 'Een Spaans geïnspireerd pakket met tapas, olijven en een vleugje fiesta.',
    categorie: 'Kerst'
  },
  {
    title: "ff 'n bakkie",
    image: PackImage,
    description: 'Voor de koffieliefhebber: luxe bonen, koekjes en een mok om van te genieten.',
    categorie: 'Kerst'
  },
  {
    title: 'Theemoment',
    image: PackImage,
    description: 'Een rustgevend theepakket met diverse smaken, honing en iets lekkers erbij.',
    categorie: 'Kerst'
  },
  {
    title: 'Noodgeval',
    image: PackImage,
    description: 'Een grappig overlevingspakket vol snacks en drankjes voor onverwachte situaties.',
    categorie: 'Kerst'
  },
  {
    title: 'Elegance',
    image: PackImage,
    description: 'Een stijlvol pakket met verfijnde producten, perfect voor een chique kerst.',
    categorie: 'Kerst'
  },
  {
    title: 'Grillige oosters',
    image: PackImage,
    description: 'Een kruidig en exotisch pakket met Aziatische sauzen, snacks en recepten.',
    categorie: 'Kerst'
  },
  {
    title: 'Soepie!',
    image: PackImage,
    description: 'Een warm pakket vol soepen, toastjes en comfortfood voor koude dagen.',
    categorie: 'Kerst'
  }
]);

const currentPage = ref(1);
const itemsPerPage = 12;
const handlePageChange = (page: number) => {
  currentPage.value = page;
};

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(start, start + itemsPerPage);
});

const handleSort = (option: string) => {
  const sorted = [...products.value];

  switch (option) {
    case 'name-asc':
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  products.value = sorted;
  currentPage.value = 1; // reset naar 1e pagina
}
</script>

<style scoped>
.kerstpakketten-container {
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

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 20px;
}

.contact-info {
  flex: 1;
  min-width: 250px;
  max-width: 500px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: #FFF0CA;
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-img {
  max-height: 150px;
  margin-bottom: 1rem;
}

.info-btn {
  margin-top: 4px;
  display: inline-block;
  padding: 4px 16px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: #E59F01;
}

.info-btn:hover {
  background-color: #B8860B;
}

a {
  color: #B8860B;
}

@media screen and (max-width: 768px) {
  .products-layout {
    align-items: flex-start;
  }

  .breadcrumb {
    justify-content: center;
  }

  .top-bar {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .top-bar>* {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .kerstpakketten-container {
    width: 100%;
    max-width: none;
  }

  .breadcrumb {
    width: 60%;
  }

  .content-container {
    padding: 0 10px;
  }
}
</style>
