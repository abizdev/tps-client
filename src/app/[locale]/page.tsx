import React from 'react';
import { BrandsSectionLazy } from '@entities/brand';
import { ProductsSectionRecommendedLazy, ProductsSectionAudienceLazy } from '@entities/product';
import { CategoriesSectionMainLazy } from '@entities/category';

export default function Home() {
	return (
		<main>
			<CategoriesSectionMainLazy />
			<ProductsSectionRecommendedLazy />
			<BrandsSectionLazy />
			<ProductsSectionAudienceLazy page={1} sectionTitle='women_products' targetAudience='Woman' />
			<ProductsSectionAudienceLazy page={2} sectionTitle='man_products' targetAudience='Man' wrapperClass='bg-white' />
		</main>
	);
}
