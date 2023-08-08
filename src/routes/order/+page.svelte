<script lang="ts">
	import { page } from '$app/stores';
	import { emptyCart } from '$lib/stores';
	import { cartItemsStore, removeFromCart, type CartItem } from '$lib/stores';

	const url = $page.url;
	emptyCart();
	import { onMount } from 'svelte';

	onMount(() => {
		getOrders();
		return () => console.log('On destroy...');
	});

	let recipient = 's.durrani@web.de';
	let msgBody = 'hallo wie Gehts?';
	let subject = 'Ihre Bestellung von Svelte Ehandel';
	export async function getOrders() {
		const res = await fetch('https://mailservice-production.up.railway.app/sendMail', {
			method: 'POST',
			body: JSON.stringify({
				recipient,
				msgBody,
				subject
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		});
		const data = await res.json();
		console.log(data);
	}
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
