<script>
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Cart from '$lib/components/Cart.svelte';
	import { pb } from '$lib/pocketbase';
	import { cartItemsStore } from '$lib/stores';
	import { currentUser } from '$lib/stores/user';

	let cartOpened = false;
</script>

<nav class="bg-[#282828] text-white">
	<div class="mx-auto lg:px-8">
		<div class="flex justify-between items-center py-4">
			<div>
				<a class="mx-5 font-extrabold text-xl" href="/">E-Handel</a>
			</div>
			<div class="flex items-center gap-6 m-auto">
				<a class="hover:underline underline-offset-4" href="/shop/all">Shop</a>
				<a class="hover:underline underline-offset-4" href="#!">Kontakt</a>
				{#if $currentUser}
					<form
						method="POST"
						action="/logout"
						use:enhance={() => {
							return async ({ result }) => {
								pb.authStore.clear();
								await applyAction(result);
							};
						}}
					>
						<button>Log out</button>
					</form>
				{:else}
					<a class="hover:underline underline-offset-4" href="/login">Login</a>
				{/if}
			</div>
			<div class="flex mx-5 gap-6">
				<button class="relative" aria-label="Cart" on:click={() => (cartOpened = !cartOpened)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					{#if $cartItemsStore.length !== 0}
						<span class="absolute inset-0 object-right-top ml-3">
							<div
								class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white"
							>
								{$cartItemsStore.length}
							</div>
						</span>
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>
{#if cartOpened}
	<Cart bind:cartOpened />
{/if}
