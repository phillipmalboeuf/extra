<script context="module">
	import { entries, findAsset } from '$clients/contentful.svelte'

	export async function load({ page, fetch }) {
		const projects = await entries(fetch, 'projet')

		return { props: { projects: projects.items.map(item => ({
      ...item,
      thumbnail: findAsset(projects, item.fields.thumbnail.sys.id)
    })) } }
	}
</script>

<script>
  import Picture from '$components/Picture.svelte'

	export let projects
</script>


<nav>
  <h1>Projets</h1>
  <a href="/projets">Tous les projets</a>
</nav>

<ol>
{#each projects as project}
  <li>
    <figure class:horizontal={project.thumbnail.fields.file.details.image.width > project.thumbnail.fields.file.details.image.height}>
      <figcaption>
        <a href="/projets/{project.fields.id}">
          <h4>{project.fields.titre}</h4>
          <p>{project.fields.introduction}</p>
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