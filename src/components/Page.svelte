<script>
  import { findAsset, findEntry } from '$clients/contentful.svelte'
  import Picture from '$components/Picture.svelte'
  import Introduction from '$components/Introduction.svelte'
  import Portfolio from '$components/Portfolio.svelte'
  import Hero from '$components/Hero.svelte'

  export let page
  const contenu = page.item.fields.contenu.map(entry => findEntry(page, entry.sys.id))
  const hero = page.item.fields.hero && findAsset(page, page.item.fields.hero.sys.id)
</script>

<!-- <h1>{page.item.fields.titre}</h1> -->

<Hero {hero} />

{#each contenu as entry}
{#if entry.sys.contentType.sys.id === 'introduction'}
<Introduction intro={entry.fields.text} />
{:else if entry.sys.contentType.sys.id === 'portfolio'}
<Portfolio projects={{
  items: entry.fields.projets.map(project => findEntry(page, project.sys.id)),
  includes: page.includes
}} />
{/if}
{/each}

