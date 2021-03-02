<script>
  import Picture from '../components/Picture.svelte'
  export let hero
  export let padded = true
  export let rotated = false
</script>

{#if hero}
<style>:root { --top: 100vh; }</style>
<figure class:padded class:rotated><Picture media={hero} /></figure>
{/if}

<style lang="scss">
  figure {
    margin: calc(-100vh - var(--gutter)) 0 calc(var(--gutter) + 8rem) calc(var(--gutter) * -1);
    width: 100vw;
    // min-height: 100vh;
    background-color: white;

    &.padded {
      padding: var(--gutter);
    }

    &.rotated {
      @media (max-width: 900px) {
        margin: calc(-100vh - var(--gutter)) 0 24rem calc(var(--gutter) * -1);

        transform: rotate(90deg) translateY(-100%);
        transform-origin: top left;
        width: 170vw;
        height: 100vw;

        :global(video) {
          // height: 100vw;
          // object-fit: cover;
        }
      }
    }

    @media (max-width: 900px) {
    margin: calc(-100vh - var(--gutter)) 0 calc(var(--gutter) + 6rem) calc(var(--gutter) * -1);

      :global(img) {
        min-height: 33vh;
        object-fit: cover;
      }
    }
  }
</style>