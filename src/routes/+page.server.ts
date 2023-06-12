import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

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
			showcase: JSON.parse(JSON.stringify(showcaseRecords)),
			carousels: JSON.parse(JSON.stringify(carouselsRecords))
		};
	} catch (e) {
		console.log(`Couldnt load page /`);
		console.log('we got exception, but the app has crashed', e);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
