
<script>
  export let intro

	let height
</script>

{#if height}
<div style="height: {height*0.75}px;"></div>
{/if}
<p bind:offsetHeight={height}>{intro.fields.text}</p>

<style lang="scss">
	p {
		position: relative;
		font-weight: 400;
		font-style: italic;
		font-size: 42px;
		line-height: 1.33;
		margin-bottom: 6rem;
		transform: rotate(-12deg);
		transform-origin: top left;
		hyphens: auto;
	}

	div {
		float: right;
		shape-outside: polygon(0 0, 100% 0, 100% 100%);
		width: 100%;
		transform: rotate(-12deg);
		transform-origin: top left;
	}
</style>