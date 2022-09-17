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
</script>

{#key project.sys.id}
<Hero hero={project.hero} />
<Introduction intro={project.fields.introduction} />

<Text text={{
	...project,
	media: project.thumbnail,
	alignment: 'Full',
	details: project.fields.details && Object.entries(project.fields.details)
}} />

<Contenu page={{
	item: project,
	includes
}} />
{/key}

<nav>
	{#if project.previous}
	<a href="projets/{project.previous.fields.id}">← <span>Projet</span> précédent</a>
	{:else}
	<span>← <span>Projet</span> précédent</span>
	{/if}
	{#if project.next}
	<a href="projets/{project.next.fields.id}"><span>Projet</span> suivant →</a>
	{:else}
	<span><span>Projet</span> suivant →</span>
	{/if}
</nav>



<style lang="scss">
	nav {
		display: flex;
		justify-content: space-around;
		padding: 4vw 4vw 6rem;

		a,
		> span {
			font-size: 1.75rem;

			@media (max-width: 900px) {
				// font-size: 1rem;
				text-transform: capitalize;

				> span {
					display: none;
				}
			}
		}

		> span {
			opacity: 0.3;
		}
	}
</style>