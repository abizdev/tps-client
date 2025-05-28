import React from 'react';
import { IComment } from '@entities/comment/model/types';
import { cn } from '@shared/lib/utils';

const CommentLazy = React.lazy(() => import('../comment/comment'));

interface Props {
  commentsList: IComment[] | []
  wrapperClass?: string
}

const CommentsList: React.FC<Props> = ({ commentsList, wrapperClass }) => {
  return (
    <div className={cn('flex flex-col', wrapperClass)}>
      {commentsList.map((comment, index) => (
        <CommentLazy
          key={comment.id}
          comment={comment}
          wrapperClass={cn({ 'border-b border-gray-500': index !== commentsList.length - 1 })}
        />
      ))}
    </div>
  );
};

export default CommentsList;
