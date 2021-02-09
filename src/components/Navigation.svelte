<script>
  import { onMount, getContext } from 'svelte'
  import { fade, fly } from 'svelte/transition'

  export let path
  
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

    document.getElementById('main').addEventListener('click', () => visible = false, { passive: true, capture: false })
	})

  function click(e) {
    visible = false
    path = e.currentTarget.href
  }
</script>

<div bind:this={footer}>
{#if visible}
<footer class="visible" transition:fly={{ y: 100 }}>
  <nav>
    <a class:active={path.includes('/projets')} href="projets" on:click={click}>{locale === 'en' ? 'Projects' : 'Projets'}</a>
    <a class:active={path.includes('/a-propos')} href="a-propos" on:click={click}>{locale === 'en' ? 'About us' : 'À propos'}</a>
    <a class:active={path.includes('/contact')} href="contact" on:click={click}>{locale === 'en' ? 'Contact' : 'Contact'}</a>
    <a rel=external href={locale === 'en' ? '/' : '/en'}>{locale === 'en' ? 'Français' : 'English'}</a>
  </nav>
</footer>
{:else}
<footer>
  <nav>
    <a class:active={path.includes('/projets')} href="projets" on:click={click}>{locale === 'en' ? 'Projects' : 'Projets'}</a>
    <a class:active={path.includes('/a-propos')} href="a-propos" on:click={click}>{locale === 'en' ? 'About us' : 'À propos'}</a>
    <a class:active={path.includes('/contact')} href="contact" on:click={click}>{locale === 'en' ? 'Contact' : 'Contact'}</a>
    <a rel=external href={locale === 'en' ? '/' : '/en'}>{locale === 'en' ? 'Français' : 'English'}</a>
  </nav>
</footer>
{/if}
</div>

<header>
  <nav>
    <a class="logo" href="/{locale ? `${locale}` : ''}" on:click={click}>
      Extra
    </a>
    <p>
      Architecture<br/>& Design
    </p>
  </nav>
  {#if scrolled && !visible}
  <button on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <svg viewBox="0 0 65.14 49.16"><rect x="22.72" y="15.35" width="19.69" height="2.79"/><polygon points="42.22,28.69 32.57,19.04 22.92,28.69 24.9,30.66 31.02,24.53 31.02,34.65 34.12,34.65 34.12,24.53 
	40.24,30.66 "/></svg>
  </button>
  {:else}
  <button on:click={() => visible = !visible}>
    {#if visible}
    <svg viewBox="0 0 65.14 49.16"><rect x="20.32" y="23.19" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.8412 30.2298)" class="st0" width="24.49" height="2.79"/><rect x="31.18" y="12.33" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.8412 30.2298)" class="st0" width="2.79" height="24.49"/></svg>
    {:else}
    <svg viewBox="0 0 65.14 49.16"><rect x="22.96" y="15.98" width="19.69" height="2.79"/><rect x="22.96" y="30.24" width="19.69" height="2.79"/></svg>
    {/if}
  </button>
  {/if}
</header>



<style lang="scss">
  :root {
    --height: 8.88rem;

    @media (max-width: 900px) {
      --height: 6.66rem;
    }
  }
  
  header {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button {
      background: none;
      padding: 1rem 0;
    }

    nav {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 6fr;
      column-gap: var(--gutter);
    }
  }

  footer {
    width: 100%;
    background: var(--highlight);
    padding-bottom: var(--height);
    padding-left: calc(var(--gutter) * 7.75);
    margin-bottom: calc(var(--height) * -1);

    &.visible {
      position: fixed;
      top: 100%;
      transform: translateY(-100%);
    }

    a {
      display: block;
      // padding: 0.2rem 0;

      &:last-child {
        margin-bottom: 10vh;
      }
    }

    @media (max-width: 900px) {
      padding-left: calc(var(--gutter) + 5rem);
    }
  }

  nav {
    padding: 2rem 0;

    @media (max-width: 900px) {
      padding: 1.5rem 0;
    }

    a, p {
      font-size: 1.75rem;
      line-height: 1.222;
    }

    a.active {
      opacity: 0.3;
    }

    a.logo {
      font-size: 3rem;
      line-height: 1;
      font-style: italic;
      font-weight: bold;
      text-decoration: none;
      display: inline-block;
      transform: rotate(-12deg);
      margin-left: var(--gutter);

      @media (max-width: 900px) {
        font-size: 1.75rem;
      }
    }

    p {
      display: inline-block;
      margin-bottom: 0;

      @media (max-width: 900px) {
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