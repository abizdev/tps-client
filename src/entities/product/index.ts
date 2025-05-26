import React from 'react';

const SearchedProductLazy =
  React.lazy(() => import('./ui/searched-product/searched-product'));
const ProductCardLazy =
  React.lazy(() => import('./ui/product-card/product-card'));
const ProductMainLazy = React.lazy(() => import('./ui/info/product-main/product-main'))
const ProductAboutLazy =
  React.lazy(() => import('./ui/info/product-about/product-about'));

export { SearchedProductLazy, ProductCardLazy, ProductMainLazy, ProductAboutLazy }
export { product } from './model/mock'
export type { ISearchProduct, IProduct } from './model/types'
