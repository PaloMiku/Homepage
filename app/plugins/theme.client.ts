// 在客户端最先执行：从 localStorage 读取主题设置并在 <html> 上设置 data-theme，避免首次渲染的闪烁
export default () => {
	try {
		const stored = localStorage.getItem('pref-color-mode')
		if (stored === 'dark')
			document.documentElement.setAttribute('data-theme', 'dark')
		else if (stored === 'light')
			document.documentElement.removeAttribute('data-theme')
		// 如果是 system/无设置则不设置，让浏览器根据 prefers-color-scheme 生效
	}
	catch {
		// ignore
	}
}
