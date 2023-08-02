<script lang="ts">
	import { page } from '$app/stores';
	import { emptyCart } from '$lib/stores';

	const url = $page.url;
	emptyCart();
</script>

<svelte:head>
	<title>SwiftMarket Order</title>
</svelte:head>

<div
	class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg flex flex-col items-center"
	role="alert"
>
	<p class="p-20 font-bold text-5xl text-center">Bestellung war erfolgreich!</p>
	<p class="pb-20 text-xl text-center">
		Vielen Dank für Ihren Einkauf bei E-Handel! In kürze erhalten Sie eine E-Mail mit Ihrer
		Bestellung.
	</p>
</div>
