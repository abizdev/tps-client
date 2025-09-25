import React from 'react';
import { SkeletonLazy } from '@shared/ui';

const ProductMainLoader: React.FC = () => {
	return (
		<section className='product-section-wrapper flex gap-3 md:gap-5'>
			<SkeletonLazy className='w-[300px] h-[433px]' />

			<div>
				<div className='flex flex-col gap-2 md:gap-4 pb-4 border-gray-500 border-b'>
					<div className="flex-center-between flex-wrap gap-2">
						<SkeletonLazy className='w-[93px] h-6' />

						<div className='flex-y-center gap-1'>
							<SkeletonLazy className='w-6 h-6' />
							<SkeletonLazy className='w-50 h-6' />
						</div>
					</div>

					<SkeletonLazy className='w-full h-[52px]' />
				</div>

				<div>
					<SkeletonLazy className='w-[300px] h-4' />

					<div className='flex-y-center gap-1'>
						{Array.from({ length: 4 }).map((_, i) => (
							<SkeletonLazy key={i} className='w-full h-5' />
						))}
					</div>
				</div>

				<div className='pt-4'>
					<SkeletonLazy className='w-[300px] h-4' />

					<div className='flex-y-center gap-3'>
						<SkeletonLazy className='w-50 h-12.5' />
						<SkeletonLazy className='w-50 h-12.5' />
						<SkeletonLazy className='size-12.5' />
					</div>
				</div>
			</div>

		</section>
	);
};

export default ProductMainLoader;
