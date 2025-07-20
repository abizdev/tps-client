import React from 'react';

export const CategoryCardLazy = React.lazy(() => import('./ui/category-card'));

export { useAllCategories, useManCategories } from './model/api';
export type { ICategory } from './model/types';
