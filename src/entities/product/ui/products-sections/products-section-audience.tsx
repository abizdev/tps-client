import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@shared/lib/utils';
import { useTranslations } from 'next-intl';
import { SectionTitleLazy } from '@widgets/section-title';
import { useProductsByTargetAudience } from '../../model/api';

// TODO: remove page
interface Props {
  wrapperClass?: string;
  targetAudience: string;
  page: number;
  sectionTitle: string;
}

const ProductCardLazy = dynamic(() => import('../product-card/product-card'), { ssr: false });
const ProductsSectionLoaderLazy = dynamic(() => import('../products-section-loader/products-section-loader'));

const ProductsSectionAudience: React.FC<Props> = ({ wrapperClass, targetAudience, page }) => {
	const t = useTranslations('');
	const products = useProductsByTargetAudience({ page,  limit: 4, targetAudience });

	if (products.isLoading) {
		return (
			<ProductsSectionLoaderLazy />
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

export default ProductsSectionAudience;
