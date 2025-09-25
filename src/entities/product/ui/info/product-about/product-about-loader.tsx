import React from 'react';
import { SkeletonLazy } from '@shared/ui';

const ProductAboutLoader: React.FC = () => {
	return (
		<section className='product-section-wrapper flex flex-col gap-2 md:gap-4 mt-6'>
			<SkeletonLazy className='w-[172px] h-11.5' />
			<div>
				<SkeletonLazy className='w-40 h-5' />
				<SkeletonLazy className='w-full h-50' />
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2'>
				{Array.from({ length: 4 }).map((_, i) => (
					<article key={i} className='p-4 flex flex-col gap-1'>
						<SkeletonLazy className='w-50 h-5' />
						<SkeletonLazy className='w-10 h-5' />
					</article>
				))}
			</div>
		</section>
	);
};

export default React.memo(ProductAboutLoader);
