import { ref, watch, onMounted, onBeforeUnmount, type Ref } from 'vue'

export type ColorMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'pref-color-mode'

export function useColorMode() {
  // 客户端优先读取 localStorage；服务端则返回 'system' 作为默认
  // 在 Nuxt 中使用 useState 保证成应用级的共享状态
  const state = useState<ColorMode>('color-mode', () => 'system')
  const mode = state as Ref<ColorMode>

  // 在客户端优先读取 localStorage 的偏好
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      mode.value = stored
    }
  }

  // 监听系统主题首选项变更
  let mq: MediaQueryList | null = null
  function applyTheme(current: ColorMode) {
    const el = document.documentElement
    if (current === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) el.setAttribute('data-theme', 'dark')
      else el.removeAttribute('data-theme')
    } else if (current === 'dark') {
      el.setAttribute('data-theme', 'dark')
    } else {
      el.removeAttribute('data-theme')
    }
  }

  function onSysPrefChange(e: MediaQueryListEvent) {
    if (mode.value === 'system') applyTheme('system')
  }

  onMounted(() => {
    applyTheme(mode.value)
    if (window.matchMedia) {
      mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', onSysPrefChange)
    }
  })

  onBeforeUnmount(() => {
    if (mq) mq.removeEventListener('change', onSysPrefChange)
  })

  // 切换顺序：system -> light -> dark -> system
  function toggleMode() {
    if (mode.value === 'system') mode.value = 'light'
    else if (mode.value === 'light') mode.value = 'dark'
    else mode.value = 'system'
  }

  function setMode(newMode: ColorMode) {
    mode.value = newMode
  }

  watch(mode, (v) => {
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, v)
    applyTheme(v)
  })

  return {
    mode,
    toggleMode,
    setMode,
  }
}
