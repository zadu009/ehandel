import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import cloneDeep from 'lodash.clonedeep';

export const load = (async ({ params, locals }) => {
	try {
		const productRecord = await locals.pb
			.collection('products')
			.getFirstListItem(`slug="${params.slug}"`, {
				expand: 'related_products'
			});

		return JSON.parse(JSON.stringify(cloneDeep(productRecord)));
					
	} catch (e) {
		console.log(`Couldnt load page /shop/${params.slug}`);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
