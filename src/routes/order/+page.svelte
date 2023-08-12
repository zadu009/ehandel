<script lang="ts">
	import { page } from '$app/stores';
	import { emptyCart, type CartItem } from '$lib/stores';
	import { cartItemsStore } from '$lib/stores';
	import { onMount } from 'svelte';
	const url = $page.url;
	onMount(() => {
		emptyCart();
		return () => console.log('On destroy...');
	});
</script>

<svelte:head>
	<title>E-Handel Order</title>
</svelte:head>

<div
	class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg flex flex-col items-center"
	role="alert"
>
	<p class="p-20 font-bold text-5xl text-center">Bestellung war erfolgreich!</p>
	<p class="pb-20 text-xl text-center">
		Vielen Dank für deinen Einkauf bei E-Handel! In kürze erhälst du eine E-Mail mit deiner
		Bestellung.
	</p>
</div>
