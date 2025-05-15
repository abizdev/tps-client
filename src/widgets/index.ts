import React from 'react';

const SectionTitleLazy =
  React.lazy(() => import('./section-title/ui/section-title'))
const CategoriesSectionLazy =
  React.lazy(() => import('./categories-section/ui/categories-section'))

export { SectionTitleLazy, CategoriesSectionLazy }

export { Footer } from './footer/ui/footer';
export { Header } from './header/ui/header';
