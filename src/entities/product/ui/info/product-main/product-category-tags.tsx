import React from 'react';
import { IProductCategory } from '../../../model/types';

interface Props {
  categories: IProductCategory[];
}

const ProductCategoryTags: React.FC<Props> = ({ categories }) => {
  return (
    <div className='flex-y-center flex-wrap gap-2'>
      {categories.map((category) => (
        <article
          key={category.id}
          className='py-1 px-2 bg-gray-400 rounded-sm text-xs leading-4 text-gray font-semibold'
        >
          {category.name}
        </article>
      ))}
    </div>
  );
};

export default React.memo(ProductCategoryTags);
