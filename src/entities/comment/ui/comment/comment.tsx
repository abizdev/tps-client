import React from 'react';
import { AvatarLazy, StarRatingLazy } from '@shared/ui';
import { IComment } from '../../model/types';
import { cn } from '@shared/lib/utils';

interface Props {
  wrapperClass?: string;
  comment: IComment;
}

const Comment: React.FC<Props> = ({ wrapperClass, comment }) => {
  return (
    <article className={cn('py-4', wrapperClass)}>
      <div className='flex-y-center gap-3'>
        <AvatarLazy name={comment.userInfo.fullName} src={comment.userInfo.avatarUrl} />

        <div>
          <h3 className='text-xl leading-130 font-semibold text-black mb-0.5'>{comment.userInfo.fullName}</h3>
          <div className='flex-y-center gap-2'>
            <StarRatingLazy selectedStars={comment.rating} />
            <span className='text-sm leading-4 text-gray'>сегодня 14:34</span>
          </div>
        </div>
      </div>

      <p className='text-base leading-130 mt-3'>{comment.text}</p>
    </article>
  );
};

export default React.memo(Comment);
