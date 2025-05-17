import React from 'react';
import Image from 'next/image';
import { cn } from '@shared/lib/utils';
import { SectionTitleLazy } from '../../section-title';
import { ProductCardLazy } from '@/entitites/product';
import { IProduct } from '@/entitites/product';
import { Empty } from '@shared/assets/images';
import { EmptyContentLazy } from '../../empty-content';

interface Props {
  wrapperClass?: string;
  productsList: IProduct[] | [];
  title: string
  text?: string
  link?: string
  emptyTitle?: string;
  emptyText?: string;
}

const ProductsSection: React.FC<Props> = (props) => {
  const {
    title,
    text,
    link,
    wrapperClass,
    productsList,
    emptyTitle,
    emptyText,
  } = props;


  return (
    <section className={cn('py-14', wrapperClass)}>
      <div className="container">
        <SectionTitleLazy title={title} text={text} link={link} />

        {productsList.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
            {productsList.map(product => (
              <ProductCardLazy
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <EmptyContentLazy title={emptyTitle} text={emptyText}>
            <Image src={Empty} className='w-72' alt='empty' />
          </EmptyContentLazy>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
