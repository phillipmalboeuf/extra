<script context="module">

	import { entry } from '$clients/contentful.svelte'

	export async function load({ fetch }) {
		const page = await entry(fetch, 'page', '2ZqXhnyr1p8XcClBDO3Lss')
		return { props: { page } }
	}
</script>

<script>
	import Page from '$components/Page.svelte'
	export let page
</script>

<section>
	<Page {page} padded={false} />
</section>