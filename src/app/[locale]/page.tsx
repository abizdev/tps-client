import React from 'react';
import { PopularBrandSwiperLazy, usePopularBrands } from '@entities/brand';
import { SectionTitleLazy } from '@widgets/section-title';
import { ProductsSectionRecommendedLazy, ProductsSectionAudienceLazy } from '@entities/product';
import { CategoriesSectionMainLazy } from '@entities/category';

export default function Home() {
	const brands = usePopularBrands();

	return (
		<main>
			<CategoriesSectionMainLazy />
			<ProductsSectionRecommendedLazy />
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
			<ProductsSectionAudienceLazy page={1} sectionTitle='women_products' targetAudience='Woman' />
			<ProductsSectionAudienceLazy page={2} sectionTitle='man_products' targetAudience='Man' wrapperClass='bg-white' />
		</main>
	);
}
