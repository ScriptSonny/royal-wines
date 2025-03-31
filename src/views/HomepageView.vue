<template>
  <main class="home">
    <section class="hero">
      <h1>Uw partner in wijnen, bier en overige dranken</h1>
      <router-link to="/wines" class="cta-btn">ONTDEK ONZE COLLECTIE</router-link>
    </section>

    <section class="product-section">
      <div
        class="product-card"
        v-for="(product, index) in products"
        :key="product.id"
      >
        <div class="product-label">
          <Icon :icon="labelIcons[index]" width="16" style="margin-right: 4px;" />
          {{ labels[index] }}
        </div>
        <img :src="product.image" :alt="product.name" class="product-img" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.subtitle }}</p>
        <button class="btn">Bekijk wijn</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import wineImage from '@/assets/wine_view.png'
import { Icon } from '@iconify/vue'

const products = ref([
  {
    id: 1,
    name: 'Barros Porto',
    subtitle: 'Late Bottled Vintage',
    image: wineImage,
  },
  {
    id: 2,
    name: 'Barros Colheita',
    subtitle: '1979 Port Wijn',
    image: wineImage,
  },
  {
    id: 3,
    name: 'Barros Porto',
    subtitle: 'Late Bottled Vintage',
    image: wineImage,
  }
])

const labels = ['Aanbevolen', 'Exclusieve selectie', 'Bestseller']
const labelIcons = ['mdi:medal', 'material-symbols:wine-bar-rounded', 'material-symbols:star-rate-rounded'];
</script>

<style scoped>
.hero {
  height: 240px;
  background-image: url('@/assets/hero.png');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  margin-bottom: 3rem;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero h1 {
  color: #F3E9D8;
}

.cta-btn {
  display: inline-flex;
  border: 1px solid #F3E9D8;
  background-color: transparent;
  color: #F3E9D8;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
}

.cta-btn:hover {
  border: 1px solid #B89F7B;
  background-color: #B89F7B;
  color: #F3E9D8;
}

.product-section {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.product-card {
  background: linear-gradient(180deg, #FFF0CA 0%, #F8F3E6 100%);
  padding: 1.5rem;
  width: 250px;
  text-align: center;
  position: relative;
  margin: 60px 20px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-label {
  display: flex;
  align-items: center;
  position: absolute;
  background-color: #B8860B;
  top: 10px;
  left: -20px;
  color: white;
  font-size: 0.75rem;
  padding: 4px 8px;
  z-index: 3;
}

.product-img {
  height: 250px;
  object-fit: contain;
  margin-bottom: 1rem;
  margin-top: -60px;
  position: relative;
  z-index: 2;
}

.btn {
  margin-top: 1rem;
  background-color: #E59F01;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: #B8860B;
}
</style>
