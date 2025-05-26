import React from 'react';
import { Button, buttonSizes, IButtonSize } from '@shared/ui';
import { cn } from '@shared/lib/utils';

interface Props {
  color?: 'transparent' | 'gray';
  size?: IButtonSize
  count: number;
  totalCount: number;
  wrapperClass?: string;
  increase: () => void;
  decrease: () => void;
}

const ProductCounter: React.FC<Props> = (props) => {
  const {
    color = 'transparent',
    size = 'medium',
    count,
    totalCount,
    wrapperClass,
    increase,
    decrease,
  } = props;

  const btnMods =  {
    'bg-white': color === 'transparent',
    'bg-gray-500': color === 'gray',
  }

  return (
    <div className={cn('gap-1 flex-y-center', wrapperClass)}>
      <Button
        size={size}
        color='transparent'
        icon='icon-minus-circle'
        iconClass='text-primary'
        disabled={count === 0}
        onClick={() => decrease()}
        className={cn('rounded-s-lg rounded-e-sm min-w-0 h-10 py-2.5 px-1 sm:px-3', btnMods)}
      />

      <span
        className={cn(
          'bg-white py-3 flex-center rounded-sm text-black text-base leading-130 min-w-[50px] grow-1 h-10',
          { 'bg-gray-600 border border-gray-400': color === 'gray' },
          buttonSizes[size],
        )}
      >
				{count}
			</span>

      <Button
        size={size}
        color='transparent'
        icon='icon-add-circle'
        iconClass='text-green'
        disabled={count === totalCount}
        onClick={() => increase()}
        className={cn('rounded-s-sm rounded-e-lg min-w-0 h-10 py-2.5 px-1 sm:px-3', btnMods)}
      />
    </div>
  );
};

export default ProductCounter;
