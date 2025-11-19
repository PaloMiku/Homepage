export default () => {
	try {
		const stored = localStorage.getItem('pref-color-mode')
		if (stored === 'dark')
			document.documentElement.setAttribute('data-theme', 'dark')
		else if (stored === 'light')
			document.documentElement.removeAttribute('data-theme')
	}
	catch {
		// ignore
	}
}
