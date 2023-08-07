import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	server: {
        proxy: {
            '/api': {
                target: 'https://mailservice-production.up.railway.app',
                rewrite: (path) => path.replace(/^\/api/, ''),
                changeOrigin: true
            }
        }
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
