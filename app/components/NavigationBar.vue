<template>
  <nav class="nav-pill" role="navigation" aria-label="侧边导航栏">
    <div class="nav-inner glass">
      <NuxtLink to="/" class="nav-btn" title="首页" aria-label="返回首页">
        <Icon name="mdi:home" class="icon" />
      </NuxtLink>
      <NuxtLink to="/about" class="nav-btn" title="关于" aria-label="关于页面">
        <Icon name="mdi:information" class="icon" />
      </NuxtLink>
      <button class="nav-btn" :aria-pressed="colorMode.mode.value !== 'system'" @click="colorMode.toggleMode()" :title="`主题：${colorMode.mode.value}`">
        <Icon :name="iconName" class="icon" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useColorMode } from '../composables/useColorMode'

const colorMode = useColorMode()
const iconName = computed(() => {
  const v = colorMode.mode.value
  return v === 'system' ? 'mdi:theme-light-dark' : v === 'light' ? 'mdi:weather-sunny' : 'mdi:weather-night'
})
</script>

<style scoped>
.nav-pill {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
}

.nav-inner {
  width: 64px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  border-radius: 36px;
  backdrop-filter: blur(6px) saturate(120%);
  border: 1px solid var(--border-outer);
}

.nav-btn {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: transparent;
  color: var(--text-primary);
  text-decoration: none;
  transition: border-color 160ms ease, transform 120ms ease;
  border: none;
  position: relative;
}

.nav-btn::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 999px;
  border: 1.25px solid var(--border);
  pointer-events: none;
  transition: border-color 160ms ease;
}

.icon { width: 20px; height: 20px; }

.nav-btn[aria-pressed="true"]::before { border-color: var(--nav-pressed); }
.nav-btn.router-link-active::before { border-color: var(--highlight-pink); }
.nav-btn:hover::before, .nav-btn:focus::before, .nav-btn:active::before { border-color: var(--border); }

@media (prefers-color-scheme: dark) {
  .nav-inner { border-color: var(--border-outer); }
  .nav-btn::before { border-color: var(--border); }
  .nav-btn:hover::before, .nav-btn:focus::before, .nav-btn:active::before { border-color: var(--border-strong); }
}

@media (max-width: 768px) {
  .nav-pill { left: 50%; top: auto; bottom: 20px; transform: translateX(-50%); }
  .nav-inner { width: auto; padding: 10px 14px; border-radius: 24px; flex-direction: row; gap: 10px; }
}
</style>
