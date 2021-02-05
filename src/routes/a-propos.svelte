<script context="module">
	export function preload() {
		return this.fetch(`a-propos.json`).then(r => r.json()).then(({ page }) => {
			return { page }
		})
	}
</script>

<script>
	import Page from '../components/Page.svelte'
	export let page
</script>

<section>
	<Page {page} />
</section>