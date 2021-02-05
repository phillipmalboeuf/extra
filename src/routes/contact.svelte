<script context="module">
  export function preload() {
		return this.fetch(`contact.json`).then(r => r.json()).then(({ contact }) => {
			return { contact }
		})
	}
</script>

<script>
  export let contact
  const fields = Object.entries(contact.item.fields)
</script>

<figure>
  <svg viewBox="0 0 876.4 768">
    <path d="M680.99,237.96L536.48,369.74l226.4,34.74l-214.66,36.57l103.87,70.56l-96.6-33.53l90.7,125.67l-124.03-77.08
      c0,0,30.54,128.94,30.54,130.99c0,2.05-88.32-132.78-88.32-132.78l-45.15,150.88l-46.86-127.52l-87.02,93.83l41.58-131.92
      L141.46,631.04l131.7-166L145.2,489.1l147.33-63.83l-169.08-56.96l139.11-19.19l-150.03-98.87l182.95,50.52l-150.28-187
      l150.05,121.89l-2.56-93.23l73.54,131.24L397.1,95.34l32.93,146.72l71.48-113.97l-48.21,135.52l184.01-135.52L526.63,272.91
      L680.99,237.96z"/>
  </svg>
</figure>


<section>
  <h1>Contact</h1>

  <ul>
    {#each fields as [field, value]}
    {#if value}
    <li>
      {#if field === 'adresse'}
      <a href="https://www.google.com/maps/place/{value}" target="_blank">
        <strong>{field}</strong><br />
        <span>{value}</span>
      </a>
      {:else if field === 'phone'}
      <a href="tel:{value}" target="_blank">
        <strong>Téléphone</strong><br />
        <span>{value}</span>
      </a>
      {:else if field === 'courriel' || field === 'emploi'}
      <a href="mailto:{value}" target="_blank">
        <strong>Courriel / Emploi</strong><br />
        <span>{value}</span>
      </a>
      {:else if field === 'suivre'}
      <a href="https://instagram.com/{value}" target="_blank">
        <strong>Nous suivre</strong><br />
        <span>@{value}</span>
      </a>
      {:else}
      <strong>{field}</strong><br />
      <span>{value}</span>
      {/if}
    </li>
    {/if}
    {/each}
  </ul>
</section>


<style lang="scss">
	section {
    position: relative;
    z-index: 1;
		margin: 0 0 6rem;
		display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    column-gap: var(--gutter);
    row-gap: var(--gutter);

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
	}

  figure {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 120vh;
    overflow: hidden;
    margin: 0;

    svg {
      width: 188vw;
      height: 188vw;
      transform: translate(-50%, -25%);

      @media (max-width: 900px) {
        width: 188vh;
        height: 188vh;
        transform: translate(-40%, -25%);
      }

      path {
        fill: var(--highlight);
      }
    }
  }

  h1, ul {
    font-size: 1.75rem;
    line-height: 1.222;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: var(--gutter);
      text-transform: capitalize;
      word-break: break-all;
    }

    span {
      opacity: 0.3;
      text-transform: none;

      @media (max-width: 900px) {
        font-size: 1.333rem;
      }
    }

    strong {
      font-weight: normal;
    }
  }

  a:hover,
  a:focus {
    opacity: 1;

    span {
      opacity: 1;
    }
  }
</style>