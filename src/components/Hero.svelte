<script>
  import Picture from '$components/Picture.svelte'
  export let hero
</script>

{#if hero}
<style>:root { --top: 100vh; }</style>
<figure><Picture media={hero} /></figure>
{/if}

<style lang="scss">
  figure {
    margin: calc(-100vh - 2vw) 0 0 -2vw;
    width: 100vw;
    min-height: 100vh;
    background-color: white;
  }
</style>