<template>
    <main class="login">
        <section class="breadcrumb">
            <button class="back-btn">&larr; Terug</button>
            <span>Home > Login</span>
        </section>

        <h1>Klant-login</h1>
        <div class="login-container">
            <h2>Inloggen</h2>
            <p>Als u nog geen account heeft, klik dan op 'Inlogcode aanvragen'.</p>

            <label for="username">Gebruikersnaam</label>
            <div class="input-wrapper">
                <input id="username" type="text" placeholder="Gebruikersnaam" />
                <span class="icon">&#128100;</span>
            </div>

            <label for="password">Wachtwoord</label>
            <div class="input-wrapper">
                <input id="password" type="password" placeholder="Wachtwoord" />
                <span class="icon toggle">&#128065;</span>
            </div>

            <button class="login-btn">INLOGGEN</button>
            <a href="#" class="request-code">Inlogcode aanvragen</a>
        </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
.breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.back-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 8px;
}

.login-container {
    background: #FFF0CA;
    padding: 2rem;
    border-radius: 8px;
    max-width: 400px;
    margin: 2rem auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    color: #8B4513;
}

label {
    display: block;
    margin-top: 1rem;
    color: #8B4513;
}

.input-wrapper {
    display: flex;
    align-items: center;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
}

input {
    flex: 1;
    border: none;
    padding: 12px;
    outline: none;
}

.icon {
    padding: 12px;
    background-color: #E59F01;
    color: white;
}

.login-btn {
    margin-top: 1.5rem;
    padding: 12px;
    width: 100%;
    background-color: #b8860b;
    color: white;
    border: none;
    cursor: pointer;
}

.request-code {
    display: inline-block;
    margin-top: 1rem;
    color: #E59F01;
    text-decoration: none;
}
</style>