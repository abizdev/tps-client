import React from 'react';
import { Button } from '@shared/ui';
import { cn } from '@shared/lib/utils';

interface Props {
  count: number;
  totalCount: number;
  wrapperClass?: string;
  increase: () => void;
  decrease: () => void;
}

const ProductCounter: React.FC<Props> = (props) => {
  const {
    count,
    totalCount,
    wrapperClass,
    increase,
    decrease,
  } = props;

  return (
    <div className={cn('gap-1 mt-2 flex-y-center', wrapperClass)}>
      <Button
        color='transparent'
        icon='icon-minus-circle'
        iconClass='text-primary'
        disabled={count === 0}
        onClick={() => decrease()}
        className='bg-white rounded-s-lg rounded-e-sm min-w-0 h-10 py-2.5 px-1 sm:px-3'
      />

      <span
        className='bg-white py-3 flex-center rounded-sm text-black text-base leading-130 p-0 min-w-0 flex-grow h-10'
      >
				{count}
			</span>

      <Button
        color='transparent'
        icon='icon-add-circle'
        iconClass='text-green'
        disabled={count === totalCount}
        onClick={() => increase()}
        className='bg-white rounded-s-sm rounded-e-lg min-w-0 h-10 py-2.5 px-1 sm:px-3'
      />
    </div>
  );
};

export default ProductCounter;
