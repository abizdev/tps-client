import React from 'react';
import { SkeletonLazy } from '@shared/ui';

const ProductCardLoader = React.memo(() => {
	return (
		<article className='border rounded-lg border-gray-500 bg-gray-500'>
			<SkeletonLazy className='w-full h-44 md:h-49 rounded-t-lg' />

			<div className="flex flex-col p-3 bg-gray-500">
				<div className="flex flex-col gap-1">
					<SkeletonLazy className='w-32 h-4.5' />
					<SkeletonLazy className='w-32 h-4.5' />
				</div>

				<div className="flex flex-col">
					<SkeletonLazy className='w-32 h-4.5' />
					<SkeletonLazy className='w-32 h-4.5' />

					<div className="flex-y-center mt-1 gap-1">
						<SkeletonLazy className='w-32 h-4.5' />
						<SkeletonLazy className='w-32 h-4.5' />
					</div>
				</div>

				<SkeletonLazy className='w-full h-12' />
			</div>
		</article>
	);
});

export default ProductCardLoader;
