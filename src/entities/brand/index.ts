import React from 'react';

const BrandCardLazy = React.lazy(() => import('./ui/brand-card/brand-card'));
const PopularBrandSwiperLazy =
  React.lazy(() => import('./ui/popular-brand-swiper/popular-brand-swiper'));

export { BrandCardLazy, PopularBrandSwiperLazy };
export { brandsListMock } from './model/mock';
export { usePopularBrands } from './model/api';
export type { ITopBrands, IBrand } from './model/types';
