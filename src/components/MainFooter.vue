<template>
  <footer class="footer">
    <div class="top-bar"></div>
    <div class="footer-container">
      <!-- Left Side - Contact Info -->
      <div class="footer-column">
        <h3>Contact</h3>
        <div class="footer-content">
          <div class="address">
            <p>royalwinesanddrinks.nl</p>
            <p>Postbus 28</p>
            <p>9300 AA Norg</p>
          </div>

          <div class="contact-details">
            <p><Icon icon="material-symbols:phone-enabled" color="#663333" width="16" style="margin-right: 6px;"/> +31 592-614228</p>
            <p><Icon icon="material-symbols:phone-iphone" color="#663333" width="16" style="margin-right: 6px;"/> +31 6-46068053</p>
            <p><Icon icon="material-symbols:mail" color="#663333" width="16" style="margin-right: 6px;"/> verkoop@royalwinesanddrinks.nl</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Other Links Split into Two Columns -->
      <div class="footer-column">
        <h3>Overig</h3>
        <div class="footer-content">
          <ul class="footer-links">
            <li><router-link to="/contact">Contact opnemen</router-link></li>
            <li><router-link :to="{ path: '/contact', query: { type: 'vacature' } }">Vacatures</router-link></li>
            <li><router-link to="/links">Relaties & Leveranciers</router-link></li>
          </ul>

          <ul class="footer-links">
            <li><a :href="privacyNL" target="_blank">Privacy statement (NL)</a></li>
            <li><a :href="privacyEN" target="_blank">Privacy statement (ENG)</a></li>
            <li><a :href="algemeneVoorwaarden" target="_blank">Algemene voorwaarden</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import privacyNL from '@/assets/privacy-statement-nl.pdf';
import privacyEN from '@/assets/privacy-statement-en.pdf';
import algemeneVoorwaarden from '@/assets/algemenevoorwaarden.pdf'

defineOptions({
  name: 'MainFooter'
});
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 48px;
  background-color: #D4A656;
  margin-bottom: 20px;
}

.footer {
  background-color: #F7F6F3;
  font-family: Arial, sans-serif;
  width: 100%;
  padding-bottom: 32px;
}

.footer-container {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-column {
  padding: 0 1rem;
  flex: 1;
}

.footer-column h3 {
  color: #E59F01;
  margin-bottom: 1rem;
  font-weight: normal;
}

.footer-content {
  display: flex;
}

.address p, .contact-details p {
  margin: 0.5rem 0;
  color: #333;
}

.contact-details {
  margin-left: 2rem;
}

.contact-details p {
  display: flex;
  align-items: center;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 180px;
}

.footer-links li {
  margin-bottom: 0.7rem;
}

.footer-links a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #d4ac54;
}

/* Mobile styles */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }

  .footer-column {
    margin-bottom: 2rem;
  }

  .footer-content {
    flex-direction: column;
  }

  .contact-details {
    margin-left: 0;
    margin-top: 1rem;
  }

  .links-container {
    flex-direction: column;
  }

  .footer-links + .footer-links {
    margin-top: 1rem;
  }
}
</style>
