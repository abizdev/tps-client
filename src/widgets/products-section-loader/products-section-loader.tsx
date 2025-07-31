import React from 'react';
import { SectionTitleLoaderLazy } from '../section-title-loader';

interface Props {
  children: React.ReactNode;
}

const ProductsSectionLoader: React.FC<Props> = ({ children }) => {
	return (
		<section className='py-14'>
			<SectionTitleLoaderLazy />

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4'>
				{children}
			</div>
		</section>
	);
};

export default ProductsSectionLoader;
