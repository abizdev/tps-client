import React from 'react';

const LazyLoading = React.lazy(() => import('./loading/loading'))
const LazyBadge = React.lazy(() => import('./budge/budge'))
const StarRatingLazy = React.lazy(() => import('./star-rating/star-rating'))
const BreadCrumbsLazy = React.lazy(() => import('./bread-crumbs/bread-crumbs'))
const DiscountBadgeLazy =
  React.lazy(() => import('./discount-badge/discount-badge'))

export { Logo } from './logo/logo'
export { Button } from './button/button';
export { Input } from './form/input/input'
export { InputSearch } from './form/input-search/input-search'

export { LazyLoading, LazyBadge, DiscountBadgeLazy, StarRatingLazy, BreadCrumbsLazy };
