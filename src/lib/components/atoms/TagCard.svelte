<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';

	interface Props {
		additionalClass?: string | undefined;
		href?: string | undefined;
		target?: '_self' | '_blank';
		rel?: string;
		image?: import('svelte').Snippet;
		content?: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let {
		additionalClass = undefined,
		href = undefined,
		target = undefined,
		rel = undefined,
		image,
		content,
		footer,
		...rest
	}: Props = $props();

	const isExternalLink = !!href && HttpRegex.test(href);

	target = isExternalLink ? '_blank' : '_self';
	rel = isExternalLink ? 'noopener noreferrer' : undefined;

	let tag = $derived(href ? 'a' : 'article');
	let linkProps = $derived({
		href,
		target,
		rel
	});
</script>

<svelte:element
	this={tag}
	class="card {additionalClass}"
	{...linkProps}
	data-sveltekit-preload-data
	{...rest}
>
	{#if image}
		<div class="image">
			{@render image?.()}
		</div>
	{/if}
	<div class="body">
		<div class="content">
			{@render content?.()}
		</div>
		{#if footer}
			<div class="footer">
				{@render footer?.()}
			</div>
		{/if}
	</div>
</svelte:element>

<style lang="scss">
	.card {
		background: var(--color--card-background);
		box-shadow: var(--card-shadow);
		color: var(--color--text);
		border-radius: 10px;
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		text-decoration: none;
		border: 1px solid var(--color--border);
		max-width: 872px;
		margin: 0 auto;

		&[href],
		&[onclick] {
			cursor: pointer;
			&:hover {
				box-shadow: var(--card-shadow-hover);
				transform: scale(1.01);
			}
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px 20px;
		flex: 1 0 50%;
		background-color: var(--color--card-background);
		color: var(--color--text);

		.content {
			display: flex;
			flex-direction: column;
			flex: 1;
			color: var(--color--text);
		}
	}

	.image {
		position: relative;
		flex: 1 0 max(50%, 330px);
		// height: min(100%, 300px);
		min-height: 280px;
		max-height: 350px;
	}

	:global(.card [slot='image']) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
</style>
