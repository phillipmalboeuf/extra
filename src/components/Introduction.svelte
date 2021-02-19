
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
		width: 90%;
		font-weight: 400;
		font-style: italic;
		font-size: 3rem;
		line-height: 1.33;
		margin: 16rem 0;
		transform: rotate(-12deg);
		transform-origin: top left;
		hyphens: auto;

		@media (max-width: 900px) {
			font-size: 1.75rem;
			font-style: normal;
			transform: none;
			margin: 4rem 0 10rem;
			width: 100%;
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