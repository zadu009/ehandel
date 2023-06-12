import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	build: {
		sourcemap: false,
		rollupOptions: {
		  external:  [
			'lodash.clonedeep', 
			'lodash',
		  ],
		},
	  },
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		include: ['svelte-carousel']
	}
};

export default config;
