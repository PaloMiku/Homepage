export default defineAppConfig({
	/** 导航栏配置 */
	navigation: [
		{ to: '/', icon: 'ri:home-4-line', title: '首页', label: '返回首页' },
		{ to: '/articles', icon: 'ri:article-line', title: '文章', label: '文章页面' },
		{ to: 'https://blog.sotkg.com/about', icon: 'ri:information-line', title: '关于', label: '关于页面' },
	],

	/** 社交媒体图标配置 */
	socialLinks: [
		{ icon: 'ri:blogger-line', text: '博客', url: 'https://blog.sotkg.com' },
		{ icon: 'ri:mail-line', text: 'Email: admin@sotkg.com', url: 'mailto:admin@sotkg.com' },
		{ icon: 'ri:qq-line', text: '交流群: 767876073', url: 'https://qm.qq.com/q/NH7OS40dY6' },
		{ icon: 'ph:github-logo-bold', text: 'GitHub: PaloMiku', url: 'https://github.com/PaloMiku' },
		{ icon: 'ph:fediverse-logo', text: 'Fediverse', url: 'https://circle.tkg3.top/@PaloMiku' },
	],

	/** 个人信息/头像，可配置为 public 下的静态资源或外部 URL */
	profile: {
		/** 头像文件路径 */
		avatar: 'https://cravatar.com/avatar/1012bf78fb01d5b964c3a9a0f515911a?s=512',
		/** 个人名称 */
		name: 'Mikuの鬆',
	},
})
