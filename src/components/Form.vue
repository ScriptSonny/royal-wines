<template>
    <div class="form-card">
        <h3 class="form-title">Contact</h3>
        <form>
            <label for="name">Naam</label>
            <div class="input-container">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder=""/>
            </div>

            <label for="email">E-mailadres</label>
            <div class="input-container">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" placeholder=""/>
            </div>

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

            <div class="submit">
              <button class="submit-btn"><h3>VERSTUREN</h3></button>
            </div>
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

.form-card 
{
  background-color: #FAF4E5;
  padding: 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 439px;
}

.form-title 
{
  font-size: 20px;
  color: #663333;
  font-weight: 600;
  margin-bottom: 1rem;
}

label 
{
  display: block;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 15px;
  color: #663333;
}

input, select, textarea 
{
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #663333;
  background-color: #FAF4E5;
}

.input-container
{
  position: relative;
  display: flex;
  align-items: center;
}

.input-container i
{
  position: absolute;
  left: 10px;
  color:#663333;
}

.input-container input
{
  padding-left: 30px;
}

.upload-container
{
  display: flex;
  align-items: flex-end;
}

.upload-btn 
{
  margin-left: 0.5rem;
  padding: 0.6rem 1rem;
  background-color: #663333;
  color: white;
}

.submit
{
  display: flex;
  flex-direction: row-reverse;
}

.submit-btn 
{
  border: 2px solid #E59F01;
  background-color: #FAF4E5;
  color: #E59F01;
  margin-top: 0.5rem;
  padding: 10px 18px 10px 18px;
}


</style>