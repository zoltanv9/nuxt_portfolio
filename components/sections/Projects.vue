<script setup lang="ts">
import Card from "~/components/Card.vue";
</script>

<template>
  <section class="sub-section-alternative" id="projects">
    <h2 style="font-size: 48px; font-weight: 700;letter-spacing: 0.1rem; line-height: 72px">Projects</h2>
    <div>
        <Card />
    </div>
  </section>
</template>

<style scoped>
.sub-section-alternative {
  padding: 0px 80px 80px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.sub-section-alternative h2{
  margin-bottom: 72px;
}
.project-container {
  display: flex;
  justify-content: space-evenly;
}

</style>