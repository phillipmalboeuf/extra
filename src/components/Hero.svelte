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
      margin: calc(-100vh - var(--gutter)) 0 24rem;

      transform: rotate(90deg) translateY(-100%);
      transform-origin: top left;
      width: 100vh;
      height: calc(100vw - var(--gutter));
    }
  }
</style>