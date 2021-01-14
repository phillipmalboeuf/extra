<script>
  import { findAsset, findEntry } from '$clients/contentful.svelte'
  import Picture from '$components/Picture.svelte'

	export let projects
  const items = projects.items.map(item => ({
    ...item,
    thumbnail: findAsset(projects, item.fields.thumbnail.sys.id)
  }))
</script>

<ol>
{#each items as project}
  <li>
    <figure class:horizontal={project.thumbnail.fields.file.details.image.width > project.thumbnail.fields.file.details.image.height}>
      <figcaption>
        <a href="/projets/{project.fields.id}">
          <h5>{project.fields.titre}</h5>
          <p>{project.fields.descripteur}</p>
        </a>
      </figcaption>
      <a href="/projets/{project.fields.id}">
        <Picture media={project.thumbnail} small />
      </a>
    </figure>
  </li>
{/each}
</ol>



<style lang="scss">
  h5, p {
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
  }

  p {
    opacity: 0.3;
  }

  ol {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2vw;
  }

    li figure {
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2vw;

      &.horizontal {
        grid-template-columns: 1fr 2fr;
      }
    }
</style>