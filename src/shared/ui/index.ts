import React from 'react';

const LazyLoading = React.lazy(() => import('./loading/loading'))
const LazyBadge = React.lazy(() => import('./budge/budge'))

export { Logo } from './logo/logo'
export { Button } from './button/button';
export { Input } from './form/input/input'
export { InputSearch } from './form/input-search/input-search'

export { LazyLoading, LazyBadge };
