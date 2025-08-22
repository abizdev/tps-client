import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
	'stories': [
		'../src/**/*.mdx',
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
	],
	'addons': [
		'@storybook/addon-onboarding',
		'@chromatic-com/storybook',
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest'
	],
	'framework': {
		'name': '@storybook/nextjs-vite',
		'options': {}
	},
	'viteFinal': async (config) => {
		config.resolve = {
			...config.resolve,
			alias: {
				'@shared': path.resolve(__dirname, '../src/shared'),
				'@features': path.resolve(__dirname, '../src/features'),
				'@entities': path.resolve(__dirname, '../src/entities'),
				'@widgets': path.resolve(__dirname, '../src/widgets'),
			},
		};
		return config;
	},
	'staticDirs': ['../public', '../src/shared/assets', '../src/shared/assets/images'],
};
export default config;
