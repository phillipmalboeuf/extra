<script context="module">
	export async function load({ page }) {
		return { props: { locale: page.query.get('locale'), path: page.path } }
	}
</script>

<script>
  import { setContext } from 'svelte'
  import Navigation from '$components/Navigation.svelte'

  export let locale
  export let path
  setContext('locale', locale)
</script>

<svelte:head>
  <html lang={locale || "fr"} />
	<title>Extra</title>
</svelte:head>

<main>
  <slot></slot>
</main>

<Navigation {path} />

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }

	:global(:root) {
		font-family: "Helvetica Now", "Helvetica Neue", Helvetica, sans-serif;
    letter-spacing: -0.04em;

    --yellow: yellow;

    --large: 1444px;
    --medium: 1024px;
    --small: 375px;

    --gutter: 2vw;
    --top: 0px;

    --textcolor: black;
    --highlight: var(--yellow);
    --background: white;

    @media (max-width: 900px) {
      --gutter: 4vw;
    }
	}

  :global(html) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    // scroll-behavior: smooth;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    min-height: 120vh;
    background: var(--background);
  }

	main {
    min-height: 120vh;
    margin-top: var(--top);
    padding: var(--gutter);
	}

  :global(h1, h2, h3) {
    font-weight: 500;
    // font-style: italic;
    line-height: 1;
    margin: 0 0 1rem;
  }

  :global(h1, h2, h3) {
    font-size: 2rem;
    font-weight: normal;
  }

  :global(h5, h6, p, small) {
    margin: 0 0 1rem;
  }

  :global(h5) {
    font-size: 2rem;
    font-weight: normal;
    line-height: 1.222;
  }

  :global(h6) {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.6;
  }

  :global(p) {
    font-size: 1.25rem;
    line-height: 1.333;
    white-space: pre-line;
  }

  :global(small),
  :global(small p) {
    display: block;
    font-size: 1rem;
    line-height: 1.222;
  }

  @media (max-width: 1200px) {
  :global(h1) {
    font-size: 120px;
  }

  :global(h2) {
    font-size: 75px;
  }

  :global(h3) {
    font-size: 56px;
  }

  /* :global(h5) {
    font-size: 14px;
    line-height: 1.2;
  }

  :global(h6) {
    font-size: 12px;
    line-height: 1.6;
  }

  :global(p) {
    font-size: 14px;
    line-height: 1.8;
  }

  :global(small) {
    font-size: 12px;
    line-height: 1.6;
  } */
  }

  @media (max-width: 900px) {
  :global(h1) {
    font-size: 60px;
  }

  :global(h2) {
    font-size: 50px;
  }

  :global(h3) {
    font-size: 50px;
  }
  }

  :global(a) {
    outline: none;
    color: currentColor;
    text-decoration: none;
  }

  :global(a:hover),
  :global(a:focus) {
    opacity: 0.3;
  }

  :global(button) {
    outline: none;
    font-size: inherit;
    cursor: pointer;
    border: none;
  }
</style>