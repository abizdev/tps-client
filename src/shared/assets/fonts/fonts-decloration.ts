import { Inter, Rubik } from 'next/font/google';
import localFont from 'next/font/local';

export const rubik = Rubik({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['normal'],
	variable: '--font-rubik',
	display: 'swap',
});

export const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['normal'],
	variable: '--font-inter',
	display: 'swap',
});


export const proxima = localFont({
	src: [
		{
			path: './proximanova/ProximaNova-Regular.woff2',
			weight: '400',
		},
		{
			path: './proximanova/ProximaNova-Medium.woff2',
			weight: '500',
		},
		{
			path: './proximanova/ProximaNova-Semibold.woff2',
			weight: '600',
		},
		{
			path: './proximanova/ProximaNova-Bold.woff2',
			weight: '700',
		},
	],
	variable: '--font-proxima',
	display: 'swap',
});

export const sf = localFont({
	src: [
		{
			path: './sfpro/SFProText-Regular.woff2',
			weight: '400',
		},
		{
			path: './sfpro/SFProText-Semibold.woff2',
			weight: '600',
		},
		{
			path: './sfpro/SFProText-Bold.woff2',
			weight: '700',
		},
	],
	variable: '--font-sf',
	display: 'swap',
});
