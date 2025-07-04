import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { cn } from '@shared/lib/utils';
import { routing } from '@shared/config/i18n';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { inter, proxima, rubik, sf } from '@shared/assets/fonts/fonts-decloration';

import '@shared/assets/css/globals.css';
import '@shared/assets/fonts/icons/style.css';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const queryClient = new QueryClient();

export default async function RootLayout({
	children,
	params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang="en">
			<body
				className={cn(
					'antialiased',
					rubik.variable,
					inter.variable,
					proxima.variable,
					sf.variable
				)}
			>
				<NextIntlClientProvider>
					<QueryClientProvider client={queryClient}>
						<Header />
						{children}
						<Footer />
					</QueryClientProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
