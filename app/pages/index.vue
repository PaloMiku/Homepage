<template>
  <div>
    <Hero />
    <section class="container">
      <h2>作品</h2>
      <p>这里列出一些项目、博客或演示。</p>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
.container { max-width: 900px; margin: 24px auto; padding: 0 16px; }
</style>