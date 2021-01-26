
<script>
  export let intro
</script>

<article>
	<div></div>
	<p>{intro}</p>
</article>

<style lang="scss">
	p {
		position: relative;
		font-weight: 400;
		font-style: italic;
		font-size: 3rem;
		line-height: 1.33;
		margin-bottom: 6rem;
		transform: rotate(-12deg);
		transform-origin: top left;
		hyphens: auto;

		@media (max-width: 900px) {
			font-size: 1.5rem;
			transform: none;
		}
	}

	div {
		float: right;
		shape-outside: polygon(0 0, 100% 0, 100% 100%);
		width: 100%;
		height: 20vw;
		transform: rotate(-12deg);
		transform-origin: top left;
	}

	article {
		overflow: hidden;
	}
</style>