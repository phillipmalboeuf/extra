<script context="module">
	import { entries, findAsset } from '$clients/contentful.svelte'

	export async function load({ page, fetch }) {
		const projects = await entries(fetch, 'projet')

		return { props: { project: projects.items.filter(item => item.fields.id === page.params.id)
      .map(item => ({
        ...item,
        thumbnail: findAsset(projects, item.fields.thumbnail.sys.id)
      }))[0] } }
	}
</script>

<script>
  import Picture from '$components/Picture.svelte'

	export let project
</script>


<h1>{project.fields.titre}</h1>


<style lang="scss">
</style>