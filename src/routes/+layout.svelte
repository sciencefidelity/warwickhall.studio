<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import GlobalStyles from '$lib/styles/GlobalStyles.svelte';
</script>

<svelte:head>
	<meta
		name="Description"
		content="An artist led initiative providing high quality studio accommodation for artists and makers in Cardiff."
	/>
	<link
		rel="preload"
		href="/assets/fonts/gtalpina-bold-sub.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href="/assets/fonts/gtalpina-regular-lat.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href="/assets/fonts/bananagrotesk-bold-sub.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href="/assets/fonts/bananagrotesk-regular-lat.woff2"
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
</svelte:head>

<GlobalStyles>
	<Header />
	<slot />
	<Footer />
</GlobalStyles>
