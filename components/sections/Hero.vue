<script setup lang="ts">

</script>

<template>
  <div class="hero">
    <div>
      <div>
        <h1>Zoltan Simon</h1>
        <p>Software Developer</p>
        <div><a href="#about-me">About me</a></div>
      </div>
      <div >
        <img src="../../assets/img/self-removebg-preview.png" alt="headshot" class="headshot">
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-color: #171717;
  color: #EEF3FF;
  font-size: 40px;
  font-weight: 600;
  height: 100vh;
}

.left_logo_text {
  display: flex;
  width: 90%;
  justify-content: space-between;
  height: 100%;
  align-items: center;

}

p {
  font-size: 32px;
  margin-top: 0;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
}

.button {
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: coral;
  font-size: 28px;
  font-weight: 300;
}

.headshot-container {
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: #BBDADA;
  overflow: hidden;
}

.headshot {
  position: absolute;
  top: -20px;
}
</style>