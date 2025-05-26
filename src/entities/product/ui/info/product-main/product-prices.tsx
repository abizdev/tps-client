import React from 'react';
import { formatNumber } from '@shared/lib/utils';

interface Props {
  price: number;
  discount?: number;
}

const ProductPrices: React.FC<Props> = ({ price, discount }) => {
  return (
    <div className='flex flex-col'>
      <h3 className='text-2xl leading-130 font-bold text-black'>{formatNumber(price)}</h3>
      <h6 className='text-base leading-130 font-semibold text-primary'>
        {discount && (
          <span className='ml-2 text-primary text-base line-through'>{formatNumber(discount)}</span>
        )}
      </h6>
    </div>
  );
};

export default React.memo(ProductPrices);
