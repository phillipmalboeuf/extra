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
    <a href="/projets/{project.fields.id}">
    <figure class:horizontal={project.thumbnail.fields.file.details.image.width > project.thumbnail.fields.file.details.image.height}>
      <figcaption>
          <h5>{project.fields.titre}</h5>
          <p>{project.fields.descripteur}</p>
      </figcaption>
      <Picture media={project.thumbnail} small ar={project.thumbnail.fields.file.details.image.width > project.thumbnail.fields.file.details.image.height ? 0.6 : 1.666} />
    </figure>
    </a>
  </li>
{/each}
</ol>



<style lang="scss">
  h5, p {
    font-size: 2rem;
    font-weight: normal;
    margin: 0;

    @media (max-width: 900px) {
      font-size: 1rem;
    }
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
    column-gap: var(--gutter);
    row-gap: 3rem;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

    li figure {
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: var(--gutter);

      &.horizontal {
        grid-template-columns: 1fr 2fr;
      }
    }

  a:hover,
  a:focus {
    h5 {
      opacity: 0.3;
    }

    :global(img) {
      opacity: 0.88;
    }
  }
</style>