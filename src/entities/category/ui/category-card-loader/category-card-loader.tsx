import React from 'react';
import { cn } from '@shared/lib/utils';

interface Props {
  className?: string;
}

const CategoryCardLoader: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(
			'relative p-5 bg-white rounded-2xl overflow-hidden group hover:shadow-card transition-300 flex flex-col gap-10',
			className
		)}
		>

		</div>
	);
};

export default CategoryCardLoader;
