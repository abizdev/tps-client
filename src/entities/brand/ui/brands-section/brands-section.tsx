'use client';

import React from 'react';
import { SectionTitleLazy } from '@widgets/section-title';
import { PopularBrandSwiperLazy, usePopularBrands } from '@entities/brand';
import { useTranslations } from 'next-intl';

const BrandsSection: React.FC = () => {
	const t = useTranslations('');
	const brands = usePopularBrands();

	return (
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
	);
};

export default BrandsSection;
