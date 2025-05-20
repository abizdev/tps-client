import { useTranslations } from 'next-intl';
import { CategoriesSectionLazy } from '@widgets/categories-section';
import { ProductsSectionLazy } from '@widgets/products-section';
import { brandsListMock, PopularBrandSwiperLazy } from '@entities/brand';
import { SectionTitleLazy } from '@widgets/section-title';
import React from 'react';

export default function Home() {
  const t = useTranslations('')

  const categories = [
    {
      title: 'Categpry',
      link: '#!'
    }
  ]
  const products = [
    {
      id: Math.random(),
      title: "Product name",
      name: "Miraculum духи Byc Moze... Paris Parfume",
      price: 184000,
      discount: 184000,
      linkUrl: "#!",
      rating: 5,
      count: 20,
      isLiked: false,
      images: [
        {
          id: Math.random(),
          imgUrl: "@/assets/images/product.jpg",
        },
        {
          id: Math.random(),
          imgUrl: "@/assets/images/product.jpg",
        },
        {
          id: Math.random(),
          imgUrl: "@/assets/images/product.jpg",
        },
      ],
    },
  ]

  return (
    <main>
      <CategoriesSectionLazy
        title={t('popular_category')}
        link={t('all')}
        categoriesList={categories}
      />
      <ProductsSectionLazy
        title={t('recommended_products')}
        link={t('all')}
        productsList={products}
      />
      <section className="bg-white py-16 md:pt-8 md:pb-14">
        <div className='container'>
          <SectionTitleLazy title={t('popular_brands_title')} link='/brands' />
        </div>

        <div className="flex flex-col gap-y-4">
          <PopularBrandSwiperLazy brands={brandsListMock} />
          <PopularBrandSwiperLazy brands={brandsListMock} reverseDirection />
          <PopularBrandSwiperLazy brands={brandsListMock} />
        </div>
      </section>
      <ProductsSectionLazy
        title={t('discount_products')}
        link={t('all')}
        productsList={products}
      />
      <CategoriesSectionLazy
        title={t('best_category_for_man')}
        link={t('all')}
        categoriesList={categories}
      />
      <ProductsSectionLazy
        title={t('body_products')}
        link={t('all')}
        productsList={products}
        wrapperClass='bg-white'
      />
      <ProductsSectionLazy
        title={t('women_products')}
        link={t('all')}
        productsList={products}
      />
    </main>
  )
}
