import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

const LIBRARY_OPT = {
	lib: {
		entry: `${resolve(__dirname, 'src')}/build.ts`,
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
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	console.log('🦕 vite.config.ts/defineConfig', command, mode)

	return {
		plugins: [
			vue(),

			// https://github.com/unocss/unocss
			Unocss(),
		],

		build: mode === 'lib'
			? LIBRARY_OPT
			: undefined,
	}
})
