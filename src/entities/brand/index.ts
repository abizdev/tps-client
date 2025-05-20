import React from 'react';

const BrandCardLazy = React.lazy(() => import('./ui/brand-card'))
const PopularBrandSwiperLazy =
  React.lazy(() => import('./ui/popular-brand-swiper/popular-brand-swiper'))

export { BrandCardLazy, PopularBrandSwiperLazy }
export { brandsListMock } from './model/mock'
export type { ITopBrands, IBrand } from './model/types'
