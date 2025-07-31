import React from 'react';
import { cn } from '@shared/lib/utils';

interface Props {
  className?: string;
}

const Skeleton = React.memo(({ className }: Props) => {
	return (
		<span className={cn('inline-block skeleton rounded-md', className)} />
	);
});

export default Skeleton;
