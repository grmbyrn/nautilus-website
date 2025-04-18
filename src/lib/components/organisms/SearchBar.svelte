<script lang="ts">
	import type { BlogPost } from '$lib/utils/types';
	import { createPostsIndex, searchPostsIndex } from '$lib/utils/search';
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/stores/theme';
	import { onMount, onDestroy } from 'svelte';
	import { tick } from 'svelte';

	export let searchTerm = '';
	export let blogPosts: BlogPost[] = [];

	let showInput = true;
	let searchInput: HTMLInputElement | null = null;
	let dropdownOpen = false;

	interface SearchResult {
		slug: string;
		title: string;
		content: string[];
		tags: string[];
	}

	let search: 'loading' | 'ready' = 'loading';
	let results: SearchResult[] = [];

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		searchTerm = input.value;
		dropdownOpen = searchTerm.length > 0;
	}

	function clearSearch() {
		searchTerm = '';
		dropdownOpen = false;
		showInput = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (searchInput && !searchInput.contains(event.target as Node)) {
			dropdownOpen = false;
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			dropdownOpen = false;
		}
	}

	onMount(async () => {
		createPostsIndex(blogPosts);
		search = 'ready';
		if (typeof window !== 'undefined') {
			window.addEventListener('click', handleClickOutside);
			window.addEventListener('keydown', handleKeyDown);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('click', handleClickOutside);
			window.removeEventListener('keydown', handleKeyDown);
		}
	});

	$: {
		if (showInput && searchInput) {
			tick().then(() => {
				searchInput?.focus();
			});
		}
	}

	$: if (search === 'ready') {
		results = searchPostsIndex(searchTerm);
		dropdownOpen = results.length > 0;
	}
</script>

<div class="search-bar-container">
	{#if showInput}
		<div class="input-wrapper">
			<div>
				<input
					type="text"
					placeholder="Type to filter articles..."
					bind:this={searchInput}
					bind:value={searchTerm}
					on:input={handleInput}
				/>
			</div>
			<div>
				{#if $theme === 'dark'}
					<Icon
						icon="heroicons:magnifying-glass-16-solid"
						width="28"
						height="28"
						style="color: #ffffff;"
					/>
				{:else}
					<Icon
						icon="heroicons:magnifying-glass-16-solid"
						width="28"
						height="28"
						style="color: #121212;"
					/>
				{/if}
			</div>
		</div>
	{/if}

	{#if search === 'ready' && dropdownOpen}
		<div class="dropdown">
			{#if results.length > 0}
				<ul>
					{#each results as result}
						<li>
							<a href="/blog/{result.slug}" on:click={clearSearch}>
								<div>
									<div>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										{@html result.title}
									</div>
									<div>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										<p>{@html result.content}</p>
									</div>
								</div>
								<div class="tag-container">
									{#each result.tags as tag}
										{#if tag.toLowerCase().includes(searchTerm.toLowerCase())}
											<!-- eslint-disable-next-line svelte/no-at-html-tags -->
											<p class="tag">{@html tag}</p>
										{/if}
									{/each}
								</div>
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.search-bar-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
	}

	.input-wrapper {
		display: flex;
		justify-content: space-between;
		width: 360px;
		border-radius: 5px;
		padding: 0.5rem;
		border: 1px solid var(--color--border);
		border-radius: 1.5rem;
		outline: none;
		color: var(--color--text);
		background-color: transparent;

		div {
			display: flex;
			align-items: center;
		}
	}

	.input-wrapper input {
		border: none;
		outline: none;
		flex-grow: 1;
		font-size: 1rem;
		background-color: transparent;
		color: var(--color--text);

		&:focus {
			outline: none;
			box-shadow: none;
		}
	}

	.input-wrapper > * {
		padding-inline: 1rem;
	}

	.dropdown {
		position: absolute;
		top: 100%;
		max-width: 400px;
		max-height: 300px;
		overflow-y: auto;
		background-color: var(--color--page-background);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 0 0 4px 4px;
		border: 3px solid var(--color--border);
		z-index: 10;

		/* Webkit Browsers (Chrome, Safari, Edge) */
		&::-webkit-scrollbar {
			width: 6px;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(238, 134, 97, 1);
			border-radius: 10px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: rgba(238, 134, 97, 0.8);
		}

		/* Firefox */
		scrollbar-width: thin;
		scrollbar-color: rgba(238, 134, 97, 1) transparent;
	}

	.dropdown ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.dropdown li {
		padding: 0.5rem;
		border-bottom: 1px solid hsl(220, 10%, 20%);
	}

	.dropdown li:last-child {
		border-bottom: none;
	}

	.dropdown a {
		text-decoration: none;
		display: block;
	}

	.dropdown a:hover {
		background-color: var(--color--page-secondary);
	}

	.dropdown p {
		color: var(--color--text-secondary);
	}

	.tag-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		padding: 5px 15px;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		width: fit-content;
		color: var(--color--text);
	}
</style>
