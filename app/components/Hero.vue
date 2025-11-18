<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">你好，我是 Your Name</h1>
      <p class="hero-sub">前端工程师 / 设计爱好者。欢迎来到我的个人主页。</p>
      <div class="hero-cta">
        <NuxtLink to="/about" class="btn-tone">了解更多</NuxtLink>
        <NuxtLink to="/contact" class="btn-tone">联系我</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero { padding: 64px 16px; text-align: center; }
.hero-title { margin: 0 0 8px; font-size: 2.2rem; color: var(--text-primary); }
.hero-sub { margin: 0 0 20px; color: var(--text-muted); font-size: 1.05rem; }
.hero-cta { display: inline-flex; gap: 10px; }
.hero .btn-tone { padding: 10px 16px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.06); }
</style>