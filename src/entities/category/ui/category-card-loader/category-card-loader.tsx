import React from 'react';
import { SkeletonLazy } from '@shared/ui';

const CategoryCardLoader: React.FC = () => {
	return (
		<SkeletonLazy className='h-32.5 rounded-2xl' />
	);
};

export default CategoryCardLoader;
