<script lang="ts">
	import TextBlock from '$lib/components/atoms/TextBlock.svelte';
	import HomeCard from '$lib/components/atoms/HomeCard.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';

	import AiBuddyAssistant from '$lib/icons/aiBuddyAssistant.svelte';
	import Torrust from '$lib/icons/torrust.svelte';
</script>

<HomeWrapper>
	<div class="container">
		<div class="text-container">
			<TextBlock
				heading={'Tech and projects'}
				content={'With our work and time we want to achieve the greatest possible value. With this in mind we choose to pioneer with our approach in new technology areas and grow projects where we can make an impact with.'}
			/>
		</div>
		<div class="cards">
			<HomeCard
				title={'AI Buddy Assistant'}
				content={'Command line AI assistant base module and the necessary infrastructure to train and expand it, with additional AI modules.'}
				svg={AiBuddyAssistant}
				tags={['AI', 'ML', 'Open source', 'In-house project']}
			/>
			<HomeCard
				title={'Torrust'}
				content={'Highly efficient Torrent indexing and tracking server solution written in Rust for private hosting and operation.'}
				svg={Torrust}
				tags={['Rust', 'Open source', 'Sponsored project']}
			/>
		</div>
		<a href="/projects">Learn more about our in-house projects</a>
	</div>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.container {
		margin: 4rem auto 0;
		background-color: var(--color--page-secondary);
		padding-bottom: 6rem;
		max-width: 100%;
	}

	.text-container {
		color: var(--color--text);
		background-color: var(--color--page-secondary);
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 2rem;
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 3rem 1.5rem 0 1.5rem !important;
	}

	.text-container,
	.cards {
		max-width: 1200px;
		margin: 0 auto;
	}

	a {
		color: rgba(238, 134, 97, 1);
		display: block;
		text-align: center;
		margin-top: 3rem;
	}

	@include bp.for-tablet-portrait-up {
		.cards {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
			grid-column-gap: 1.5rem;
			grid-row-gap: 1.5rem;
			padding: 0rem;
			background-color: var(--color--page-secondary);
		}
	}
</style>
