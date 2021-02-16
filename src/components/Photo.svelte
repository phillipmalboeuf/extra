<script>
  import Picture from '../components/Picture.svelte'
  import Document from '../components/document/index.svelte'
  import Introduction from '../components/Introduction.svelte'

	export let photo
</script>



<figure class:titled={photo.fields.titre || photo.fields.caption} class:described={photo.fields.description}>
  {#if photo.fields.titre || photo.fields.caption}
  <figcaption>
    {#if photo.fields.titre}<Introduction intro={photo.fields.titre} />{/if}
    {#if photo.fields.caption}<small>{photo.fields.caption}</small>{/if}
  </figcaption>
  {:else if photo.fields.description}
  <div></div>
  {/if}
  {#if photo.fields.description}
  <figcaption>
    <Document body={photo.fields.description} />
  </figcaption>
  {/if}
  <Picture media={photo.media} />
</figure>


<style lang="scss">
  figure {
    margin: var(--gutter) 0;

    &.titled,
    &.described {
      display: grid;
      grid-template-columns: 1fr 3fr;
      column-gap: var(--gutter);
    }

    &.described {
      grid-template-columns: 1fr 1fr 1fr;

      @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;

        > div {
          display: none;
        }
      }
    }
  }
</style>