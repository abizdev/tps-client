import React from 'react';
import { cn } from '@shared/lib/utils';
import dynamic from 'next/dynamic';

interface Props {
  wrapperClass?: string;
}

const ProductCardLoaderLazy = dynamic(() => import('../product-card-loader/product-card-loader'));

// TODO: add section title loader
const ProductsSectionLoader: React.FC<Props> = ({ wrapperClass }) => {
	return (
		<section className={cn('py-14', wrapperClass)}>
			<div className="container">

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
					<ProductCardLoaderLazy />
					<ProductCardLoaderLazy />
					<ProductCardLoaderLazy />
					<ProductCardLoaderLazy />
				</div>
			</div>
		</section>
	);
};

export default ProductsSectionLoader;
