<script>
  import Picture from '../components/Picture.svelte'
  import Document from '../components/document/index.svelte'

	export let text
</script>

{#key text.sys.id}
<figure class={text.fields.alignment || text.alignment} class:media={text.media}>
  {#if text.media}
	<Picture media={text.media} />
  {/if}
	<figcaption>
		<div>
      {#if text.fields.titre}
			<h1>{text.fields.titre}</h1>
			<h5>{text.fields.descripteur}</h5>
      {/if}
			{#if text.fields.text}
			<Document body={text.fields.text} />
			{/if}
		</div>
    {#if text.details}
		<div>
			{#each text.details as detail}
			<small>
				{detail[0]}<br />
				<span>{detail[1]}</span>
			</small>
			{/each}
		</div>
    {/if}
	</figcaption>
</figure>
{/key}


<style lang="scss">
  h1 {
		font-size: 1.75rem;
		margin-bottom: 0;
	}

	h5 {
		opacity: 0.3;
	}

	figure {
		margin: var(--gutter) 0;
		display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: var(--gutter);

		&.Full {
			grid-template-columns: 1fr 2fr;

			@media (max-width: 900px) {
				grid-template-columns: 1fr 1fr;
			}
		}

		&.Droite {
			:global(picture) {
				grid-column-start: 2;
			}

			figcaption {
				grid-column-start: 3;
			}
		}

		&:not(.media) {
			grid-template-columns: 1fr 1fr 2fr;
		}

		@media (max-width: 900px) {
			grid-template-columns: 1fr 1fr;

			h1,
			h5 {
				font-size: 1rem;
			}

			:global(p) {
				font-size: 0.75rem;
				letter-spacing: -0.02em;
			}

			&.Droite {
				:global(picture) {
					grid-column-start: 2;
				}

				figcaption {
					grid-row-start: 1;
					grid-column-start: 1;
				}
			}

			&:not(.media) {
				grid-template-columns: 1fr;
			}
		}
	}

	small {

		@media (max-width: 900px) {
			font-size: 0.75rem;
			letter-spacing: -0.02em;
		}

		span {
			opacity: 0.3;
		}
	}
</style>