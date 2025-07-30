import React from 'react';

export const LazyLoading = React.lazy(() => import('./loading/loading'));
export const LazyBadge = React.lazy(() => import('./badge/badge'));
export const StarRatingLazy = React.lazy(() => import('./star-rating/star-rating'));
export const BreadCrumbsLazy = React.lazy(() => import('./bread-crumbs/bread-crumbs'));
export const AvatarLazy = React.lazy(() => import('./avatar/avatar'));
export const TooltipLazy = React.lazy(() => import('./tooltip/tooltip'));
export const ModalLazy = React.lazy(() => import('./modal/modal'));
export const DiscountBadgeLazy =
  React.lazy(() => import('./discount-badge/discount-badge'));

export { Logo } from './logo/logo';
export { Button } from './button/button';
export { sizes as buttonSizes } from './button/style';
export type { IButtonSize, IButtonColor, IButtonVariant } from './button/types';

export { Input } from './form/input/input';
export { InputSearch } from './form/input-search/input-search';
