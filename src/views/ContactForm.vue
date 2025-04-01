<template>
    <div>
        <main>
            <h2 class="title">Contact</h2>
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
    width: 980px;
    margin: 0 auto;
}

.title
{
    margin: 20px 0;
    color: #5A2D2E;
    font-size: 32px;
    font-weight: 600;
    padding: 0 20px;
}

.form-container
{
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
}

</style>