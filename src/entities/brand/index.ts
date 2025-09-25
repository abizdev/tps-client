import dynamic from 'next/dynamic';

export const BrandsSectionLazy = dynamic(() => import('./ui/brands-section/brands-section'));
export const BrandCardLazy = dynamic(() => import('./ui/brand-card/brand-card'));
export const BrandCardLoaderLazy = dynamic(() => import('./ui/brand-card-loader/brand-card-loader'));
export const PopularBrandSwiperLazy = dynamic(() => import('./ui/popular-brand-swiper/popular-brand-swiper'));

export { brandsListMock } from './model/mock';
export { usePopularBrands } from './model/api';
export type { ITopBrands, IBrand } from './model/types';
