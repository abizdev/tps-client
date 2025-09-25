import React from 'react';
import { ProductAboutLoaderLazy, ProductCommentsLoaderLazy, ProductMainLoaderLazy } from '@entities/product';

const ProductLoading: React.FC = () => {
	return (
		<main className="container">
			<ProductMainLoaderLazy />
			<ProductAboutLoaderLazy />
			<ProductCommentsLoaderLazy />
		</main>
	);
};

export default ProductLoading;
