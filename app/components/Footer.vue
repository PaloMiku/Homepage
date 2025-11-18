<script setup lang="ts">
</script>

<template>
<footer class="site-footer">
	<div class="container">
		<p>© {{ new Date().getFullYear() }} Your Name — Built with Nuxt</p>
		<div class="socials">
			<a href="#" aria-label="GitHub">GitHub</a>
			<a href="#" aria-label="Twitter">Twitter</a>
		</div>
	</div>
</footer>
</template>

<style scoped lang="scss">
.site-footer { padding: 32px 16px; text-align: center; color: var(--text-muted); }
.site-footer .socials { display: flex; gap: 8px; justify-content: center; margin-top: 8px; }
</style>
