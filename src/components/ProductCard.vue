<template>
  <div class="product-card">
    <div v-if="salesPrice" class="sale-label">
      SALE
    </div>
    <img :src="image" alt="Product image" class="product-image" />

    <div class="product-info">
      <h3>{{ title }}</h3>
      <p class="volume">{{ volume }} cl</p>
      <p class="price" v-if="salesPrice">
        <span class="old-price">€ {{ price.toFixed(2) }}</span>
        <span class="discounted-price">€ {{ salesPrice.toFixed(2) }}</span>
      </p>
      <p class="price" v-else>
        € {{ price.toFixed(2) }}
      </p>
      <div class="product-actions">
        <router-link :to="`/product-info/${encodeURIComponent(title)}`" class="info-btn">
          INFO
        </router-link>
        <button class="add-btn">
          <Icon icon="mdi:cart" />
          KIES
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface ProductCardProps {
  title: string;
  volume: number;
  image: string;
  price: number;
  salesPrice?: number;
}

defineProps<ProductCardProps>();
</script>

<style scoped>
.product-card {
  display: flex;
  height: 150px;
  border: 1px solid #E5E5E5;
  padding: 10px;
  gap: 15px;
  background: linear-gradient(180deg, #FFF0CA 0%, #F8F3E6 100%);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  position: relative;
}

.sale-label {
  position: absolute;
  top: 10px;
  left: -10px;
  background-color: #B02E2E;
  color: white;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100px;
  height: 100%;
  object-fit: contain;
}

.product-info {
  flex: 1;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-info h3 {
  color: #5A2D2E;
  font-size: 16px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  line-height: 1.2;
}

.volume {
  font-size: 13px;
  color: #333;
  font-weight: bold;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #B02E2E;
  margin: 4px 0;
}

.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 6px;
}

.discounted-price {
  color: #B02E2E;
  font-weight: bold;
}


.product-actions {
  position: absolute;
  right: 5px;
  bottom: 10px;
  display: flex;
  gap: 10px;
}

.product-actions button {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}

.info-btn {
  text-align: center;
  width: 80px;
  background-color: transparent;
  border: 2px solid #E59F01;
  color: #E59F01;
}

.info-btn:hover {
  background-color: #E59F01;
  color: white;
}

.add-btn {
  background-color: #E59F01;
  border: none;
  color: white;
}

.add-btn:hover {
  background-color: #B8860B;
}

@media (max-width: 768px) {
  .product-image {
    height: 140px;
    object-fit: contain;
  }

  .price {
    margin-top: 30px;
  }
}
</style>
