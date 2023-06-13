<script lang="ts">
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import AccordionItem from '$lib/components/AccordionItem.svelte';

	export let data: any;
	$: products = data.items;
</script>

<svelte:head>
	<title>E-Handel Shop</title>
</svelte:head>

<div class="flex justify-center items-center gap-6 m-auto p-5 flex-wrap">
	<a class="hover:underline underline-offset-4" href="/shop/all">All</a>
	<a class="hover:underline underline-offset-4" href="/shop/iphone-cases">E-Zigaretten</a>
	<a class="hover:underline underline-offset-4" href="/shop/airpods-cases">E-Shisha</a>
	<a class="hover:underline underline-offset-4" href="/shop/sleeves">Vapes</a>
	<a class="hover:underline underline-offset-4" href="/shop/cables">Einweg E-Shisha</a>
	<a class="hover:underline underline-offset-4" href="/shop/chargers">Dampfer</a>
</div>

<hr />

<div class="flex flex-col py-8 px-3 lg:flex-row md:px-20">
	<div class="basis-5/6 flex flex-col">
		<div class="grid grid-cols-2 gap-5 md:grid-cols-3">
			{#each products as product}
				<ProductItem
					title={product.name}
					image="{PUBLIC_POCKETBASE_URL}/api/files/{product.collectionName}/{product.id}/{product
						.images[0]}"
					hoverImage={product.images.length > 1
						? `${PUBLIC_POCKETBASE_URL}/api/files/${product.collectionName}/${product.id}/${product.images[1]}`
						: ''}
					price={product.price}
					salePrice={product.sale_price}
					link="/products/{product.slug}"
				/>
			{/each}
		</div>
	</div>
</div>
