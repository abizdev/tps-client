import dynamic from 'next/dynamic';

export const SearchedProductLazy =
  dynamic(() => import('./ui/searched-product/searched-product'));
export const ProductCardLazy =
  dynamic(() => import('./ui/product-card/product-card'));
export const ProductMainLazy = dynamic(() => import('./ui/info/product-main/product-main'));
export const ProductMainLoaderLazy = dynamic(() => import('./ui/info/product-main/product-main-loader'));
export const ProductAboutLazy =
  dynamic(() => import('./ui/info/product-about/product-about'));
export const ProductAboutLoaderLazy =
  dynamic(() => import('./ui/info/product-about/product-about-loader'));
export const ProductCommentsLazy =
  dynamic(() => import('./ui/info/product-comments/product-comments'));
export const ProductCommentsLoaderLazy =
  dynamic(() => import('./ui/info/product-comments/product-comments-loader'));

export const ProductsSectionRecommendedLazy = dynamic(() => import('./ui/products-sections/products-section-recommended'));
export const ProductsSectionAudienceLazy = dynamic(() => import('./ui/products-sections/products-section-audience'));

export { product } from './model/mock';
export { useProductsByTargetAudience, useProductsQuery, useProductsById } from './model/api';
export type { ISearchProduct, IProduct } from './model/types';
