<script>
	import { goto } from '$app/navigation';
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="grid grid-cols gap-4">
		<div class="col-span-3">
			<h1>Sorry, We miss you. Maybe next time.</h1>
		</div>
		<button class="btn variant-glass-secondary" on:click={() => goto('./localhost:5175')}
			>Start Over</button
		>
	</div>
</div>
