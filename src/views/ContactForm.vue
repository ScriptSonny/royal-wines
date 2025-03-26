<template>
    <div>
        <main>
            <h2 class="title">{{ title }}</h2>
            <div class="form-container">
                <Form :title="title" :type="type" />
            </div>
        </main>
    </div>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    components: { Form }
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
    color: #663333;
    margin-bottom: 2rem;
}

.form-container
{
    display: flex;
    justify-content: center;
}
</style>