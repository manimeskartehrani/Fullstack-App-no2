<script lang="ts">
	import { cartItems, addToCart, removeFromCart } from '$lib/cart';
	import { get } from 'svelte/store';

	export let product: Product = { id: '', title: '', price: 0 };
	// export let stripId: string[];
	let cart = get(cartItems);

	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];

	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
	});
</script>

<div class="card w-48">
	<header class="card-header">
		<h6>{product.title}</h6>
	</header>
	{#if cartProduct !== undefined}
		<div class="card-body px-4">
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
	{/if}
	<div class="card-body px-4">Price: ${product.price}</div>
	<footer class="card-footer p-4">
		<button class="p-2 rounded variant-glass-primary" on:click={() => addToCart(product.id)}
			>Add</button
		>
		<button class="p-2 rounded variant-glass-error" on:click={() => removeFromCart(product.id)}
			>Remove</button
		>
	</footer>
</div>
