<footer class="site-footer">
	<div class="footer-container">
		<div class="fb-link">
			<a href="https://www.facebook.com/WarwickHallStudiosCardiff" target="_blank" rel="noreferrer">
				<svg class="fa-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
					<title>link to facebook</title>
					<path
						fill="currentColor"
						d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
					></path>
				</svg>
				<span class="screen-reader-text">Like us on Facebook</span>
			</a>
		</div>
		<div class="contact-us">
			<p class="address">Banastre Avenue<br />Cardiff CF14 3NR</p>
			<p class="contact">
				<a href="mailto:hello@warwickhall.studio">hello@warwickhall.studio</a>
			</p>
		</div>
	</div>
</footer>

<style lang="scss">
	@use './styles/breakpoints' as b;

	.footer-container {
		display: flex;
		padding-top: 3rem;
		margin: 0 11.5% 5rem 0;
		border-top: 3px solid var(--light-blue);
		@include b.mq(f) {
			margin: 0 11.5% 5rem 0;
		}
		@include b.mq(c) {
			margin: 0 5% 4rem 0;
		}
	}

	.contact {
		margin-top: 1rem;
	}

	.contact a {
		color: var(--mint);
	}

	.address,
	.contact {
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
		text-align: right;
	}

	.contact-us {
		flex: auto;
	}

	.fb-link {
		height: 3rem;
		margin-top: auto;
		margin-left: 11.5%;
		@include b.mq(c) {
			align-items: flex-end;
			height: 2.5rem;
			margin-left: 11.5%;
		}
		@media only screen and (min-width: 1421px) {
			height: 4.5rem;
		}
	}

	.fa-facebook {
		height: 100%;
	}

	.fa-facebook path {
		fill: var(--mint);
	}
</style>
