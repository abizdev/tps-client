import React from 'react';

const LazyLoading = React.lazy(() => import('./loading/loading'));
const LazyBadge = React.lazy(() => import('./badge/badge'));
const StarRatingLazy = React.lazy(() => import('./star-rating/star-rating'));
const BreadCrumbsLazy = React.lazy(() => import('./bread-crumbs/bread-crumbs'));
const AvatarLazy = React.lazy(() => import('./avatar/avatar'));
const TooltipLazy = React.lazy(() => import('./tooltip/tooltip'));
const DiscountBadgeLazy =
  React.lazy(() => import('./discount-badge/discount-badge'));

export { Logo } from './logo/logo';
export { Button } from './button/button';
export { sizes as buttonSizes } from './button/style';
export type { IButtonSize, IButtonColor, IButtonVariant } from './button/types';

export { Input } from './form/input/input';
export { InputSearch } from './form/input-search/input-search';

export { LazyLoading, LazyBadge, DiscountBadgeLazy, StarRatingLazy, BreadCrumbsLazy, AvatarLazy, TooltipLazy };
