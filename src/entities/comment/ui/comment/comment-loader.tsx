import React from 'react';
import { SkeletonLazy } from '@shared/ui';

const CommentLoader: React.FC = () => {
	return (
		<article className='py-4'>
			<div className='flex-y-center gap-3'>
				<SkeletonLazy className='size-11' />

				<div>
					<SkeletonLazy className='w-[175px] h-5.5' />
					<div className='flex-y-center gap-2'>
						<SkeletonLazy className='w-[100px] h-5.5' />
						<SkeletonLazy className='w-[100px] h-5.5' />
					</div>
				</div>
			</div>

			<SkeletonLazy className='w-full h-20 mt-1' />
		</article>
	);
};

export default React.memo(CommentLoader);
