<template>
  <div class="filter-sidebar">

    <button class="reset-btn" @click="resetFilters">Reset filters</button>

    <h2>Filters</h2>

    <div v-for="filter in filters" :key="filter.key" class="filter-section">
      <div class="filter-header" @click="toggleSection(filter.key)">
        <h3>{{ filter.title }}</h3>
        <Icon
          :icon="openSections[filter.key] ? 'material-symbols:keyboard-arrow-up' : 'material-symbols:keyboard-arrow-down'"
          class="toggle-icon" color="#E59F01" />
      </div>

      <div v-show="openSections[filter.key]" class="filter-content">
        <!-- Range Slider -->
        <div v-if="filter.type === 'range'">
          <div class="dual-slider" :style="{
            '--min': filter.min || 0,
            '--max': filter.max || 1000,
            '--val1': (filter.modelValue as [number, number])[0],
            '--val2': (filter.modelValue as [number, number])[1]
          }">
            <input type="range" :min="filter.min || 0" :max="filter.max || 1000"
              v-model="(filter.modelValue as [number, number])[0]" class="slider thumb-left" />
            <input type="range" :min="filter.min || 0" :max="filter.max || 1000"
              v-model="(filter.modelValue as [number, number])[1]" class="slider thumb-right" />
          </div>
          <div class="price-inputs">
            <input type="number" v-model="filter.modelValue[0]" />
            <span>tot</span>
            <input type="number" v-model="filter.modelValue[1]" />
          </div>
        </div>

        <!-- Checkbox Group -->
        <div v-else-if="filter.type === 'checkbox'">
          <div v-for="(count, option) in filter.options" :key="option">
            <label>
              <input type="checkbox" :value="option" :checked="(filter.modelValue as string[]).includes(option)"
                @change="updateCheckbox(filter.key, option)" />
              {{ option }} ({{ count }})
            </label>
          </div>
        </div>

        <!-- Radio Group -->
        <div v-else-if="filter.type === 'radio'">
          <div v-for="(count, option) in filter.options" :key="option">
            <label>
              <input type="radio" :name="filter.key" :value="option" :checked="filter.modelValue === option"
                @change="updateRadio(filter.key, option)" />
              {{ option }} ({{ count }})
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';

type ModelValueType = string | string[] | [number, number];

export interface FilterOption {
  key: string;
  title: string;
  type: 'range' | 'checkbox' | 'radio';
  options?: Record<string, number>;
  modelValue: ModelValueType;
  min?: number;
  max?: number;
}

const props = defineProps<{
  filters: FilterOption[],
}>();

const emit = defineEmits(['update:filters']);

const defaultFilters = JSON.parse(JSON.stringify(props.filters));

const resetFilters = () => {
  const reset = JSON.parse(JSON.stringify(defaultFilters));
  emit('update:filters', reset);
};

const openSections = ref<Record<string, boolean>>({});
onMounted(() => {
  props.filters.forEach((filter) => {
    openSections.value[filter.key] = filter.key === 'price';
  });
});

const updateCheckbox = (key: string, value: string) => {
  const updated = props.filters.map((f) => {
    if (f.key === key) {
      const selected = [...f.modelValue];
      const i = selected.indexOf(value);
      if (i === -1) {
        selected.push(value);
      } else {
        selected.splice(i, 1);
      }
      return { ...f, modelValue: selected };
    }
    return f;
  });
  emit('update:filters', updated);
};

const updateRadio = (key: string, value: string) => {
  const updated = props.filters.map((f) =>
    f.key === key ? { ...f, modelValue: value } : f
  );
  emit('update:filters', updated);
};

const toggleSection = (key: string) => {
  openSections.value[key] = !openSections.value[key];
};
</script>

<style scoped>
.filter-sidebar {
  width: 250px;
  font-family: Arial, sans-serif;
}

.filter-sidebar h2 {
  color: #663333;
  font-weight: bold;
  font-size: 18px;
}

.filter-section {
  border-bottom: 1px solid #e6e6e6;
  padding: 15px 0;
}

.filter-section.no-border {
  border-bottom: none;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.filter-header h3 {
  color: #E59F01;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.reset-btn {
  background-color: transparent;
  border: 2px solid #E59F01;
  color: #E59F01;
  font-weight: bold;
  padding: 6px 12px;
  margin-bottom: 10px;
  cursor: pointer;
}

.reset-btn:hover {
  background-color: #E59F01;
  color: white;
}

.toggle-icon {
  font-size: 20px;
}

.filter-content {
  padding-top: 15px;
}

.filter-content label {
  color: #663333;
}

.price-inputs span {
  color: #663333;
}

.filter-content input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #E59F01;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}

.filter-content input[type="checkbox"]:checked {
  background-color: #E59F01;
}

.filter-content input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #E59F01;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
}

.filter-content input[type="radio"]:checked {
  background-color: #E59F01;
}

.price-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.dual-slider {
  position: relative;
  height: 40px;
}

.dual-slider::before {
  content: "";
  position: absolute;
  height: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  background-color: rgba(229, 159, 1, 0.5);
  border-radius: 3px;
  z-index: 1;
}

.dual-slider::after {
  content: "";
  position: absolute;
  height: 6px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #E59F01;
  border-radius: 3px;
  z-index: 2;
  pointer-events: none;
  left: calc((var(--val1) - var(--min)) / (var(--max) - var(--min)) * 100%);
  width: calc((var(--val2) - var(--val1)) / (var(--max) - var(--min)) * 100%);
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  width: 100%;
  height: 40px;
  background: transparent;
  pointer-events: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: auto;
  width: 16px;
  height: 16px;
  background: white;
  border: 2px solid #E59F01;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 3;
}

.slider::-moz-range-thumb {
  pointer-events: auto;
  width: 16px;
  height: 16px;
  background: white;
  border: 2px solid #E59F01;
  border-radius: 50%;
  cursor: pointer;
}

.price-inputs input {
  border: 2px solid #E59F01;
  width: 68px;
  padding: 8px;
}
</style>
