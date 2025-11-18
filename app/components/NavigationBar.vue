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
  backdrop-filter: blur(10px) saturate(150%);
  border: 1.5px solid var(--border-outer);
  background: var(--glass);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.nav-btn {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  position: relative;
  cursor: pointer;
}

.nav-btn::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 999px;
  border: 2px solid var(--border);
  pointer-events: none;
  transition: all 0.2s ease;
  opacity: 0.8;
}

.icon { 
  width: 20px; 
  height: 20px;
}

.nav-btn[aria-pressed="true"]::before { 
  border-color: var(--highlight-pink);
  opacity: 1;
}

.nav-btn.router-link-active::before { 
  border-color: var(--highlight-pink);
  opacity: 1;
}

.nav-btn:hover::before, .nav-btn:focus::before { 
  border-color: var(--border-strong);
  opacity: 1;
}

.nav-btn:active::before {
  border-color: var(--highlight-pink);
  opacity: 1;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (prefers-color-scheme: dark) {
  .nav-inner { 
    border-color: var(--border-outer);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  .nav-btn::before { border-color: var(--border); }
  .nav-btn:hover::before, .nav-btn:focus::before { border-color: var(--border-strong); }
  .nav-btn:hover {
    background: rgba(255, 255, 255, 0.08);
  }
}

@media (max-width: 768px) {
  .nav-pill { left: 50%; top: auto; bottom: 20px; transform: translateX(-50%); }
  .nav-inner { 
    width: auto; 
    padding: 10px 14px; 
    border-radius: 24px; 
    flex-direction: row; 
    gap: 10px;
    backdrop-filter: blur(12px) saturate(150%);
  }
  .nav-btn {
    width: 40px;
    height: 40px;
  }
  .icon { width: 18px; height: 18px; }
}
</style>
