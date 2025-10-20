<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div class={`container ${className}`}>
	{@render children()}
</div>

<style>
	.container {
		color: rgba(245, 245, 245, 0.96);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		background-color: var(--color--page-background);
	}
</style>
