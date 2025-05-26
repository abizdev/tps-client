import React from 'react';
import { BreadCrumbsLazy } from '@shared/ui';
import { product, ProductAboutLazy, ProductMainLazy } from '@entities/product';
import { ProductsSectionLazy } from '@widgets/products-section';
import { useTranslations } from 'next-intl';

const breadcrumbs = [
  { name: 'products', link: '/products' },
]

const SingleProduct: React.FC = () => {
  const tCommon = useTranslations('common');
  const productsList = [product];

  return (
    <main className='container'>
      <BreadCrumbsLazy paths={breadcrumbs} />
      <ProductMainLazy product={product} />
      <ProductAboutLazy product={product} />
      <ProductsSectionLazy productsList={productsList} title={tCommon('related_products')} />
    </main>
  );
};

  export default SingleProduct;
