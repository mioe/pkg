import {
	defineConfig,
	presetIcons,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
	presets: [
		presetIcons({
			scale: 1.2,
			warn: true,
			collections: {
				'mi': FileSystemIconLoader(
					'./src/assets/icons',
				),
			},
		}),
	],
})
