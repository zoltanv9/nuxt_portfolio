<script setup lang="ts">

</script>

<template>
  <div class="hero" style="margin-top: 72px">
    <div class="flex justify-between items-center container mx-auto h-full">
      <div class="left-text">
        <h1 style="font-size: 76px; line-height: normal;font-weight: 700">Zoltan Simon</h1>
        <p>Software Developer</p>
        <div class="flex justify-center items-center button"><a href="#about-me">About me</a></div>
      </div>
      <div class="headshot-container">
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
  height: calc(100vh - 72px);
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
  width: 290px;
  height: 290px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #BBDADA;
  overflow: hidden;
}

</style>