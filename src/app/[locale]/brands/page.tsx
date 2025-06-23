'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { BrandCardLazy, brandsListMock } from '@entities/brand';
import { Button } from '@shared/ui';
import { SearchBrandsInputLazy } from '@features/search-brands-input';
import { debounce } from '@shared/lib/utils';
import { useBrands } from '@entities/brand/model/api';
import { usePagination } from '@shared/lib/hooks';

const BrandsPage: React.FC = () => {
	const tBrands = useTranslations('brands');
	const tButtons = useTranslations('buttons');
	const pagination = usePagination();

	const brands = useBrands(pagination.page, pagination.limit);

	const onSearch = React.useCallback((value: string) => {
		if (!value) return;

		console.log(debounce('brand', () => value, 500));
	}, []);

	return (
		<main className='container'>
			<section className='flex-center flex-col  pt-5 pb-12'>
				<div className='flex-center-between mb-5 w-full'>
					<h2 className='text-18 md:text-32 leading-130 text-black font-bold'>{tBrands('title')}</h2>
					<SearchBrandsInputLazy onSearch={onSearch} />
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
					{brands.data.map(brand => (
						<BrandCardLazy key={brand.id} brand={brand} />
					))}
				</div>

				<Button
					text={tButtons('download_more')}
					icon='icon-arrow-down'
					iconPosition='left'
					color='secondary'
					className='mt-8'
					// loading
				/>
			</section>
		</main>
	);
};

export default BrandsPage;
