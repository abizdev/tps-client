'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@shared/lib/utils';
import { useTranslations } from 'next-intl';
import { SectionTitleLazy } from '@widgets/section-title';
import { useProductsQuery } from '../../model/api';
import { ProductsSectionLoaderLazy } from '@widgets/products-section-loader';

interface Props {
  wrapperClass?: string;
}

const ProductCardLazy = dynamic(() => import('../product-card/product-card'));
const ProductCardLoaderLazy = dynamic(() => import('../product-card-loader/product-card-loader'));

const ProductsSectionRecommended: React.FC<Props> = ({ wrapperClass }) => {
	const t = useTranslations('');
	const products = useProductsQuery({ page: 3, limit: 4 });

	if (products.isLoading) {
		return (
			<ProductsSectionLoaderLazy wrapperClass='container'>
				<ProductCardLoaderLazy />
				<ProductCardLoaderLazy />
				<ProductCardLoaderLazy />
				<ProductCardLoaderLazy />
			</ProductsSectionLoaderLazy>
		);
	}

	return (
		<section className={cn('py-14', wrapperClass)}>
			<div className="container">
				<SectionTitleLazy title={t('recommended_products')} text={t('all')} link='#!' />

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
					{products.data && products.data.map(product => (
						<ProductCardLazy
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsSectionRecommended;
