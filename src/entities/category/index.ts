import React from 'react';

const CategoryCardLazy = React.lazy(() => import('./ui/category-card'));

export { CategoryCardLazy };
export type { ICategory } from './model/types';
