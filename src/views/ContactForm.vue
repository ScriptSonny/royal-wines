<template>
  <div class="page-title">
    <h1>Contactformulier</h1>
  </div>

  <div class="contact-container">
    <section class="contact-section">
      <h2>{{ sectionTitle }}</h2>

      <div class="input-wrapper">
        <label for="name">Naam</label>
        <div class="icon-input-wrapper">
          <Icon icon="mdi:account" class="input-icon" />
          <input id="name" type="text" placeholder="Naam" />
        </div>
      </div>

      <div class="input-wrapper">
        <label for="mail">E-mailadres</label>
        <div class="icon-input-wrapper">
          <Icon icon="mdi:email" class="input-icon" />
          <input id="mail" type="email" placeholder="E-mailadres" />
        </div>
      </div>

      <div class="input-wrapper">
        <label for="type">Type bericht</label>
        <div class="icon-input-wrapper select-wrapper">
          <Icon icon="mdi:comment-question-outline" class="input-icon" />
          <select id="type" v-model="selectedType">
            <option>Vraag</option>
            <option>Klacht</option>
            <option>Vacature</option>
            <option>Overig</option>
          </select>
        </div>
      </div>

      <div class="input-wrapper">
        <label for="file">Bijlagen</label>
        <div class="icon-input-wrapper">
          <input class="file-name-display" type="text" :value="selectedFileName" disabled />
          <button class="upload-btn" @click.prevent="fileInput?.click()">Bestand kiezen</button>
        </div>
        <input ref="fileInput" id="file" type="file" @change="handleFileUpload" style="display: none" />
      </div>

      <div class="input-wrapper">
        <label for="message">Uw opmerking</label>
        <textarea id="message" placeholder="Typ hier uw bericht..."></textarea>
      </div>

      <div class="flex-right">
        <button @click="submitForm" class="primary-btn">VERSTUREN</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

const selectedFileName = ref('');
const fileInput = ref<HTMLInputElement | null>(null);
const route = useRoute();
const selectedType = ref('');
const sectionTitle = ref('Contact');

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    selectedFileName.value = file.name;
  }
};

const submitForm = () => {
  alert('Formulier verzonden!');
};

if (route.query.type === 'vacature') {
  sectionTitle.value = 'Vacature';
  selectedType.value = 'Vacature';
} else {
  selectedType.value = 'Vraag';
}
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

.contact-container {
  display: flex;
  justify-content: center;
  max-width: 948px;
  margin: 0 auto 40px;
  padding: 0 20px;
}

.contact-section {
  flex: 1;
  padding: 2rem;
  background: #FFF7E0;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  width: 100%;
}

.contact-section h2 {
  font-weight: bold;
  color: #5A2D2E;
  font-size: 22px;
  margin-bottom: 10px;
}

label {
  display: block;
  margin: 1rem 0 0.5rem;
  font-weight: bold;
  color: #5A2D2E;
}

input,
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #663333;
  font-size: 16px;
  background-color: white;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 0.75rem;
  border: 1px solid #663333;
  font-size: 16px;
  resize: vertical;
  background-color: white;
}

.input-wrapper {
  margin-bottom: 1rem;
}

.icon-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #5A2D2E;
  font-size: 18px;
}

.icon-input-wrapper input,
.icon-input-wrapper select {
  padding-left: 36px;
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.select-wrapper select {
  appearance: none;
}

.select-wrapper::after {
  content: '▼';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #5A2D2E;
  pointer-events: none;
}

input.file-name-display {
  padding-left: 0.75rem !important;
}

.file-name-display {
  flex: 1;
  padding: 0.75rem;
  font-size: 14px;
  border: 1px solid #663333;
  background-color: white;
  color: #663333;
}

.upload-btn {
  background-color: #E59F01;
  color: white;
  border: none;
  padding: 0.83rem 1rem;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
}

.upload-btn:hover {
  background-color: #B8860B;
}

.primary-btn {
  background-color: #E59F01;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 14px;
}

.primary-btn:hover {
  background-color: #B8860B;
}

.flex-right {
  display: flex;
  justify-content: flex-end;
}
</style>
