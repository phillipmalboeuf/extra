<script>
  import Picture from '$components/Picture.svelte'
  export let hero
  export let padded = true
</script>

{#if hero}
<style>:root { --top: 100vh; }</style>
<figure class:padded><Picture media={hero} /></figure>
{/if}

<style lang="scss">
  figure {
    margin: calc(-100vh - var(--gutter)) 0 var(--gutter) calc(var(--gutter) * -1);
    width: 100vw;
    // min-height: 100vh;
    background-color: white;

    &.padded {
      padding: var(--gutter);
    }
  }
</style>