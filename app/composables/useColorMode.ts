import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

export type ColorMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'pref-color-mode'

export function useColorMode() {
	const state = useState<ColorMode>('color-mode', () => 'system')
	const mode = state as Ref<ColorMode>
	const isMounted = ref(false)

	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(STORAGE_KEY)
		if (stored === 'light' || stored === 'dark' || stored === 'system') {
			mode.value = stored
		}
		isMounted.value = true
	}

	// 监听系统主题首选项变更
	let mq: MediaQueryList | null = null
	function applyTheme(current: ColorMode) {
		const el = document.documentElement
		if (current === 'system') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			if (prefersDark)
				el.setAttribute('data-theme', 'dark')
			else el.removeAttribute('data-theme')
		}
		else if (current === 'dark') {
			el.setAttribute('data-theme', 'dark')
		}
		else {
			el.removeAttribute('data-theme')
		}
	}

	function onSysPrefChange(_e: MediaQueryListEvent) {
		if (mode.value === 'system')
			applyTheme('system')
	}

	onMounted(() => {
		applyTheme(mode.value)
		if (window.matchMedia) {
			mq = window.matchMedia('(prefers-color-scheme: dark)')
			mq.addEventListener('change', onSysPrefChange)
		}
	})

	onBeforeUnmount(() => {
		if (mq)
			mq.removeEventListener('change', onSysPrefChange)
	})

	// 切换顺序：system -> light -> dark -> system
	function toggleMode() {
		if (mode.value === 'system')
			mode.value = 'light'
		else if (mode.value === 'light')
			mode.value = 'dark'
		else mode.value = 'system'
	}

	function setMode(newMode: ColorMode) {
		mode.value = newMode
	}

	watch(mode, (v) => {
		if (typeof window !== 'undefined')
			localStorage.setItem(STORAGE_KEY, v)
		applyTheme(v)
	})

	return {
		mode,
		toggleMode,
		setMode,
	}
}
