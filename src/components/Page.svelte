<script>
  import { findAsset, findEntry } from '../clients/contentful.js'
  import Contenu from '../components/Contenu.svelte'
  import Hero from '../components/Hero.svelte'

  export let page
  export let padded = undefined
  export let heroOverride = undefined
  const hero = heroOverride || (page.item.fields.hero && findAsset(page, page.item.fields.hero.sys.id))
</script>

<Hero {hero} {padded} rotated={heroOverride} />

<Contenu page={page} />

