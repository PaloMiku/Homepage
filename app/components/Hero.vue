<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
<section class="hero">
	<div class="hero-inner container">
		<div class="hero-left">
			<h1 class="hero-greeting">
				Hi, I'm <span class="hero-name">PaloMiku</span> <span class="wave">👋</span>
			</h1>
			<h2 class="hero-title">
				A Student Nodejs <span class="developer">&lt;Developer /&gt;</span>
			</h2>
			<p class="hero-sub">
				An independent developer coding with love.
			</p>

			<ul class="social-list" aria-label="social links">
				<li v-for="link in appConfig.socialLinks" :key="link.url">
					<a :href="link.url" :aria-label="link.text" class="social" target="_blank" rel="noopener noreferrer">
						<Icon :name="link.icon" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</section>
</template>

<style scoped lang="scss">
.hero { padding: 48px 16px; display: flex; align-items: center; justify-content: center; min-height: 60vh; }
.hero-inner { text-align: center; }

.hero-left { padding: 8px 0; }
.hero-greeting { font-size: 2.2rem; margin: 0 0 6px; color: var(--text-primary); font-weight: 600; }
.hero-name { color: var(--highlight-pink); }
.wave { display: inline-block; transform-origin: 70% 70%; }
.hero-title { margin: 0 0 14px; font-size: 1.8rem; font-weight: 400; color: var(--text-primary); }
.developer { color: var(--text-muted); font-weight: 700; }
.hero-sub { margin: 0 0 18px; color: var(--text-muted); font-size: 1.05rem; }

.social-list{ display:flex; gap:12px; margin-top:24px; padding-left:0; list-style:none; justify-content: center; }
.social { display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:999px; background: rgba(255,255,255,0.05); color:var(--text-primary); text-decoration:none; border: 1.5px solid var(--border); transition: all 0.2s ease; position: relative; }
.social:hover{ transform: translateY(-2px); background: rgba(255,255,255,0.1); border-color: var(--border-strong); }
.social:active{ border-color: var(--highlight-pink); }

/* Small screens: adjust font sizes for better readability */
@media (max-width: 760px){
  .hero-greeting { font-size: 1.6rem; }
  .hero-title { font-size: 1.4rem; }
}
</style>
