import dynamic from 'next/dynamic';

export const SearchedProductLazy =
  dynamic(() => import('./ui/searched-product/searched-product'));
export const ProductCardLazy =
  dynamic(() => import('./ui/product-card/product-card'));
export const ProductMainLazy = dynamic(() => import('./ui/info/product-main/product-main'));
export const ProductAboutLazy =
  dynamic(() => import('./ui/info/product-about/product-about'));
export const ProductCommentsLazy =
  dynamic(() => import('./ui/info/product-comments/product-comments'));

export const ProductsSectionRecommendedLazy = dynamic(() => import('./ui/products-sections/products-section-recommended'));
export const ProductsSectionAudienceLazy = dynamic(() => import('./ui/products-sections/products-section-audience'));

export { product } from './model/mock';
export { useProductsByTargetAudience, useProductsQuery } from './model/api';
export type { ISearchProduct, IProduct } from './model/types';
