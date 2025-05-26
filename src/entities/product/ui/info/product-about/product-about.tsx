import React from 'react';
import { useTranslations } from 'next-intl';
import { IProductInfoAbout } from '../../../model/types';

interface Props {
  product: IProductInfoAbout
}

const ProductAbout: React.FC<Props> = ({ product }) => {

  const t = useTranslations('product_info')

  return (
    <section className='product-section-wrapper flex flex-col gap-2 md:gap-4 mt-6'>
      <h2 className='title'>{t('about_title')}</h2>
      <div>
        <h4 className='text-base md:text-xl leading-130 font-semibold text-black mb-2'>
          {t('about_subtitle')}
        </h4>
        <p className='text'>{product.text}</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <article className='p-4'>
          <h5 className='text-base text-gray'>{t('year')}</h5>
          <span className='text-base text-black font-semibold'>{product.year}</span>
        </article>

        {/*<article className='p-4'>*/}
        {/*  <h5 className='text-base text-gray'>{t('weight')}</h5>*/}
        {/*  <span className='text-base text-black font-semibold'>{weight}</span>*/}
        {/*</article>*/}

        <article className='p-4'>
          <h5 className='text-base text-gray'>{t('manufacturer')}</h5>
          <span className='text-base text-black font-semibold'>{product.manufacturer}</span>
        </article>

        <article className='p-4'>
          <h5 className='text-base text-gray'>{t('targeted_audience')}</h5>
          <span className='text-base text-black font-semibold'>{product.targeted_audience}</span>
        </article>

        <article className='p-4'>
          <h5 className='text-base text-gray'>{t('manufactured_country')}</h5>
          <span className='text-base text-black font-semibold'>{product.manufactured_country}</span>
        </article>
      </div>
    </section>
  );
};

export default React.memo(ProductAbout);
