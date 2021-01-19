<script context="module">
	import { entries } from '$clients/contentful.svelte'

	export async function load({ page, fetch }) {
		const locale = page.query.get('locale')
		const projects = await entries(fetch, 'projet', '-fields.date', locale ? { 'en': 'en-CA' }[locale] : undefined)

		return { props: { projects } }
	}
</script>

<script>
  import Portfolio from '$components/Portfolio.svelte'
	export let projects
</script>


<nav>
  <h1>Projets</h1>
  <!-- <a href="/projets">Tous les projets</a> -->
</nav>

<Portfolio {projects} />

<style lang="scss">
	nav {
		margin-bottom: 6rem;
	}
</style>