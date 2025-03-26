<template>
    <div>
        <main>
            <h2 class="title">Relaties</h2>
            <div class="grid-container">
                <InfoCard v-for="partner in partners" :key="partner.name" :name="partner.name" :logo="require(`@/assets/images/${partner.logo}`)" />
            </div>
            <h2 class="title">Leveranciers</h2>
            <div class="grid-container">
                <InfoCard v-for="supplier in suppliers" :key="supplier.name" :name="supplier.name" :logo="require(`@/assets/images/${supplier.logo}`)" />
            </div>
        </main>
    </div>
</template>

<script>
import InfoCard from '@/components/links_page_components/InfoCard.vue';

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
main 
{
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}

.title
{
    font-size: 1.25rem;
    font-weight: bold;
    color: #663333;
    margin-top: 2rem;
}

.grid-container 
{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
}

@media (min-width: 768px)
{
    .grid-container 
    {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>