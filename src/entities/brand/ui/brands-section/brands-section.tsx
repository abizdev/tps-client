'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { SectionTitleLazy } from '@widgets/section-title';
import { BrandCardLoaderLazy, PopularBrandSwiperLazy, usePopularBrands } from '@entities/brand';
import { SectionTitleLoaderLazy } from '@widgets/section-title-loader';

const BrandsSection: React.FC = () => {
	const t = useTranslations('');
	const brands = usePopularBrands();

	if (brands.isLoading) {
		return (
			<div className='bg-white py-16 md:pt-8 md:pb-14'>
				<div className="container">
					<SectionTitleLoaderLazy />
				</div>

				<div className='flex-y-center gap-4 flex-wrap'>
					{Array.from({ length: 21 }).map((_, i) => (
						<BrandCardLoaderLazy key={i} />
					))}
				</div>
			</div>
		);
	}

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
