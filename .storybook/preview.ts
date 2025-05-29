import type { Preview } from '@storybook/nextjs-vite';
import { I18nDecorator, StyleDecorator } from '../src/shared/config/storybook';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		StyleDecorator,
		I18nDecorator
	]
};

export default preview;
