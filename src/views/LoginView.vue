<template>
  <div class="page-title">
    <h1>Klant-login</h1>
  </div>

  <div class="login-container">
    <!-- Inloggen Section -->
    <section class="login-section">
      <h2>Inloggen</h2>
      <p>Als u nog geen account heeft, klik dan op 'Inlogcode aanvragen'.</p>
      <div class="input-wrapper">
        <label for="username">Gebruikersnaam</label>
        <div class="icon-input-wrapper">
          <Icon icon="mdi:account" class="input-icon" />
          <input id="username" type="text" placeholder="Gebruikersnaam" />
        </div>
      </div>
      <div class="input-wrapper">
        <label for="password">Wachtwoord</label>
        <div class="icon-input-wrapper">
          <Icon icon="mdi:lock" class="input-icon" />
          <input :type="showPassword ? 'text' : 'password'" id="password" placeholder="Wachtwoord" />
          <Icon :icon="showPassword ? 'mdi:eye-off' : 'mdi:eye'" class="eye-icon" @click="togglePassword" />
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex">
        <a href="#" @click.prevent="showRequestCodeForm">Inlogcode aanvragen</a>
        <button @click="login" class="primary-btn">INLOGGEN</button>
      </div>
    </section>

    <!-- Inlogcode Aanvragen Section -->
    <section class="request-code-section" v-if="showRequestForm">
      <h2>Inlogcode aanvragen</h2>
      <div class="input-wrapper">
        <label for="name">Naam</label>
        <div class="icon-input-wrapper">
          <Icon icon="mdi:account" class="input-icon" />
          <input id="name" type="text" placeholder="Naam" />
        </div>
      </div>
      <div class="input-wrapper">
        <label for="organisation">Organisatie</label>
        <div class="icon-input-wrapper">
          <Icon icon="mdi:domain" class="input-icon" />
          <input id="organisation" type="text" placeholder="Organisatie" />
        </div>
      </div>
      <div class="input-wrapper">
        <label for="email">E-mailadres</label>
        <div class="icon-input-wrapper">
          <Icon icon="mdi:email" class="input-icon" />
          <input id="email" type="text" placeholder="Emailadres" />
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex-right">
        <button @click="login" class="primary-btn">VERSTUREN</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const router = useRouter();
const showRequestForm = ref(false);
const isLoggedIn = ref(false);

const showRequestCodeForm = () => {
  showRequestForm.value = true;
};

const login = () => {
  isLoggedIn.value = true;
}

const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

watch(isLoggedIn, () => {
  if (isLoggedIn.value) {
    router.push('/');
  }
})
</script>

<style scoped>
.page-title {
  margin: 20px 0;
}

.page-title h1 {
  color: #5A2D2E;
  font-size: 24px;
  font-weight: bold;
  max-width: 948px;
  margin: 0 auto;
}

.login-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 948px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.login-section,
.request-code-section {
  flex: 1;
  padding: 2rem;
  background: #FFF7E0;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-right {
  display: flex;
  justify-content: right;
}

.divider {
  margin: 30px 0;
  height: 0.5px;
  background-color: #663333;
  opacity: 0.25;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
}


.login-section h2,
.request-code-section h2 {
  color: #5A2D2E;
  font-size: 22px;
  margin-bottom: 10px;
}

.login-section label,
.request-code-section label {
  display: block;
  margin: 1rem 0 0.5rem;
  font-weight: bold;
}

.login-section input,
.request-code-section input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.password-container {
  display: flex;
  align-items: center;
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #5A2D2E;
}

.primary-btn {
  background-color: #E59F01;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 12px;
}

.primary-btn:hover {
  background-color: #d48c00;
}

.input-wrapper {
  margin-bottom: 1rem;
}

.icon-input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #5A2D2E;
}

.icon-input-wrapper input {
  width: 100%;
  padding: 10px 10px 10px 36px;
  font-size: 16px;
}

.login-section,
.request-code-section {
  background: #FAF4E5;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
}

h2 {
  color: #8B4513;
  font-weight: bold;
}

label {
  display: block;
  margin: 1rem 0 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
}

.password-container {
  display: flex;
  align-items: center;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #5A2D2E;
}

.primary-btn {
  background-color: #E59F01;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.primary-btn:hover {
  background-color: #B8860B;
}

a {
  color: #8B4513;
  text-decoration: underline;
  cursor: pointer;
}

h1 {
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-title {
    margin: 40px;
  }

  .login-container {
    flex-direction: column;
    align-items: center;
  }

  .login-section,
  .request-code-section {
    width: 100%;
    max-width: 90%;
  }
}
</style>
