<template>
  <div class="product-card">
    <img :src="image" alt="Product image" class="product-image" />

    <div class="product-info">
      <h3>{{ title }}</h3>
      <p class="volume">{{ volume }} cl</p>
      <p class="price">{{ price }}</p>
      <div class="product-actions">
        <button class="info-btn">INFO</button>
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

defineProps({
  title: String,
  price: String,
  volume: Number,
  image: {
    type: String,
  }
});
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
}

.product-image {
  width: 100px;
  height: 100%;
  object-fit: contain;
}

.product-info {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-info h3 {
  color: #5A2D2E;
  font-size: 20px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
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

.product-actions {
  display: flex;
  gap: 10px;
}

.product-actions button {
  flex: 1;
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
  background-color: white;
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
</style>
