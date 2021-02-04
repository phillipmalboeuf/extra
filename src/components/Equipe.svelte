<script>
	export let equipe
  const members = equipe.fields.membres && Object.entries(equipe.fields.membres)
</script>


<section>
  <h2>{equipe.fields.titre}</h2>

  <ul>
    {#each members as member}
    <li>
      {member[0]}<br />
      <span>{member[1]}</span>
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

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
	}

  h2, ul {
    font-size: 1.75rem;
    line-height: 1.222;

    @media (max-width: 900px) {
      font-size: 1.33rem;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--gutter);
    row-gap: var(--gutter);

    span {
      opacity: 0.3;
    }
  }
</style>