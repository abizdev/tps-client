'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { BreadCrumbsLazy } from '@shared/ui';
import {
	ProductAboutLazy,
	ProductCommentsLazy,
	ProductMainLazy,
	useProductsById
} from '@entities/product';

const breadcrumbs = [
	{ name: 'products', link: '/products' },
];

const SingleProduct: React.FC = () => {
	const params = useParams<{ id: string }>();
	const product = useProductsById(params.id);

	return (
		<main className='container'>
			<BreadCrumbsLazy paths={breadcrumbs} />
			<ProductMainLazy product={product.data} />
			<ProductAboutLazy product={product.data} />
			<ProductCommentsLazy product={product.data} />
		</main>
	);
};

export default SingleProduct;
