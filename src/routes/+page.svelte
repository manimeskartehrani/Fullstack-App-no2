<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { page } from '$app/stores';
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../lib/cart';

	export let data;

	let { products } = data;

	const stripePId = [
		'price_1PV3So07AElcyhPLKtqZyR0q',
		'price_1PV3TO07AElcyhPLd8ZG2K2B',
		'price_1PV3Ut07AElcyhPL3RrBWpBA',
		'price_1PV3VI07AElcyhPLDke2UhQW',
		'price_1PV3Vc07AElcyhPL5pQ79hTR'
	];

	let productsData: any = [];
	// { id: '', name: '', price: '' }

	const creatPruduct = async () => {
		products.forEach((el: any, index: any) => {
			productsData[index] = { id: stripePId[index], title: el.title, price: el.price };
		});
		return productsData;
	};

	page.subscribe(async () => {
		productsData = await creatPruduct();
	});

	async function checkout() {
		await fetch('api/stripeCheckout', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				items: get(cartItems)
			})
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				data.url;
				window.location.replace(data.url);
			});
	}
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="grid grid-cols gap-4">
		<div class="col-span-3">
			<h1>SvelteKit Store</h1>
		</div>
		{#each productsData as product}
			<ProductCard {product} />
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary" on:click={() => checkout()}
				>Checkout with Stripe API</button
			>
		</div>
	</div>
</div>
