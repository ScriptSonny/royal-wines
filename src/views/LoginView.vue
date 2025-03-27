<template>
    <main class="login-page">
      <section class="breadcrumb">
        <button class="back-btn">← Terug</button>
        <span>Home > Klant-login</span>
      </section>
  
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
          <a href="#" @click="showRequestCodeForm">Inlogcode aanvragen</a>
          <button class="primary-btn">INLOGGEN</button>
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
  import { ref } from 'vue';
  
  const showRequestForm = ref(false);
  
  const showRequestCodeForm = () => {
    showRequestForm.value = true;
  };
  </script>
  
  <style scoped>
  .login-page {
    padding: 2rem;
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
  
  .login-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
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
  </style>