// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/icon'],
	ssr: true,
	nitro: {
		prerender: {
			crawlLinks: true,
			// the pages to pre-render when running `pnpm generate`
			routes: ['/', '/about'],
		},
	},
	css: ['@/assets/css/main.scss'],
})
