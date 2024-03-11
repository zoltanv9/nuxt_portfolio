<script setup lang="ts">
import Header from "~/components/sections/Header.vue";
import Hero from "~/components/sections/Hero.vue";
import "~/assets/css/main.css"
import AboutMe from "~/components/sections/AboutMe.vue";
import Projects from "~/components/sections/Projects.vue";
</script>

<template>
  <Header />
  <Hero />
  <AboutMe />
  <Projects />
  <footer id="contact">
    <h2>Contact me</h2>
    <div class="footer-form">
      <form action="https://formsubmit.co/zoltan.simon@v9.hu" method="POST">
        <input type="email" name="email" placeholder="Your email" required>
        <br>
        <input type="text" name="name" placeholder="Your name">
        <br>
        <textarea name="message" cols="50" rows="5" placeholder="Write your message here..."></textarea>
        <button type="submit">Send</button>
        <input type="hidden" name="_next" value="https://zoltan-simon/thankyou.html">
      </form>
    </div>
  </footer>
  <div style="height: 2000px"></div>

</template>

<style scoped>

</style>