<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style lang="scss" global>
	@use 'breakpoints' as b;

	:root {
		--dark: hsl(225, 7%, 11%);
		--light: hsl(0, 0%, 96%);
		--dark-blue: hsla(204, 100%, 27%, 70%);
		--yellow: hsl(48, 100%, 80%);
		--purple: hsl(272, 100%, 80%);
		--light-blue: hsl(216, 100%, 80%);
		--mint: hsl(168, 100%, 80%);
	}

	@font-face {
		font-family: 'GT Alpina';
		font-size: normal;
		font-weight: 700;
		src: url('/assets/fonts/gtalpina-bold-sub.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'GT Alpina';
		font-size: normal;
		font-weight: 400;
		src: url('/assets/fonts/gtalpina-regular-lat.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'Banana Grotesk';
		font-size: normal;
		font-weight: 700;
		src: url('/assets/fonts/bananagrotesk-bold-sub.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'Banana Grotesk';
		font-size: normal;
		font-weight: 400;
		src: url('/assets/fonts/bananagrotesk-regular-lat.woff2') format('woff2');
		font-display: swap;
	}

	.hide {
		@include b.mq(c) {
			display: none;
		}
	}

	.screen-reader-text {
		position: absolute !important;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		word-wrap: normal !important;
		border: 0;
	}

	.screen-reader-text:focus {
		top: 5px;
		left: 5px;
		z-index: 100000;
		display: block;
		width: auto;
		height: auto;
		padding: 15px 23px 14px;
		clip: auto !important;
		clip-path: none;
		font-size: 0.875rem;
		font-weight: 700;
		line-height: normal;
		color: hsl(199, 65%, 37%);
		text-decoration: none;
		background-color: hsl(0, 0%, 95%);
		border-radius: 3px;
		box-shadow: 0 0 2px 2px hsla(0, 0%, 0%, 60%);
	}

	html {
		font-family:
			'Banana Grotesk',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			'Noto Sans',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		&::before,
		&::after {
			box-sizing: border-box;
		}
	}

	body {
		font-size: 1.375rem;
		color: var(--light);
		background: var(--dark);
		@include b.mq(e) {
			font-size: 1.25rem;
		}
		@include b.mq(d) {
			font-size: 1.175rem;
		}
		@include b.mq(d) {
			font-size: 1.175rem;
		}
		@include b.mq(c) {
			font-size: 1.1rem;
		}
	}

	p {
		font-family: 'GT Alpina', serif;
		line-height: 1.5;
		@include b.mq(b) {
			font-size: 1rem;
			line-height: 1.6;
		}
	}

	h1 {
		margin: 0;
		font-family: 'GT Alpina', serif;
		font-size: 4.5rem;
		color: var(--yellow);
		@include b.mq(e) {
			font-size: 4rem;
		}
		@include b.mq(d) {
			font-size: 3rem;
		}
		@include b.mq(c) {
			font-size: 2.875rem;
		}
		@include b.mq(b) {
			font-size: 2.4rem;
		}
		@include b.mq(a) {
			font-size: 2rem;
		}
		@media only screen and (min-width: 1421px) {
			font-size: 6rem;
		}
	}

	h2 {
		font-size: 2.25rem;
		@include b.mq(f) {
			font-size: 2.25rem;
		}
		@include b.mq(e) {
			font-size: 1.8rem;
		}
		@include b.mq(d) {
			font-size: 1.5rem;
		}
		@include b.mq(c) {
			font-size: 1.875rem;
		}
		@include b.mq(b) {
			font-size: 1.65rem;
		}
		@include b.mq(a) {
			font-size: 1.375rem;
		}
		@media only screen and (min-width: 1421px) {
			font-size: 3rem;
		}
	}

	a {
		text-underline-offset: 0.25em;
	}
</style>
