<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { cartItemsStore } from '$lib/stores';
	import type { CartItem } from '$lib/stores';
	import { currentUser } from '$lib/stores/user';

	let cartItemsValue: CartItem[];
	let orders: CartItem[];
	let user;
	let recipient = 's.durrani@web.de';
	let msgBody = 'hallo wie Gehts?';
	let subject = 'Ihre Bestellung von Svelte Ehandel';
	export async function getOrders() {
		const unsubscribe = cartItemsStore.subscribe((value) => {
			cartItemsValue = value;
		});
		const res = await fetch('https://mailservice-production.up.railway.app/sendMail', {
			method: 'POST',
			body: JSON.stringify({
				recipient: $currentUser?.email,
				msgBody,
				subject,
				orders: $cartItemsStore,
				user: $currentUser
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		});
		goto('/order');
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="flex items-center justify-center relative isolate overflow-hidden py-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none">
			<div class="w-full max-w-md space-y-8">
				<div>
					<h1 class="text-center text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight">
						Bezahlvorgang
					</h1>
				</div>
				<div class="text-sm">
					<p class="mt-2 text-center text-sm text-gray-600">Bitte Bezahlmethode auswählen</p>
				</div>
				<form
					method="POST"
					class="card"
					use:enhance={() => {
						return async ({ result }) => {
							pb.authStore.loadFromCookie(document.cookie);
							await applyAction(result);
						};
					}}
				>
					<label>
						<input type="radio" name="amount" value="vorkasse" checked="checked" /> Vorkasse
					</label>
				</form>
				<button
					on:click={getOrders}
					class="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
					>Jetzt Kaufen</button
				>
			</div>
		</div>
	</div>
</div>
