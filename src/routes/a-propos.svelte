<script context="module">

	import { entry } from '$clients/contentful.svelte'

	export async function load({ fetch }) {
		const page = await entry(fetch, 'page', 'LmCTtqL9YXrY9sNtl6E4p')
		return { props: { page } }
	}
</script>

<script>
	import Page from '$components/Page.svelte'
	export let page
</script>

<section>
	<Page {page} />
</section>