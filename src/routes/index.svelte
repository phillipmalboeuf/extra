<script context="module">

	import { entries } from '$clients/contentful.svelte'

	export async function load({ page, fetch }) {
		const projects = await entries(fetch, 'projet')

		return { props: { projects } }
	}
</script>

<script>
	export let projects
</script>


<!-- <h1>Hello world!</h1> -->

<!-- {#each projects.items as project}
	<h4>{project.fields.titre}</h4>
	<p>{project.fields.introduction}</p>
{/each} -->



<style lang="scss">
	p {
		font-weight: 400;
		font-style: italic;
		font-size: 42px;
		line-height: 1.33;
		transform: rotate(-9deg);
	}
</style>