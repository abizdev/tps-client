import React from 'react';
import { cn } from '@shared/lib/utils';
import { SectionTitleLazy } from '../../section-title';
import { ProductCardLazy } from '@/entitites/product';
import { IProduct } from '@/entitites/product/model/types';

interface Props {
  wrapperClass?: string;
  productsList: IProduct[]
  title: string
  text?: string
  link?: string
}

const ProductsSection: React.FC<Props> = (props) => {
  const {
    title,
    text,
    link,
    wrapperClass,
    productsList
  } = props;

  return (
    <section className={cn('py-14', wrapperClass)}>
      <div className="container">
        <SectionTitleLazy title={title} text={text} link={link} />

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4'>
          {productsList.map(product => (
            <ProductCardLazy
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
