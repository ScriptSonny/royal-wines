<template>
    <div class="card">
        <h3 class="title">{{ name }}</h3>
        <img :src="logo" :alt="name" class="logo" />
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
    width: 223px;
    height: 202px; 
    background: linear-gradient(to bottom, rgb(255, 240, 202), rgb(248, 243, 230));
    padding: 1rem;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.logo
{
    max-width: 100%;
    max-height: 100px;
    height: auto;
    object-fit: contain;
}

.title
{
    font-weight: 500;
    font-size: 14px;
}

.button
{
    border: 2px solid #E59F01;
    width: 133px;
    height: 36px;
    padding: 10px 18px 10px 18px;
    font-weight: 500;
    font-size: 12px;
    color: #E59F01;
    background-color: #FFF0CA;
}

</style>