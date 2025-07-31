'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@shared/lib/utils';
import { useTranslations } from 'next-intl';
import { useAllCategories } from '@entities/category';
import { SectionTitleLazy } from '@widgets/section-title';
import { ProductsSectionLoaderLazy } from '@widgets/products-section-loader';

interface Props {
  wrapperClass?: string;
}

const CategoryCardLazy = dynamic(() => import('../category-card/category-card'));
const CategoryCardLoaderLazy = dynamic(() => import('../category-card-loader/category-card-loader'));

// TODO: create list renderer component with dynamic mount of elements
const CategoriesSectionMain: React.FC<Props> = ({ wrapperClass }) => {
	const t = useTranslations('');
	const categories = useAllCategories();

	if (categories.isLoading) {
		return (
			<ProductsSectionLoaderLazy>
				<CategoryCardLoaderLazy />
				<CategoryCardLoaderLazy />
				<CategoryCardLoaderLazy />
				<CategoryCardLoaderLazy />
				<CategoryCardLoaderLazy />
			</ProductsSectionLoaderLazy>
		);
	}

	return (
		<section className={cn('py-14', wrapperClass)}>
			<div className="container">
				<SectionTitleLazy title={t('popular_category')} text={t('all')} link='#!' />

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4'>
					{categories.data && categories.data.map((category) => (
						<CategoryCardLazy
							key={category.id}
							title={category.name}
							link={`/products?category=${category.name}`}
							imgUrl={category?.imgUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoriesSectionMain;
