<script context="module">

	import { entry, asset } from '$clients/contentful.svelte'

	const heroes = [
		'2jBoCTNlJn92VihclDOSlw',
		'4as6R4rcnE5iLVTXsarPwV',
		'4w9bzCRAGxu97BIhuwwnM4'
	]

	export async function load({ fetch }) {
		const page = await entry(fetch, 'page', '2ZqXhnyr1p8XcClBDO3Lss')
		const hero = await asset(fetch, heroes[parseInt(Math.floor(Math.random() * 3))])

		return { props: { page, hero } }
	}
</script>

<script>
	import Page from '$components/Page.svelte'
	export let page
	export let hero
</script>

<section>
	<Page {page} padded={false} heroOverride={hero} />
</section>