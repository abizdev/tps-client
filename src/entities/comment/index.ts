import React from 'react';

const CommentsListLazy = React.lazy(() => import('./ui/comments-list/comments-list'));

export { CommentsListLazy };
export { commentsList } from './model/mock';
