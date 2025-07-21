import React from 'react';

const CategoriesSectionLazy =
  React.lazy(() => import('@entities/category/ui/categories-section-main/categories-section-main'));

export { CategoriesSectionLazy };
