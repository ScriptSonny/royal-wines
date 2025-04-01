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
    background-color: linear-gradient(#FFF0CA, #F8F3E6);
    padding: 1rem;
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