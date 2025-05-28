import React from 'react';

const CategoriesSectionLazy =
  React.lazy(() => import('./ui/categories-section'));

export { CategoriesSectionLazy };
