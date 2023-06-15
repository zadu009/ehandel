<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let data: any;
	let showcase = data.showcase;
	let banners = data.carousels;
</script>

<svelte:head>
	<title>E-Handel</title>
</svelte:head>

{#if banners.length !== 0}
	<Carousel {banners} />
{/if}

<div class="mx-3 md:mx-10">
	<section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 lg:mb-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
					Onlineshop für VAPES!
				</h1>
				<p class="mt-4 text-lg lg:pl-3">
					Vapes sind kein Hype, sie sind eine Passion! Wenn du schon auf den Geschmack von Einweg
					E-Zigaretten gekommen bist, dann fühlst du dich bei uns wie im E-Shisha Wunderland! Denn
					wir führen ein breites Sortiment an Vapes mit als auch ohne Nikotin und erweitern dieses
					für euch stetig!
				</p>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 text-lg">
					Eine Einweg E-Zigarette ist eine Art von elektronischer Zigarette, die nicht nachgefüllt
					werden kann und in der Regel nur für den einmaligen Gebrauch gedacht ist. Sie besteht aus
					einem Akku, einem Verdampfer und einer vorinstallierten Kartusche mit Liquid. Sobald das
					Liquid aufgebraucht ist oder der Akku leer wird, muss die gesamte Einheit entsorgt werden.
					Diese Art von E-Zigaretten sind oft sehr einfach zu bedienen und erfordern keine
					Vorkenntnisse im Umgang mit elektronischen Geräten oder dem Nachfüllen von Liquids.
					Allerdings können sie auch teurer sein als wiederverwendbare Modelle auf lange Sicht, da
					man immer wieder neue kaufen muss anstatt nur einzelne Komponenten auszutauschen oder
					nachzufüllen.
				</p>
			</div>
		</div>
	</section>

	{#each showcase as showsection}
		<h2 class="text-center font-extrabold text-6xl pt-20 pb-12 uppercase">{showsection.name}</h2>

		<div class="grid gap-12 grid-cols-2 lg:grid-cols-4">
			{#each showsection.expand.products as product (product.id)}
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
	{/each}
</div>
<br /><br />
