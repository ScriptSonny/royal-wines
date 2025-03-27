<template>
  <main class="login-page">
    <div class="breadcrumb-container">
      <div class="breadcrumb">
        <button @click="goBack" class="breadcrumb-back">
          <Icon icon="material-symbols:arrow-back-ios-new" />
          Terug
        </button>
        <router-link to="/" class="breadcrumb-link">Home</router-link>
        <span class="breadcrumb-current">
          {{ searchQuery ? `Zoekresultaten voor: ‘${searchQuery}’` : 'Login' }}
        </span>
      </div>
    </div>

    <h1>Klant-login</h1>

    <div class="login-container">
      <!-- Inloggen Section -->
      <section class="login-section">
        <h2>Inloggen</h2>
        <p>Als u nog geen account heeft, klik dan op 'Inlogcode aanvragen'.</p>
        <label>Gebruikersnaam</label>
        <input type="text" placeholder="&#xf007; Gebruikersnaam" class="icon-input">
        <label>Wachtwoord</label>
        <div class="password-container">
          <input type="password" placeholder="&#xf084; Wachtwoord" class="icon-input">
          <span class="eye-icon">👁️</span>
        </div>
        <a href="#" @click.prevent="showRequestCodeForm">Inlogcode aanvragen</a>
        <button @click="login" class="primary-btn">INLOGGEN</button>
      </section>

      <!-- Inlogcode Aanvragen Section -->
      <section class="request-code-section" v-if="showRequestForm">
        <h2>Inlogcode aanvragen</h2>
        <label>Naam</label>
        <input type="text" placeholder="&#xf007; Naam" class="icon-input">
        <label>Organisatie</label>
        <input type="text" placeholder="&#xf0f7; Organisatie" class="icon-input">
        <label>E-mailadres</label>
        <input type="email" placeholder="&#xf0e0; E-mailadres" class="icon-input">
        <button class="primary-btn">VERSTUREN</button>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const showRequestForm = ref(false);
const searchQuery = computed(() => route.query.search?.toString().toLowerCase() || "");
const isLoggedIn = ref(false);

const showRequestCodeForm = () => {
  showRequestForm.value = true;
};

const goBack = () => {
  router.back();
};

const login = () => {
  isLoggedIn.value = true;
}

watch(isLoggedIn, () => {
  if (isLoggedIn.value) {
    router.push('/');
  }
})
</script>
  
  <style scoped>
  .login-page {
    padding: 2rem;
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
  
  .back-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 8px;
  }
  
  .login-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 850px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.login-section,
.request-code-section {
  flex: 1;
  padding: 2rem;
  background: #FFF7E0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
}


.login-section h2, .request-code-section h2 {
  color: #5A2D2E;
  font-size: 22px;
  margin-bottom: 10px;
}

.login-section label, .request-code-section label {
  display: block;
  margin: 1rem 0 0.5rem;
  font-weight: bold;
}

.login-section input, .request-code-section input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
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
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 5px;
}

.primary-btn:hover {
  background-color: #d48c00;
}


  .login-section, .request-code-section {
    background: #FFF0CA;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
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
    border-radius: 4px;
    font-family: 'FontAwesome', Arial;
  }
  
  .password-container {
    display: flex;
    align-items: center;
  }
  
  .eye-icon {
    margin-left: -30px;
    cursor: pointer;
  }
  
  .primary-btn {
    background-color: #E59F01;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    margin-top: 1rem;
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
  </style>