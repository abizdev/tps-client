import React from 'react';
import { cn } from '@shared/lib/utils';

interface Props {
	className?: string;
}

const DiscountBadge: React.FC<Props> = ({ className }) => {
	return (
		<span
			className={cn(
				'w-13.5 h-8 flex-center bg-green border border-white/[.36] -rotate-8 transition-300 rounded-xl absolute top-3 left-3 z-10',
				className,
			)}
		>
			<i className="icon-discount text-white rotate-8" />
		</span>
	);
};

export default React.memo(DiscountBadge);
