<template>
  <div v-if="product">
    <div class="breadcrumb-container">
      <div class="content-container">
        <div class="breadcrumb">
          <button class="breadcrumb-back" @click="goBack">
            <Icon icon="material-symbols:arrow-back-ios-new" />
            Terug
          </button>
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <Icon icon="material-symbols:navigate-next" width="20" color="#E59F01" />
          <router-link :to="product.categorie === 'Wijn' ? '/wines' : '/other'" class="breadcrumb-link">
            {{ product.categorie === 'Wijn' ? 'Wijnen' : 'Overig' }}
          </router-link>
          <Icon icon="material-symbols:navigate-next" width="20" color="#E59F01" />
          <span class="breadcrumb-current">{{ product.title }}</span>
        </div>

        <div class="product-container">
          <div class="product-image">
            <img :src="product.image" :alt="product.title" />
          </div>

          <div class="product-info">
            <h1>{{ product.title }}</h1>
            <h2>{{ product.volume }} cl</h2>

            <button class="add-btn" @click="openAddOverlay">
              <Icon icon="mdi:cart" />
              TOEVOEGEN
            </button>

            <hr />

            <div class="price" v-if="isLoggedIn">
              € {{ product.salesPrice?.toFixed(2) ?? product.price.toFixed(2) }}
            </div>
            <div class="placeholder" v-if="!isLoggedIn"></div>

            <ul class="details">
              <li><strong>Artikelnr:</strong>&nbsp;<span>{{ product.artikelNr }}</span></li>
              <li v-if="product.land"><strong>Land:</strong>&nbsp;<span>{{ product.land }}</span></li>

              <!-- Alleen tonen als het een wijn is -->
              <template v-if="product.categorie === 'Wijn'">
                <li v-if="product.streek"><strong>Streek:</strong>&nbsp;<span>{{ product.streek }}</span></li>
                <li v-if="product.kleur"><strong>Kleur:</strong>&nbsp;<span>{{ product.kleur }}</span></li>
                <li v-if="product.type"><strong>Type:</strong>&nbsp;<span>{{ product.type }}</span></li>
                <li v-if="product.druivensoort"><strong>Druif:</strong>&nbsp;<span>{{ product.druivensoort }}</span>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="product-description">
      <h3>Beschrijving</h3>
      <p>{{ product.description }}</p>
    </section>

    <!-- Bestel-overlay -->
    <div v-if="showAddOverlay" class="overlay-backdrop" @click.self="closeAddOverlay">
      <div class="overlay-order">
        <button class="overlay-close" @click="closeAddOverlay">×</button>

        <div class="overlay-content">
          <img :src="product?.image" class="overlay-img" />

          <div class="overlay-info">
            <h2>{{ product?.title }}</h2>
            <p class="volume">{{ product?.volume }} cl</p>
            <p class="verpakking">Per verpakking: 6 ds</p>

            <div class="aantal-container">
              <span>Aantal:</span>
              <button @click="decreaseQty">-</button>
              <input type="number" v-model.number="quantity" min="1" class="aantal-input" />
              <button @click="increaseQty">+</button>
            </div>

            <p class="prijs" v-if="isLoggedIn">€ {{ totalPrice.toFixed(2) }}</p>
            <p class="placeholder" v-if="!isLoggedIn">-</p>
            <button class="bestel-btn">BESTELLEN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter, useRoute } from 'vue-router';
import { dummyProducts } from '@/data/dummyProducts';
import { computed, ref, type Ref } from 'vue';
import { inject } from 'vue';
import type { Products } from '@/data/dummyProducts';

const route = useRoute();
const router = useRouter();
const goBack = () => router.back();

const product = ref<Products | undefined>();
const isLoggedIn = inject('isLoggedIn') as Ref<boolean>;

const productSlug = route.params.product?.toString().toLowerCase() || "";
const match = dummyProducts.find(p => p.title.toLowerCase() === productSlug);

const showAddOverlay = ref(false);
const quantity = ref(1);

const openAddOverlay = () => {
  showAddOverlay.value = true;
  quantity.value = 1;
};

const closeAddOverlay = () => {
  showAddOverlay.value = false;
};

const increaseQty = () => quantity.value++;
const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--;
};

const totalPrice = computed(() => {
  const basePrice = product.value?.salesPrice ?? product.value?.price ?? 0;
  return basePrice * quantity.value;
});

if (!match) {
  router.push('/');
} else {
  product.value = match;
}
</script>

<style scoped>
.breadcrumb-container {
  width: 100%;
  background-color: #f9f4ed;
  margin-bottom: 20px;
}

.content-container {
  max-width: 948px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.breadcrumb {
  padding: 14px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  margin-bottom: 20px;
}

.breadcrumb-back {
  border: 1px solid rgba(102, 51, 51, 0.2);
  background-color: transparent;
  color: #663333;
  font-weight: bold;
  padding: 6px;
  margin-right: 12px;
  cursor: pointer;
}

.breadcrumb-link {
  color: #5A2D2E;
  text-decoration: none;
  font-weight: bold;
}

.breadcrumb-current {
  color: rgba(102, 51, 51, 0.75);
  font-weight: bold;
}

.product-container {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.product-image {
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: white;
}

.product-image img {
  height: 100%;

}

.product-info {
  width: 50%;
  color: #663333;
}

.add-btn {
  background-color: #E59F01;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 12px 0;
}

.add-btn:hover {
  background-color: #B8860B;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #B02E2E;
  margin: 20px 0;
}

.details {
  list-style: none;
  padding: 0;
}

.details li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  line-height: 1.5;
}

.details strong {
  width: 90px;
  flex-shrink: 0;
  font-weight: bold;
  color: #663333;
}

.product-description {
  max-width: 948px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.product-description p {
  max-width: 600px;
}

.product-description h3 {
  font-size: 18px;
  font-weight: bold;
  color: #5A2D2E;
  margin-bottom: 10px;
}

.placeholder {
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
  }

  .product-image {
    margin: 0 auto;
  }

  .product-info {
    width: 100%;
    padding-left: 12px;
  }

  .product-image img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  .breadcrumb {
    flex-wrap: wrap;
    margin-left: 12px;
  }

  .product-description {
    margin-left: 12px;
  }
}

@media screen and (min-width: 768px) {
  .breadcrumb-container {
    min-height: 500px;
  }
}

.overlay-order {
  background: linear-gradient(to bottom, #FFF0CA 38%, #F8F3E6 100%);
  padding: 2rem;
  max-width: 450px;
  width: 95%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid #663333;
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
  color: #663333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.volume {
  font-weight: bold;
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
  color: #663333;
  background-color: transparent;
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

.overlay-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-close {
  position: absolute;
  top: 10px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  color: #663333;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .overlay-content {
    flex-direction: column;
    align-items: center;
  }

  .overlay-img {
    height: 120px;
  }
}
</style>
