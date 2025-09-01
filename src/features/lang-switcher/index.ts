import dynamic from 'next/dynamic';

export const LangSwitcherLazy = dynamic(() => import('./ui/lang-switcher'));
export type { TLocale } from './model/types';
