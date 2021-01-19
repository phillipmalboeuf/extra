<script context="module">

	import { entry } from '$clients/contentful.svelte'

	export async function load({ fetch }) {
		const contact = await entry(fetch, 'contact', '6xck0ECuEVYO6N1UAGCp5D')
		return { props: { contact } }
	}
</script>

<script>
  export let contact
  const fields = Object.entries(contact.item.fields)
</script>

<section>
  <h1>Contact</h1>

  <ul>
    {#each fields as [field, value]}
    <li>
      {#if field === 'adresse'}
      <a href="https://www.google.com/maps/place/{value}" target="_blank">
        {field}<br />
        <span>{value}</span>
      </a>
      {:else if field === 'phone'}
      <a href="tel:{value}" target="_blank">
        Téléphone<br />
        <span>{value}</span>
      </a>
      {:else if field === 'courriel' || field === 'emploi'}
      <a href="mailto:{value}" target="_blank">
        {field}<br />
        <span>{value}</span>
      </a>
      {:else if field === 'suivre'}
      <a href="https://instagram.com/{value}" target="_blank">
        Nous suivre<br />
        <span>@{value}</span>
      </a>
      {:else}
      {field}<br />
      <span>{value}</span>
      {/if}
    </li>
    {/each}
  </ul>
</section>


<style lang="scss">
	section {
		margin: 6rem 0;
		display: grid;
    grid-template-columns: 1fr 5fr;
    column-gap: var(--gutter);
    row-gap: var(--gutter);

    @media (max-height: 900px) {
      grid-template-columns: 1fr;
    }
	}

  h1, ul {
    font-size: 2rem;
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

      @media (max-height: 900px) {
        font-size: 1.333rem;
      }
    }
  }
</style>