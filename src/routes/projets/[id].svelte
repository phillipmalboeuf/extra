<script context="module">
	import { entries, findAsset, findEntry } from '$clients/contentful.svelte'

	export async function load({ page, fetch }) {
		const projects = await entries(fetch, 'projet')

		return { props: { project: projects.items.filter(item => item.fields.id === page.params.id)
      .map(item => ({
        ...item,
        thumbnail: findAsset(projects, item.fields.thumbnail.sys.id),
				hero: item.fields.hero && findAsset(projects, item.fields.hero.sys.id),
				contenu: item.fields.contenu.map(entry => {
					const e = findEntry(projects, entry.sys.id)
					return {
						...e,
						media: e.fields.media && findAsset(projects, e.fields.media.sys.id)
					}
				})
      }))[0] } }
	}
</script>

<script>
  import Picture from '$components/Picture.svelte'
	import Hero from '$components/Hero.svelte'
	import Introduction from '$components/Introduction.svelte'
	import Photo from '$components/Photo.svelte'
	import Document from '$components/document/index.svelte'

	export let project
	const details = project.fields.details && Object.entries(project.fields.details)
</script>


<Hero hero={project.hero} />
<Introduction intro={project.fields.introduction} />

<figure>
	<Picture media={project.thumbnail} />
	<figcaption>
		<div>
			<h1>{project.fields.titre}</h1>
			<h5>{project.fields.descripteur}</h5>
			{#if project.fields.text}
			<Document body={project.fields.text} />
			{/if}
		</div>
		<div>
			{#each details as detail}
			<small>
				{detail[0]}<br />
				<span>{detail[1]}</span>
			</small>
			{/each}
		</div>
	</figcaption>
</figure>

{#each project.contenu as entry}
{#if entry.sys.contentType.sys.id === 'introduction'}
<Introduction intro={entry.fields.text} />
{:else if entry.sys.contentType.sys.id === 'photo'}
<Photo photo={entry} />
{/if}
{/each}



<style lang="scss">
	h1 {
		font-size: 2rem;
		margin-bottom: 0;
	}

	h5 {
		opacity: 0.3;
	}

	figure {
		margin: 0;
		display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2vw;
	}

	small {

		span {
			opacity: 0.3;
		}
	}
</style>