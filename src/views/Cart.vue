<template>
    <div class="cart-container">
        <main class="cart">
            <h2>Winkelwagen</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Aantal</th>
                        <th>Per verpakking</th>
                        <th>Prijs</th>
                        <th>Subtotaal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cartItems" :key="item.id">
                        <td class="product">
                            <img :src="item.image" alt="Product image" />
                            <div>
                                <strong>{{ item.name }}</strong>
                                <p>{{ item.variant }}</p>
                            </div>
                        </td>
                        <td class="quantity">
                            <button @click="updateQuantity(index, -1)" :disabled="item.quantity <= 1">-</button>
                            <span>{{ item.quantity }}</span>
                            <button @click="updateQuantity(index, 1)">+</button>
                        </td>
                        <td>{{ item.perPack }}</td>
                        <td>€ {{ item.price.toFixed(2) }}</td>
                        <td>€ {{ (item.price * item.quantity).toFixed(2) }}</td>
                        <td>
                            <button class="delete-btn" @click="removeItem(index)">🗑</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="summary-container">
              <div class="cart-summary">
              <table class="custom-table">
                <thead class="custom-thead">
                  <tr>
                    <th class="custom-th">Aantal</th>
                    <th class="custom-th">Totaal</th>
                  </tr>
                </thead>
                <tbody class="custom-tbody">
                  <tr>
                    <td class="custom-td">{{ totalItems }}</td>
                    <td class="custom-td"> {{  totalPrice.toFixed(2) }}</td>
                  </tr>
                </tbody>
              </table>
                <button class="btn-order" @click="openOverlay">Bestellen</button>
              </div>
            </div>
        </main>
    </div>

    <!-- Besteloverlay -->
    <div v-if="showOverlay" class="overlay-backdrop" @click.self="closeOverlay">
      <div class="overlay-order">
        <button class="overlay-close" @click="closeOverlay">X</button>
        <div class="overlay-content">
          <h2>Bestelling is geplaatst</h2>
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { Ref } from "vue";
import { inject } from "vue";

const cartItems = inject('cart') as Ref<any[]>;
const showOverlay = ref(false);


const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0));
const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity * item.price, 0));

const updateQuantity = (index: number, change: number) => {
    cartItems.value[index].quantity += change;
};

const removeItem = (index: number) => {
    cartItems.value.splice(index, 1);
};

const getImageUrl = (imagePath: String) => new URL(`@/assets/${imagePath}`, import.meta.url).href;

const openOverlay = () => {
  showOverlay.value = true;
}

const closeOverlay = () => {
  showOverlay.value = false;
}

</script>

<style scoped>
.cart-container {
  max-width: 960px;
  margin: 0 auto;
}

.cart {
  margin-top: 20px;
}

.cart h2 {
  margin: 20px auto;
  color: #5A2D2E;
  font-size: 24px;
  font-weight: 600;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th
{
  font-weight: 600;
  font-size: 16px;
  color: #5A2D2E;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #66333367;
  font-weight: 500;
}

.product {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product strong {
  font-weight: 600;
  font-size: 16px;
}

.product p {
  font-weight: 500;
  font-size: 16px;
}

.product img {
  width: 54px;
  height: 86.79px;
  object-fit: contain;
}

.quantity button {
  border: 1px solid #E59F01;
  cursor: pointer;
  background-color: white;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

span {
  margin-left: 10px;
  margin-right: 10px;
}

.cart-summary {
  border: 1px solid #00000040;
  width: 274px;
  height: 202px;
  padding: 1rem;
  margin-top: 20px;
  text-align: center;
}

.custom-thead {
  color: #5A2D2E;
  font-weight: 600;
}

.custom-th {
  padding-bottom: 0.25rem;
}

.custom-th-line {
  text-align: center;
  padding: 0;
}

.line {
  border-top: 1px solid #5A2D2E;
}

.custom-tbody {
  color: black;
  font-weight: 500;
}

.custom-td {
  padding-top: 0.5rem;
}

.btn-order {
  width: 132px;
  height: 39px;
  background: #E59F01;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: white;
  padding: 8px 7px 8px 7px;
  margin-top: 20px;
  font-weight: 600;
}

.summary-container {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
}

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

.overlay-content h2 {
  font-size: 20px;
  color: #5A2D2E;
}

</style>