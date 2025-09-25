import React from 'react';
import { SkeletonLazy } from '@shared/ui';
import CommentLoader from '@entities/comment/ui/comment/comment-loader';


const ProductCommentsLoader: React.FC = () => {
	return (
		<section className='product-section-wrapper flex-y-center flex-col gap-2 md:gap-4 mt-6'>
			<div className='flex-center-between w-full'>
				<SkeletonLazy className='w-40 h-9' />
				<SkeletonLazy className='w-30.5 h-9' />
			</div>

			<div className='w-full flex flex-col gap-2'>

				<div className='flex flex-col gap-3'>
					{Array.from({ length: 4 }).map((_, i) => (
						<CommentLoader key={i} />
					))}
				</div>

				<SkeletonLazy className='w-30.5 h-9 self-center' />
			</div>
		</section>
	);
};

export default ProductCommentsLoader;
