import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import cloneDeep from 'lodash.clonedeep';

export const load = (async ({ locals }) => {
	try {
		const [showcaseRecords, carouselsRecords] = await Promise.all([
			locals.pb.collection('showcase').getFullList({
				expand: 'products',
				sort: 'created'
			}),
			locals.pb.collection('carousels').getFullList({
				sort: 'created'
			})
		]);

		return {
			
			showcase: JSON.parse(JSON.stringify(cloneDeep(showcaseRecords))),
			carousels: JSON.parse(JSON.stringify(cloneDeep(carouselsRecords)))
		};
	} catch (e) {
		console.log(`Couldnt load page /`);
		console.log('we got exception, but the app has crashed', e);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
