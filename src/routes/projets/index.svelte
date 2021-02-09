<script context="module">
	export function preload() {
		return this.fetch(`projets.json`).then(r => r.json()).then(({ projects }) => {
			return { projects }
		})
	}
</script>

<script>
  import Portfolio from '../../components/Portfolio.svelte'
	export let projects
</script>


<nav>
  <h1>Projets</h1>
  <!-- <a href="projets">Tous les projets</a> -->
</nav>

<Portfolio {projects} />

<style lang="scss">
	nav {
		margin-bottom: 6rem;
	}
</style>