<script setup lang="ts">
import Header from "~/components/sections/Header.vue";
import Hero from "~/components/sections/Hero.vue";
import "~/assets/css/main.css"
</script>

<template>
  <Header />
  <Hero />
  <section class="sub-section" id="about-me">
    <div class="information">
      <h2>About Me</h2>
      <p>Hello. My name is Zoltan Simon. I am a Fullstack Web Developer with a passion for designing and programming
        IT solutions for businesses.</p>
    </div>

  </section>
  <section class="sub-section-alternative" id="projects">

    <h2>Projects</h2>

    <div class="project-container">

      <div class="project-card">
<!--        <img src="src/img/project1.png" alt="Project One" class="project-image">-->
        <h3>Project One</h3>
        <p class="subtext">This is my first project, a virtual travel agency site. I really enjoyed making this
          project.</p>
        <hr/>
        <p class="subtext"><a href="/microtravel" class="project-link">View here</a></p>
      </div>
    </div>

  </section>
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