<template>
    <div class="card">
        <img :src="logo" :alt="name" class="logo" />
        <h3 class="title">{{ name }}</h3>
        <button class="button">BEKIJK MEER</button>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        logo: String
    }
};
</script>

<style scoped>
.card
{
    background-color: #fef3c7;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    text-align: center;
}

.logo
{
    display: block;
    margin: 0 auto 0.5rem;
}

.title
{
    font-weight: 600;
}

.button
{
    display: block;
    margin: 0.5rem auto 0;
    padding: 0.5rem 1rem;
    background-color: #facc15;
    color: white;
    border-radius: 0.5rem;
}

</style>