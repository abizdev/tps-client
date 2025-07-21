import dynamic from 'next/dynamic';

export const CategoryCardLazy = dynamic(() => import('./ui/category-card/category-card'));
export const CategoryCardLoaderLazy = dynamic(() => import('./ui/category-card-loader/category-card-loader'));
export const CategoriesSectionMainLazy = dynamic(() => import('./ui/categories-section-main/categories-section-main'));

export { useAllCategories } from './model/api';
export type { ICategory } from './model/types';
