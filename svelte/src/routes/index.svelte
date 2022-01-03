<script context="module" lang="ts">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<svelte:head>
  <title>Warwick Hall Studios | affordable artists studios in Cardiff</title>
</svelte:head>

<div class="headline"><h1 class="logo">Warwick Hall<br />Studios</h1></div>
<div class="main-container">
  <h2 class="tagline">
    A<span class="hide">ffordable a</span>rt studios in Cardiff.
  </h2>
  <p class="body-text">
    Warwick Hall Studios is an artist led initiative providing studio
    accommodation for artists and makers in Cardiff. We are a collective of
    around 21 creatives working in a range of media. We have 16 studios of
    different sizes with good natural light at affordable prices.
  </p>
  <p />
</div>

<!-- prettier-ignore -->
<style lang="scss">
  @use '../styles/breakpoints' as b;

  .headline {
    display: inline-block;
    width: 77.5%;
    height: 11.5rem;
    margin-top: -5.75rem;
    margin-left: 22.5%;
    background: var(--dark-blue);
    @include b.mq(f) {
      width: 88%;
      margin-left: 11.5%;
    }
    @include b.mq(e) {
      height: 10.375rem;
      margin-top: -5.15rem;
    }
    @include b.mq(d) {
      height: 8.375rem;
      margin-top: -4rem;
    }
    @include b.mq(c) {
      width: 94%;
      height: 7.25rem;
      margin-top: -3.5rem;
      margin-left: 6%;
    }
    @include b.mq(b) {
      height: 6.5rem;
      margin-top: -3.15rem;
    }
    @include b.mq(a) {
      height: 5.5rem;
      margin-top: -2.67rem;
    }
    @media only screen and (min-width: 1421px) {
      height: 15rem;
      margin-top: -7.5rem;
    }
  }

  .logo {
    padding: 0.75rem 1.5rem;
    letter-spacing: 0.15rem;
    @include b.mq(c) {
      padding: 0.375rem 1rem;
    }
    @include b.mq(b) {
      padding: 0.5rem 1rem;
    }
    @media only screen and (min-width: 1421px) {
      padding: 0.75rem 2rem;
    }
  }

  .tagline {
    padding-top: 1.5rem;
    font-weight: 700;
    color: var(--purple);
    text-align: right;
    @media only screen and (min-width: 1421px) {
      padding-top: 2.5rem;
    }
  }

  .main-container {
    margin: 0 16.5% 4rem 11.5%;
    @include b.mq(f) {
      margin: 0 11.5% 4rem;
    }
    @include b.mq(c) {
      margin: 0 6% 4rem;
    }
    @media only screen and (min-width: 1421px) {
      margin: 0 20.5% 4rem 11.5%;
    }
  }

  .body-text {
    padding-top: 3rem;
    padding-right: 27%;
    @include b.mq(g) {
      width: 100%;
    }
    @include b.mq(f) {
      padding-top: 3rem;
      padding-right: 0;
    }
    @include b.mq(c) {
      padding-top: 2.25rem;
    }
    @include b.mq(b) {
      padding-top: 2rem;
    }
    @media only screen and (min-width: 1421px) {
      padding-right: 23%;
    }
  }

  .hide {
    @include b.mq(c) {
      display: none;
    }
  }
</style>
