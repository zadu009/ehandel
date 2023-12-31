import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params, locals }) => {
	try {
		if (params.slug === 'all') {
			const productsRecords = await locals.pb.collection('products').getList(1, 50, {
				sort: '-created'
			});

			return JSON.parse(JSON.stringify(productsRecords));
		}

		const category = await locals.pb
			.collection('categories')
			.getFirstListItem(`slug="${params.slug}"`);

		const productsRecords = await locals.pb.collection('products').getList(1, 50, {
			filter: `categories ~ "${category.id}"`,
			sort: '-created'
		});

		return JSON.parse(JSON.stringify(productsRecords));
	} catch (e) {
		console.log(`Couldnt load page /shop/${params.slug}`);
		console.log(e);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
