import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),

		// https://github.com/antfu/unocss
		unocss(),
	],

	build: {
		lib: {
			entry: `${resolve(__dirname, 'src')}/main.ts`,
			name: 'pkg',
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
})
