<script>
  import Navigation from '$components/Navigation.svelte'
</script> 

<main>
  <slot></slot>
</main>

<Navigation />

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }

	:global(:root) {
		font-family: "Helvetica Now", "Helvetica Neue", Helvetica, sans-serif;

    --yellow: yellow;

    --large: 1444px;
    --medium: 1024px;
    --small: 375px;

    --top: 0px;

    --textcolor: black;
    --highlight: var(--yellow);
    --background: white;
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
    background: var(--highlight);
  }

	main {
    min-height: 120vh;
    background: var(--background);
    padding: 2vw;
    margin-top: var(--top);
		/* margin: 0 auto; */
    /* max-width: var(--large); */
	}

  :global(h1, h2, h3) {
    font-weight: 500;
    // font-style: italic;
    line-height: 1;
    margin: 0 auto 1rem;
  }

  :global(h1, h2, h3) {
    font-size: 2rem;
    font-weight: normal;
  }

  :global(h5, h6, p, small) {
    margin: 0 auto 1rem;
  }

  :global(h5) {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 0.03em;
    line-height: 1.222;
  }

  :global(h6) {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.05em;
    line-height: 1.6;
  }

  :global(p) {
    font-size: 1rem;
    line-height: 1.222;
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
    letter-spacing: 0.05em;
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