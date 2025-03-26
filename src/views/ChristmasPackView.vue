<template>
    <main class="kerstpakketten">
      <h1>Kerstpakketten</h1>
      <section class="breadcrumb">
        <button class="back-btn">← Terug</button>
        <span>Home > Kerstpakketten</span>
      </section>

      <div class="contact-info">
        <p>
          Voor de prijs-bestellijst kunt u een e-mail sturen aan
          <a href="mailto:verkoop@royalwinesanddrinks.nl">verkoop@royalwinesanddrinks.nl</a>
          of via het <a href="#">contactformulier</a>.
        </p>
      </div>
  
      <div class="filter-section">
        <span>40 resultaten</span>
        <select>
          <option>Productnaam</option>
          <option>Prijs (laag - hoog)</option>
          <option>Prijs (hoog - laag)</option>
        </select>
      </div>
  
      <section class="product-section">
        <div
          class="product-card"
          v-for="product in products"
          :key="product.id"
        >
          <img :src="product.image" :alt="product.name" class="product-img" />
          <h3>{{ product.name }}</h3>
          <button class="info-btn">INFO</button>
          <button class="choose-btn">KIES</button>
        </div>
      </section>
  
      <div class="pagination">
        <button>&lt;</button>
        <span>Pagina 1</span>
        <button>&gt;</button>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';
  import PackImage from '@/assets/1.jpg'; 
  
  const products = ref([
    { id: 1, name: 'Eco-expeditie', image: PackImage },
    { id: 2, name: 'Feestnummer', image: PackImage },
    { id: 3, name: 'España olé', image: PackImage },
    { id: 4, name: "ff 'n bakkie", image: PackImage },
    { id: 5, name: 'Theemoment', image: PackImage },
    { id: 6, name: 'Noodgeval', image: PackImage },
    { id: 7, name: 'Elegance', image: PackImage },
    { id: 8, name: 'Grillige oosters', image: PackImage },
    { id: 9, name: 'Soepie!', image: PackImage }
  ]);
  </script>
  
  <style scoped>
  a {
    color:#B8860B;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .back-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 8px;
  }

  .contact-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .filter-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  select {
    padding: 8px;
  }
  
  .product-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 900px; /* 3 x 250px + gap */
    margin: 0 auto;
  }

  
  .product-card {
    background: #FFF0CA;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-img {
    max-height: 150px;
    margin-bottom: 1rem;
  }
  
  button {
    margin: 0.5rem;
    padding: 8px 16px;
    cursor: pointer;
    border: none;
    color: white;
  }
  
  .info-btn {
    background-color: #E59F01;
  }
  
  .choose-btn {
    background-color: #B8860B;
  }
  
  .pagination button {
    padding: 8px 16px;
    margin: 0 4px;
  }
  </style>
  