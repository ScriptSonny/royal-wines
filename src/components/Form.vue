<template>
    <div class="form-card">
        <h3 class="form-title">{{ title }}</h3>
        <form>
            <label for="name">Naam</label>
            <input type="text" placeholder=""/>

            <label for="email">E-mailadres</label>
            <input type="email" placeholder=""/>

            <label for="message">Type bericht</label>
            <select>
                <option>{{ type }}</option>
            </select>

            <label for="files">Bijlagen</label>
            <div class="upload-container">
                <input type="file">
                <button class="upload-btn">Upload</button>
            </div>

            <label for="extraMessage">Uw opmerking</label>
            <textarea></textarea>

            <button class="submit-btn">VERSTUREN</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        type: String
    }
};
</script>

<style scoped>

.form-card 
{
  background-color: #fef3c7;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.form-title 
{
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

label 
{
  display: block;
  margin-top: 1rem;
  font-weight: 600;
}

input, select, textarea 
{
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.upload-container
{
  display: flex;
  align-items: center;
}

.upload-btn 
{
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #5a2a02;
  color: white;
  border-radius: 0.5rem;
}

.submit-btn 
{
  display: block;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #facc15;
  color: black;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: bold;
}

</style>