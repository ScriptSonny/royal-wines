<template>
    <div class="cart-container">
        <main class="cart">
            <h2>Winkelwagen</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>ArtikelNr</th>
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
                        <td>{{ item.articlNr }}</td>
                        <td class="quantity">
                            <button @click="updateQuantity(index, -1)" :disabled="item,quantity <= 1">-</button>
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

            <div class="cart-summary">
                <p><strong>Aantal:</strong>{{ totalItems }}</p>
                <p><strong>Totaal:</strong>€ {{ totalPrice.toFixed(2) }}</p>
                <button class="btn-order">Bestellen</button>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const cartItems = ref([
    {
        id: 1,
        name: "Cafe de Paris",
        variant: "Ice Edition",
        articleNr: "1667575",
        quantity: 2,
        perPack: 6,
        price: 6.95,
        image: "@/assets/images/wine.png",
    },
    {
        id: 2,
        name: "Sottano Chardonnay",
        variant: "",
        articleNr: "1647561",
        quantity: 1,
        perPack: 6,
        price: 6.95,
        image: "@/assets/images/chardonnay.png",
  },
  {
        id: 3,
        name: "Casa Silva Gran Reserva",
        variant: "Petit Verdot",
        articleNr: "1747811",
        quantity: 1,
        perPack: 6,
        price: 6.00,
        image: "@/assets/images/petit_verdot.png",
  },
]);

const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0));
const totalPrice = computed(() => carItems.value.reduce((sum, item) => sum + item.quantity * item.price, 0));

const updateQuantity = (index, change) => {
    cartItems.value[index].quantity += change;
};

const removeItem = (index) => {
    cartItems.value.splice(index, 1);
};
</script>

<style scoped>
.cart-container {
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: auto;
}

.cart {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #66333367;
}

.product {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product img {
  width: 50px;
  height: auto;
}

.quantity button {
  padding: 5px;
  border: 1px solid #E59F01;
  cursor: pointer;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.cart-summary {
  margin-top: 20px;
  text-align: right;
}

.btn-order {
  background: #E59F01;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>