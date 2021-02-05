<script context="module">
	export function preload() {
		return this.fetch(`index.json`).then(r => r.json()).then(({ page, hero }) => {
			return { page, hero }
		})
	}
</script>

<script>
	import Page from '../components/Page.svelte'
	export let page
	export let hero
</script>

<section>
	<Page {page} padded={false} heroOverride={hero} />
</section>