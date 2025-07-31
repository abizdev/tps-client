import React from 'react';
import { SkeletonLazy } from '@shared/ui';

const SectionTitleLoader = React.memo(() => {
	return (
		<div className='flex justify-between items-end mb-5'>
			<SkeletonLazy className='w-[330px] h-10' />
			<SkeletonLazy className='w-[55px] h-6' />
		</div>
	);
});

export default SectionTitleLoader;
