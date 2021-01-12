<script>
  import { findAsset, findEntry } from '$clients/contentful.svelte'
  import Picture from '$components/Picture.svelte'
  import Introduction from '$components/Introduction.svelte'

  export let page
  const contenu = page.item.fields.contenu.map(entry => findEntry(page, entry.sys.id))
  const hero = page.item.fields.hero && findAsset(page, page.item.fields.hero.sys.id)
</script>

<!-- <h1>{page.item.fields.titre}</h1> -->

{#if hero}
<style>:root { --top: 100vh; }</style>
<figure><Picture media={hero} /></figure>
{/if}

{#each contenu as entry}
{#if entry.sys.contentType.sys.id === 'introduction'}
<Introduction intro={entry} />
{/if}
{/each}

<style lang="scss">
  figure {
    margin: calc(-100vh - 2vw) 0 0 -2vw;
    width: 100vw;
    min-height: 100vh;
    background-color: white;
  }
</style>