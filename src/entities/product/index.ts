import React from 'react';

export const SearchedProductLazy =
  React.lazy(() => import('./ui/searched-product/searched-product'));
export const ProductCardLazy =
  React.lazy(() => import('./ui/product-card/product-card'));
export const ProductMainLazy = React.lazy(() => import('./ui/info/product-main/product-main'));
export const ProductAboutLazy =
  React.lazy(() => import('./ui/info/product-about/product-about'));
export const ProductCommentsLazy =
  React.lazy(() => import('./ui/info/product-comments/product-comments'));

export { product } from './model/mock';
export { useProductsByTargetAudience, useProductsQuery } from './model/api';
export type { ISearchProduct, IProduct } from './model/types';
