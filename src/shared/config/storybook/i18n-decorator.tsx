import { Decorator } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';
import defaultMessages from '../i18n/messages/en.json';

export const I18nDecorator: Decorator = (Story) => (
	<NextIntlClientProvider locale="en" messages={defaultMessages}>
		<Story />
	</NextIntlClientProvider>
);
