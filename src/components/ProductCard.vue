<template>
  <div class="product-card">
    <div v-if="salesPrice" class="sale-label">
      SALE
    </div>
    <img :src="image" alt="Product image" class="product-image" />

    <div class="product-info">
      <h3>{{ title }}</h3>
      <p class="volume">{{ volume }} cl</p>
      <!-- Alleen tonen als ingelogd -->
      <p v-if="isLoggedIn">
        <span v-if="salesPrice" class="price">
          <span class="old-price">€ {{ price.toFixed(2) }}</span>
          <span class="discounted-price">€ {{ salesPrice.toFixed(2) }}</span>
        </span>
        <span v-else class="price">
          € {{ price.toFixed(2) }}
        </span>
      </p>

      <div class="product-actions">
        <router-link :to="`/product-info/${encodeURIComponent(title)}`" class="info-btn">
          INFO
        </router-link>
        <button class="add-btn" @click="openOverlay">
          <Icon icon="mdi:cart" />
          KIES
        </button>
      </div>
    </div>
  </div>

  <!-- Besteloverlay -->
  <div v-if="showOverlay" class="overlay-backdrop" @click.self="closeOverlay">
    <div class="overlay-order">
      <button class="overlay-close" @click="closeOverlay">×</button>
      <div class="overlay-content">
        <img :src="image" class="overlay-img" />
        <div class="overlay-info">
          <h2>{{ title }}</h2>
          <p class="volume">{{ volume }} cl</p>
          <p class="verpakking">Per verpakking: 6 ds</p>

          <div class="aantal-container">
            <span>Aantal:</span>
            <button @click="decreaseQty">-</button>
            <input type="number" v-model.number="quantity" min="1" class="aantal-input" />
            <button @click="increaseQty">+</button>
          </div>

          <p class="prijs" v-if="isLoggedIn">€ {{ totalPrice.toFixed(2) }}</p>
          <p class="placeholder" v-if="!isLoggedIn">-</p>
          <button class="bestel-btn" @click="addToCart">BESTELLEN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { inject } from 'vue';
import type { Ref } from 'vue';

interface ProductCardProps {
  title: string;
  volume: number;
  image: string;
  price: number;
  salesPrice?: number;
}

const isLoggedIn = inject('isLoggedIn') as Ref<boolean>;
const showOverlay = ref(false);
const quantity = ref(1);

const cart = inject('cart') as Ref<any[]>;

const props = defineProps<ProductCardProps>();

const increaseQty = () => quantity.value++;
const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--;
};

const openOverlay = () => {
  showOverlay.value = true;
  quantity.value = 1;
};

const closeOverlay = () => {
  showOverlay.value = false;
};

const addToCart = () => {
  const productToAdd = {
    id: props.title,
    name: props.title,
    variant: "",
    quantity: quantity.value,
    perPack: 6,
    price: props.salesPrice ?? props.price,
    image: props.image,
  };

  cart.value.push(productToAdd);

  closeOverlay();
};

const totalPrice = computed(() => {
  const base = props.salesPrice ?? props.price;
  return base * quantity.value;
});

</script>

<style scoped>
/* Overlay styles */
.overlay-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.overlay-order {
  background: linear-gradient(to bottom, #FFF0CA 38%, #F8F3E6 100%);
  padding: 2rem;
  max-width: 450px;
  width: 95%;
  border: 2px solid #663333;
  position: relative;
  display: flex;
  flex-direction: column;
}

.overlay-close {
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 28px;
  background: none;
  border: none;
  color: #663333;
  cursor: pointer;
}

.overlay-content {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.overlay-img {
  height: 220px;
  max-width: 140px;
  object-fit: cover;
  flex: 1;
}

.overlay-info {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #663333;
}

.overlay-info h2 {
  font-size: 20px;
  color: #5A2D2E;
  margin-bottom: 4px;
}

.volume,
.verpakking {
  font-size: 14px;
  margin-bottom: 8px;
}

.aantal-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 12px 0;
}

.aantal-container button {
  width: 32px;
  height: 32px;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid #663333;
  color: #663333;
  cursor: pointer;
}

.aantal-container button:hover {
  background-color: #663333;
  color: #F8F3E6;
}

.aantal-input {
  width: 48px;
  height: 32px;
  text-align: center;
  font-size: 16px;
  border: 2px solid #663333;
  background: transparent;
  color: #663333;
}

.aantal-input::-webkit-inner-spin-button,
.aantal-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.aantal-input[type=number] {
  -moz-appearance: textfield;
  appearance: none;
}

.placeholder {
  color: transparent;
  visibility: hidden;
}

.prijs {
  font-size: 24px;
  font-weight: bold;
  color: #B02E2E;
  margin-bottom: 12px;
}

.bestel-btn {
  align-self: flex-end;
  background-color: #E59F01;
  color: white;
  border: none;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
}

.bestel-btn:hover {
  background-color: #B8860B;
}

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
