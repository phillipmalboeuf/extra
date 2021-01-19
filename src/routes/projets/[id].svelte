<script context="module">
	import { entries, findAsset, findEntry } from '$clients/contentful.svelte'

	export async function load({ page, fetch }) {
		const projects = await entries(fetch, 'projet', '-fields.date')
		let i

		return {
			props: {
				project: projects.items.filter((item, index) => {
					if (item.fields.id === page.params.id) {
						i = index
						return true
					}
					return false
				})
					.map(item => ({
						...item,
						thumbnail: findAsset(projects, item.fields.thumbnail.sys.id),
						hero: item.fields.hero && findAsset(projects, item.fields.hero.sys.id),
						next: i < projects.items.length && projects.items[i + 1],
						previous: i > 0 && projects.items[i - 1]
					}))[0],
				includes: projects.includes
			}
		}
	}
</script>

<script>
	import Hero from '$components/Hero.svelte'
	import Introduction from '$components/Introduction.svelte'
	import Text from '$components/Text.svelte'
	import Contenu from '$components/Contenu.svelte'

	export let project
	export let includes
	const details = project.fields.details && Object.entries(project.fields.details)
</script>


<Hero hero={project.hero} />
<Introduction intro={project.fields.introduction} />

<Text text={{
	...project,
	media: project.thumbnail,
	alignment: 'Full',
	details
}} />

<Contenu page={{
	item: project,
	includes
}} />

<nav>
	{#if project.previous}
	<a href="/projets/{project.previous.fields.id}">← Projet précédent</a>
	{:else}
	<span>← Projet précédent</span>
	{/if}
	{#if project.next}
	<a href="/projets/{project.next.fields.id}">Projet suivant →</a>
	{:else}
	<span>Projet suivant →</span>
	{/if}
</nav>



<style lang="scss">
	nav {
		display: flex;
		justify-content: space-around;
		padding: 4vw 4vw 6vw;

		a,
		span {
			font-size: 2rem;

			@media (max-height: 900px) {
				font-size: 1rem;
			}
		}

		span {
			opacity: 0.3;
		}
	}
</style>