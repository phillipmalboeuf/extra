<script>
  import { findAsset, findEntry } from '../clients/contentful.js'
  import Introduction from '../components/Introduction.svelte'
  import Portfolio from '../components/Portfolio.svelte'
  import Photo from '../components/Photo.svelte'
  import Text from '../components/Text.svelte'
  import Equipe from '../components/Equipe.svelte'

  export let page
  const contenu = page.item.fields.contenu ? page.item.fields.contenu.map(entry => {
    const e = findEntry(page, entry.sys.id)
    return {
      ...e,
      media: e.fields.media && findAsset(page, e.fields.media.sys.id)
    }
  }) : []
</script>


{#each contenu as entry (entry.sys.id)}
{#if entry.sys.contentType.sys.id === 'introduction'}
<Introduction intro={entry.fields.text} />
{:else if entry.sys.contentType.sys.id === 'portfolio'}
<Portfolio projects={{
  items: entry.fields.projets.map(project => findEntry(page, project.sys.id)),
  includes: page.includes
}} />
{:else if entry.sys.contentType.sys.id === 'photo'}
<Photo photo={entry} />
{:else if entry.sys.contentType.sys.id === 'text'}
<Text text={entry} />
{:else if entry.sys.contentType.sys.id === 'equipe'}
<Equipe equipe={entry} />
{/if}
{/each}

