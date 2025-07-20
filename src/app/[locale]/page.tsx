'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CategoriesSectionLazy } from '@widgets/categories-section';
import { ProductsSectionLazy } from '@widgets/products-section';
import { PopularBrandSwiperLazy, usePopularBrands } from '@entities/brand';
import { SectionTitleLazy } from '@widgets/section-title';
import { IProduct, product } from '@entities/product';
import { useAllCategories, useManCategories } from '@entities/category';

export default function Home() {
	const t = useTranslations('');

	const brands = usePopularBrands();
	const categories = useAllCategories();
	const categoriesMan = useManCategories();

	// const categories = [{ title: 'Category', link: '#!' }];
	const products: IProduct[] = [product];

	return (
		<main>
			{categories.data && <CategoriesSectionLazy
				title={t('popular_category')}
				link={t('all')}
				categoriesList={categories.data}
			/>}
			<ProductsSectionLazy
				title={t('recommended_products')}
				link={t('all')}
				productsList={products}
			/>
			<section className="bg-white py-16 md:pt-8 md:pb-14">
				<div className='container'>
					<SectionTitleLazy title={t('popular_brands_title')} link='/brands' />
				</div>

				{brands.data && (
					<div className="flex flex-col gap-y-4">
						<PopularBrandSwiperLazy brands={brands.data} />
						<PopularBrandSwiperLazy brands={brands.data} reverseDirection />
						<PopularBrandSwiperLazy brands={brands.data} />
					</div>
				)}
			</section>
			<ProductsSectionLazy
				title={t('discount_products')}
				link={t('all')}
				productsList={products}
			/>
			{categoriesMan.data?.length && <CategoriesSectionLazy
				title={t('best_category_for_man')}
				link={t('all')}
				categoriesList={categoriesMan.data}
			/>}
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
	);
}
