import React from 'react';

const SearchedProductLazy =
  React.lazy(() => import('./ui/searched-product/searched-product'));

const ProductCardLazy = React.lazy(() => import('./ui/card/card'))

export { SearchedProductLazy, ProductCardLazy }

export type { ISearchProduct, IProduct } from './model/types'
