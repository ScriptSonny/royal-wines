<template>
    <div class="relations-wrapper">
      <h2 class="title">Relaties</h2>
      <div class="grid-container">
        <InfoCard
          v-for="partner in partners"
          :key="partner.name"
          :name="partner.name"
          :logo="`${partner.logo}`"
        />
      </div>
  
      <h2 class="title">Leveranciers</h2>
      <div class="grid-container">
        <InfoCard
          v-for="supplier in suppliers"
          :key="supplier.name"
          :name="supplier.name"
          :logo="`${supplier.logo}`"
        />
      </div>
    </div>
  </template>

<script>
import InfoCard from '@/components/InfoCard.vue';

export default {
    components: { InfoCard },
    data() {
        return {
            partners: [
                { name: "Sportlandgoed", logo: "landgoed.png"},
                { name: "café Zwaneveld", logo: "zwaneveld.png"},
                { name: "Brassie De Bank", logo: "debank.png"},
                { name: "Hotel-Restaurant de Meulenhoek", logo: "meulenhoek.png"},
            ],

            suppliers: [
                { name: "Krombacher", logo: "krombacher.png"},
                { name: "Casa Silva", logo: "casasilva.png"},
                { name: "Stadswijn", logo: "krombacher.png"}
            ]
        };
    }
};
</script>

<style scoped>
.relations-wrapper {
  max-width: 948px;
  margin: 0 auto;
  margin-bottom: 30px;
}

.title {
    font-size: 24px;
    font-weight: 600;
    color: #663333;
    margin-top: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 767px) {
  .grid-container {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .title {
    text-align: center;
  }
}
</style>
