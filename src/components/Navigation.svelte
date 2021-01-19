<script>
  import { onMount, getContext } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  
  let visible = false
  let scrolled
  let footer

  let locale = getContext('locale')

  onMount(() => {
		const scrolledObserver = new IntersectionObserver( 
			([e]) => scrolled = e.isIntersecting,
			{ threshold: [0] }
		)

		scrolledObserver.observe(footer)
	})
</script>

<div bind:this={footer}>
{#if visible}
<footer class="visible" transition:fly={{ y: 100 }}>
  <nav>
    <a href="/projets{locale ? `?locale=${locale}` : ''}" on:click={() => visible = false}>{locale === 'en' ? 'Projects' : 'Projets'}</a>
    <a href="/a-propos{locale ? `?locale=${locale}` : ''}" on:click={() => visible = false}>{locale === 'en' ? 'About us' : 'À propos'}</a>
    <a href="/contact{locale ? `?locale=${locale}` : ''}" on:click={() => visible = false}>{locale === 'en' ? 'Contact' : 'Contact'}</a>
    <a rel=external href={locale === 'en' ? '?' : '?locale=en'}>{locale === 'en' ? 'Français' : 'English'}</a>
  </nav>
</footer>
{:else}
<footer>
  <nav>
    <a href="/projets{locale ? `?locale=${locale}` : ''}">{locale === 'en' ? 'Projects' : 'Projets'}</a>
    <a href="/a-propos{locale ? `?locale=${locale}` : ''}">{locale === 'en' ? 'About us' : 'À propos'}</a>
    <a href="/contact{locale ? `?locale=${locale}` : ''}">{locale === 'en' ? 'Contact' : 'Contact'}</a>
    <a rel=external href={locale === 'en' ? '?' : '?locale=en'}>{locale === 'en' ? 'Français' : 'English'}</a>
  </nav>
</footer>
{/if}
</div>

<header>
  <nav>
    <a href="/">
      Extra
    </a>
    <p>
      Architecture<br/>& Design
    </p>
  </nav>
  {#if scrolled && !visible}
  <button on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <svg viewBox="0 0 65.14 49.16"><rect x="20.32" y="14.93" width="24.49" height="2.79"/><polygon points="32.57,17.72 20.32,26.98 20.32,30.57 26.15,26.19 31.03,22.33 31.03,34.23 34.12,34.23 34.12,22.36 38.99,26.19 44.82,30.57 44.82,26.98 	"/></svg>
  </button>
  {:else}
  <button on:click={() => visible = !visible}>
    {#if visible}
    <svg viewBox="0 0 65.14 49.16"><polygon points="44.82,13.54 32.6,22.77 20.32,13.54 20.32,17.13 30.18,24.58 20.32,32.02 20.32,35.62 32.6,26.39 44.82,35.62 44.82,32.02 34.97,24.58 44.82,17.13 "/></svg>
    {:else}
    <svg viewBox="0 0 65.14 49.16"><rect x="20.32" y="16.06" width="24.49" height="2.79"/><rect x="20.32" y="30.31" width="24.49" height="2.79"/></svg>
    {/if}
  </button>
  {/if}
</header>



<style lang="scss">
  :root {
    --height: 6.66rem;

    @media (max-height: 900px) {
      --height: 4.2rem;
    }
  }
  
  header {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    width: 100%;
    
    display: flex;
    justify-content: space-between;

    button {
      background: none;
    }
  }

  footer {
    width: 100%;
    background: var(--highlight);
    padding-bottom: var(--height);
    padding-left: calc(var(--gutter) + 9.66rem);
    margin-bottom: calc(var(--height) * -1);

    &.visible {
      position: fixed;
      top: 100%;
      transform: translateY(-100%);
    }

    a {
      display: block;
      padding: 0.33rem;
    }

    @media (max-height: 900px) {
      padding-left: calc(var(--gutter) + 5rem);
    }
  }

  nav {
    padding: 2rem var(--gutter);

    @media (max-height: 900px) {
      padding: 1.5rem var(--gutter);
    }

    a, p {
      font-size: 2rem;
      line-height: 1;
    }

    a[href="/"] {
      font-size: 3rem;
      line-height: 1;
      font-style: italic;
      font-weight: bold;
      text-decoration: none;
      display: inline-block;
      transform: rotate(-12deg);
      transform-origin: bottom left;

      @media (max-height: 900px) {
        font-size: 2rem;
      }
    }

    p {
      display: inline-block;
      margin-left: calc(var(--gutter) * 2);
      margin-bottom: 0;

      @media (max-height: 900px) {
        font-size: 1rem;
        margin-left: var(--gutter);
      }
    }
  }

  svg {
    width: 64px;
    height: 49px;
    polygon,
    rect {
      fill: black;
    }
  }
</style>