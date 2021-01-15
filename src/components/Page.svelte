<script>
  import { findAsset, findEntry } from '$clients/contentful.svelte'
  import Contenu from '$components/Contenu.svelte'
  import Hero from '$components/Hero.svelte'

  export let page
  const hero = page.item.fields.hero && findAsset(page, page.item.fields.hero.sys.id)
</script>

<!-- <h1>{page.item.fields.titre}</h1> -->

<Hero {hero} />

<Contenu page={page} />

