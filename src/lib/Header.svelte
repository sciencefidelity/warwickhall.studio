<header class="site-header">
	<div class="hero-container">
		<picture>
			<source srcset="assets/img/buddug-studio.webp" type="image/webp" />
			<source srcset="assets/img/buddug-studio.jpg" type="image/jpeg" />
			<img class="hero-image" src="assets/img/buddug-studio.jpg" alt="" width="1200" height="800" />
		</picture>
	</div>
</header>

<style lang="scss">
	@use './styles/breakpoints' as b;

	.hero-container {
		height: 70vh;
		margin: 3rem 22% 0 0;
		@include b.mq(g) {
			margin: 3rem 11.5% 0 0;
		}
		@include b.mq(f) {
			margin: 2rem 11.5% 0 0;
		}
		@include b.mq(e) {
			height: 56vh;
			margin: 1.5rem 11.5% 0 0;
		}
		@include b.mq(d) {
			margin: 0 11.5% 0 0;
		}
		@include b.mq(c) {
			height: 45vh;
			margin: 0;
		}
		@media only screen and (min-width: 1421px) {
			margin: 3rem 30% 0 0;
		}
	}

	.hero-image {
		width: 100%;
		height: 100%;
		margin: auto;
		object-fit: cover;
	}
</style>
