import React from 'react';
import { SkeletonLazy } from '@shared/ui';

const BrandCardLoader: React.FC = () => {
	return (
		<SkeletonLazy className='rounded-2xl w-70 h-28' />
	);
};

export default BrandCardLoader;
