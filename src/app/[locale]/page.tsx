'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ProductsSectionLazy } from '@widgets/products-section';
import { PopularBrandSwiperLazy, usePopularBrands } from '@entities/brand';
import { SectionTitleLazy } from '@widgets/section-title';
import { useProductsByTargetAudience, useProductsQuery } from '@entities/product';
import { CategoriesSectionMainLazy } from '@entities/category';

export default function Home() {
	const t = useTranslations('');

	const brands = usePopularBrands();

	const products = useProductsQuery({ page: 3, limit: 4 });
	const productsForWoman = useProductsByTargetAudience({ page: 1,  limit: 4, targetAudience: 'Woman' });
	const productsForMan = useProductsByTargetAudience({ page: 2, limit: 4, targetAudience: 'Man' });

	// const categories = [{ title: 'Category', link: '#!' }];
	// const products: IProduct[] = [product];

	return (
		<main>
			<CategoriesSectionMainLazy />
			{products.data && <ProductsSectionLazy
				title={t('recommended_products')}
				link={t('all')}
				productsList={products.data}
			/>}
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
			{productsForMan.data?.length && <ProductsSectionLazy
				title={t('man_products')}
				link={t('all')}
				productsList={productsForMan.data}
			/>}
			{productsForWoman.data && <ProductsSectionLazy
				title={t('women_products')}
				link={t('all')}
				productsList={productsForWoman.data}
				wrapperClass='bg-white'
			/>}
		</main>
	);
}
