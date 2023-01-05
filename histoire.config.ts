import { resolve } from 'path'
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
	outDir: '.histoire/dist',

	// Alternative way of specifying histoire config
	setupFile: `${resolve(__dirname, 'src')}/histoire.setup.ts`,

	plugins: [
		HstVue(),
	],

	vite: {
		build: {
			lib: false,
			rollupOptions: {
				output: {
					format: 'cjs',
				},
			},
		},
	},
})
