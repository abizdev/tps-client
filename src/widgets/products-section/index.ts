import React from 'react';

const ProductsSectionLazy =
  React.lazy(() => import('./ui/products-section'));

export { ProductsSectionLazy };
