<template>
    <div>
        <MainHeader />
        <main>
            <h2 class="title">Vacature</h2>
            <div class="form-container">
                <Form title="Vacature" type="Vacature" />
            </div>
        </main>
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import Form from '@/components/Form.vue';

export default {
    components: { MainFooter, MainHeader, Form}
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
    font-size: 1.5rem;
    font-weight: bold;
    color: #5a2a02;
    margin-bottom: 2rem;
}

.form-container
{
    display: flex;
    justify-content: center;
}
</style>