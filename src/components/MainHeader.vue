<template>
  <header class="header">
    <div class="top-bar"></div>

    <!-- Desktop Navigation -->
    <div class="nav-container">
      <div class="nav-actions">
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo.png" alt="Royal Wines & Drinks" class="logo" />
        </router-link>

        <div class="search-container">
          <Icon icon="material-symbols:search" color="#663333" width="24" style="margin: 8px;" />
          <input type="text" placeholder="Zoek..." class="search-input" aria-label="Zoekveld" />
        </div>

        <div class="buttons">
          <button class="login-btn btn">LOGIN</button>
          <button class="cart-btn btn">
            <Icon icon="material-symbols:add-shopping-cart" /> € 0,00
          </button>
        </div>

        <div class="separator"></div>
      </div>

      <nav class="nav-links">
        <div class="categories">
          <router-link to="/wines" class="nav-link">Wijnen</router-link>
          <a href="#" class="nav-link">Overig</a>
          <a href="#" class="nav-link">Kerstpakketten</a>
        </div>
        <div class="aanbiedingen-container">
          <button class="btn-prominent">Aanbiedingen</button>
        </div>
      </nav>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-header">
      <button class="menu-btn" @click="toggleMenu">
        <Icon :icon="menuOpen ? 'material-symbols:close' : 'material-symbols:menu'" width="24" class="menu-icon" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: menuOpen }">
      <div class="mobile-menu-content">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Royal Wines & Drinks" class="logo mobile-logo" />
        </router-link>

        <div class="mobile-search-row">
          <div class="search-container">
            <Icon icon="material-symbols:search" color="#663333" width="20" style="margin: 8px;" />
            <input type="text" placeholder="Zoek..." class="search-input" aria-label="Zoekveld" />
          </div>

          <div class="icon-buttons">
            <button class="icon-btn">
              <Icon icon="material-symbols:person" width="20" />
            </button>
            <button class="icon-btn">
              <Icon icon="material-symbols:shopping-cart" width="18" />
            </button>
          </div>
        </div>

        <nav class="mobile-nav">
          <router-link to="/wines" class="logo-link mobile-nav-link">Wijnen</router-link>
          <a href="#" class="nav-link mobile-nav-link">Overig</a>
          <a href="#" class="nav-link mobile-nav-link">Kerstpakketten</a>
          <button class="btn-prominent mobile-btn">Aanbiedingen</button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const MOBILE_BREAKPOINT = 768;

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? 'hidden' : '';
};

const checkWindowSize = () => {
  if (window.innerWidth > MOBILE_BREAKPOINT && menuOpen.value) {
    menuOpen.value = false;
    document.body.style.overflow = '';
  }
};

onMounted(() => {
  window.addEventListener('resize', checkWindowSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkWindowSize);
});
</script>

<style scoped>
/* Global styles */
.top-bar {
  width: 100%;
  height: 24px;
  background-color: #D4A656;
}

/* Shared styles */
.btn {
  border: 2px solid #E59F01;
  background-color: transparent;
  color: #E59F01;
  cursor: pointer;
  height: 36px;
  padding: 0 20px;
  min-width: 100px;
}

.btn:hover {
  background-color: #E59F01;
  color: white;
}

.btn-prominent {
  border: none;
  background-color: #E59F01;
  color: white;
  cursor: pointer;
  height: 36px;
  padding: 0 20px;
  min-width: 100px;
}

.btn-prominent:hover {
  background-color: #bb860c;
}

.logo {
  height: 70px;
}

.logo-link {
  padding: 0;
  font-weight: bold;
  color: #E59F01;
}

.search-container {
  display: flex;
  align-items: center;
  border: 2px solid #663333;
  height: 36px;
  min-width: 200px;
  max-width: 438px;
  margin: 0 20px;
  width: 100%;
}

.search-input {
  border: none;
  width: 100%;
  height: 100%;
  color: #663333;
  font-weight: bolder;
}

.search-input::placeholder {
  color: #663333;
}

.search-input:focus {
  outline: none;
}

.nav-link {
  color: #5A2D2E;
  font-weight: bold;
  text-decoration: none;
}

/* Desktop Navigation */
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  max-width: 950px;
}

.nav-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px 20px;
  width: 100%;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: #663333;
  opacity: 0.25;
  margin: 10px 0;
}

.buttons {
  display: flex;
  gap: 20px;
}

.nav-links {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
}

.categories {
  display: flex;
  gap: 60px;
}

/* Mobile Navigation */
.mobile-header {
  display: none;
  position: fixed;
  top: 24px;
  right: 0;
  z-index: 1001;
}

.menu-btn {
  background: transparent;
  border: 2px solid #E59F01;
  padding: 4px;
  margin: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #E59F01;
}

.menu-btn:hover {
  background: #E59F01;
}

.menu-btn:hover .menu-icon {
  color: white;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  transition: right 0.5s ease;
  overflow-y: auto;
  padding-top: 24px;
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  height: 100%;
}

.mobile-logo {
  margin-bottom: 30px;
}

.mobile-search-row {
  display: flex;
  flex-direction: row;
}

.icon-buttons {
  display: flex;
  gap: 10px;
}

.icon-btn {
  background-color: transparent;
  border: 2px solid #E59F01;
  width: 50px;
  cursor: pointer;
  color: #E59F01;
}

.icon-btn:hover {
  background-color: #E59F01;
  color: white;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
}

.mobile-nav-link {
  margin: 15px 0;
  font-size: 18px;
}

.mobile-btn {
  margin-top: 20px;
  width: 150px;
}

/* Responsive styles */
@media screen and (max-width: 950px) {
  .separator {
    width: 700px;
  }

  .nav-links {
    width: 700px;
  }
}

@media screen and (max-width: 768px) {
  .nav-container {
    display: none;
  }

  .mobile-header {
    display: flex;
    justify-content: right;
  }
}
</style>
