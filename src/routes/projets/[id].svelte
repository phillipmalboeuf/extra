<script context="module">
	export function preload({ params }) {
		return this.fetch(`projets/${params.id}.json`).then(r => r.json()).then(({ project, includes }) => {
			return { project, includes }
		})
	}
</script>

<script>
	import Hero from '../../components/Hero.svelte'
	import Introduction from '../../components/Introduction.svelte'
	import Text from '../../components/Text.svelte'
	import Contenu from '../../components/Contenu.svelte'

	export let project
	export let includes
	const details = project.fields.details && Object.entries(project.fields.details)
</script>

{#key project.sys.id}
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
{/key}

<nav>
	{#if project.previous}
	<a href="projets/{project.previous.fields.id}">← Projet précédent</a>
	{:else}
	<span>← Projet précédent</span>
	{/if}
	{#if project.next}
	<a href="projets/{project.next.fields.id}">Projet suivant →</a>
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
			font-size: 1.75rem;

			@media (max-width: 900px) {
				font-size: 1rem;
			}
		}

		span {
			opacity: 0.3;
		}
	}
</style>