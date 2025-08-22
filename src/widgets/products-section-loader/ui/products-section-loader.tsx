import React from 'react';
import { SectionTitleLoaderLazy } from '../../section-title-loader';
import { cn } from '@shared/lib/utils';

interface Props {
  children: React.ReactNode;
	wrapperClass?: string;
}

const ProductsSectionLoader: React.FC<Props> = ({ children, wrapperClass }) => {
	return (
		<section className={cn('py-14', wrapperClass)}>
			<SectionTitleLoaderLazy />

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4'>
				{children}
			</div>
		</section>
	);
};

export default ProductsSectionLoader;
