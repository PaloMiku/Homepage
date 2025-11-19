<script setup lang="ts">
import { computed } from 'vue'

const appConfig = useAppConfig()

// 支持配置文件中 avatar 的可选值，并提供在线占位符作为回退
const avatarSrc = computed(() => appConfig?.profile?.avatar || 'https://i.pravatar.cc/180?u=PaloMiku')
</script>

<template>
<section class="hero">
	<div class="hero-inner container">
		<div class="hero-grid">
			<div class="personal-card card">
				<!-- 头像：可在 `app.config.ts` 中配置 profile.avatar，建议使用 public 下的静态图片 -->
				<img v-if="avatarSrc" :src="avatarSrc" alt="Mikuの鬆" class="hero-avatar">
				<h1 class="hero-greeting">
					你好，<br>我是 <span class="hero-name">Mikuの鬆</span> <span class="wave">👋</span>
				</h1>

				<p class="bio">
					开源爱好者，学生
				</p>

				<ul class="social-list" aria-label="social links">
					<li v-for="link in appConfig.socialLinks" :key="link.url">
						<a :href="link.url" :aria-label="link.text" class="social" target="_blank" rel="noopener noreferrer">
							<Icon :name="link.icon" />
						</a>
					</li>
				</ul>
			</div>

			<div class="right-stack">
				<GitHubHeatmap />
				<RecentPostsNew />
			</div>
		</div>
	</div>
</section>
</template>

<style scoped lang="scss">
.hero { padding: 48px 16px; display: flex; align-items: center; justify-content: center; min-height: 60vh; }
.hero-inner { text-align: center; }

.hero-left { padding: 8px 0; }
/* 头像样式 */
.hero-avatar { display: block; width: 120px; height: 120px; border-radius: 999px; object-fit: cover; margin: 0 auto 18px; border: 4px solid var(--border); box-shadow: 0 6px 18px rgba(0,0,0,0.18); }
.hero-greeting { font-size: 2.2rem; margin: 0 0 6px; color: var(--text-primary); font-weight: 600; }
.hero-name { color: var(--highlight-pink); }
.wave { display: inline-block; transform-origin: 70% 70%; }

.social-list{ display:flex; gap:12px; margin-top:24px; padding-left:0; list-style:none; justify-content: center; }
.social { display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:999px; background: rgba(255,255,255,0.05); color:var(--text-primary); text-decoration:none; border: 1.5px solid var(--border); transition: all 0.2s ease; position: relative; }
.social:hover{ transform: translateY(-2px); background: rgba(255,255,255,0.1); border-color: var(--border-strong); }
.social:active{ border-color: var(--highlight-pink); }

/* Small screens: adjust font sizes for better readability */
@media (max-width: 760px){
  .hero-greeting { font-size: 1.6rem; }
  .hero-title { font-size: 1.4rem; }
}

/* New layout */
.hero-grid { display:grid; grid-template-columns: 360px 1fr; gap: 20px; align-items:start; width:100%; max-width: 1000px; }
.personal-card{ padding: 20px; text-align:center; }
.bio{ color:var(--text-muted); margin:8px 0 16px; }
.right-stack{ display:flex; flex-direction:column; gap:16px; }
.card{ background: var(--surface); border-radius: 12px; padding: 16px; border: 1px solid var(--border); }

@media (max-width: 1024px){
	.hero-grid{ grid-template-columns: 1fr; }
}
</style>
