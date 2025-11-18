<script setup lang="ts">
const appConfig = useAppConfig()

// 设置页面标题
useHead({
	title: '关于 - PaloMiku',
	meta: [
		{ name: 'description', content: '了解更多关于 PaloMiku 的信息和技能栈' },
	],
})
</script>

<template>
<div class="about-page">
	<section class="about-section container">
		<div class="about-content">
			<h1 class="about-title">
				关于我
			</h1>
			<p class="about-description">
				我是一名充满热情的全栈开发者，专注于 Node.js 生态系统。
				我热爱构建优雅、高效的 Web 应用程序，并且始终保持着对新技术的好奇心。
			</p>

			<div class="skills-section">
				<h2 class="skills-title">
					技能栈
				</h2>
				<div class="skills-grid">
					<div class="skill-item">
						<Icon name="ri:javascript-line" class="skill-icon" />
						<span>JavaScript/TypeScript</span>
					</div>
					<div class="skill-item">
						<Icon name="ri:nodejs-line" class="skill-icon" />
						<span>Node.js</span>
					</div>
					<div class="skill-item">
						<Icon name="ri:vuejs-line" class="skill-icon" />
						<span>Vue.js/Nuxt.js</span>
					</div>
					<div class="skill-item">
						<Icon name="ri:database-2-line" class="skill-icon" />
						<span>MongoDB/PostgreSQL</span>
					</div>
					<div class="skill-item">
						<Icon name="ri:docker-line" class="skill-icon" />
						<span>Docker</span>
					</div>
					<div class="skill-item">
						<Icon name="ri:git-branch-line" class="skill-icon" />
						<span>Git</span>
					</div>
				</div>
			</div>

			<div class="contact-section">
				<h2 class="contact-title">
					联系方式
				</h2>
				<p class="contact-description">
					如果你对我的项目感兴趣，或者想要合作，欢迎随时联系我！
				</p>
				<div class="social-links">
					<a
						v-for="link in appConfig.socialLinks"
						:key="link.url"
						:href="link.url"
						:aria-label="link.text"
						class="social-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon :name="link.icon" />
						<span>{{ link.text }}</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
</template>

<style scoped lang="scss">
.about-page {
  min-height: 100vh;
  padding: 80px 16px 40px;
}

.about-section {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  text-align: center;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.skills-section, .contact-section {
  margin-bottom: 48px;
}

.skills-title, .contact-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 48px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.skill-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.skill-icon {
  width: 24px;
  height: 24px;
  color: var(--highlight-pink);
}

.contact-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid var(--border);
  border-radius: 999px;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.social-link:active {
  border-color: var(--highlight-pink);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-page {
    padding: 60px 16px 30px;
  }

  .about-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .social-link {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
