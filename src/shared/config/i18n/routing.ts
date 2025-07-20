import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'ru', 'uz'],
	localePrefix: 'always',

	// Used when no locale matches
	defaultLocale: 'en',
	alternateLinks: false
});
