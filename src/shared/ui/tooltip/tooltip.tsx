import React from 'react';
import { cn } from '@shared/lib/utils';


export type TPosition = 'top' | 'left' | 'bottom' | 'right'

interface Props {
  position?: TPosition;
  content: string;
  children: React.ReactNode
  wrapperClass?: string;
  tooltipClass?: string;
}

const Tooltip = React.memo<Props>((props) => {
	const {
		content,
		children,
		position = 'top',
		wrapperClass,
		tooltipClass,
	} = props;

	const mods = {
		top: 'bottom-full left-1/2 -translate-x-1/2 mb-0.5',
		bottom: 'top-full left-1/2 -translate-x-1/2 mt-0.5',
		left: 'right-full top-1/2 -translate-y-1/2 mr-0.5',
		right: 'left-full top-1/2 -translate-y-1/2 ml-0.5',
	};

	return (
		<div className={cn('relative group inline-block', wrapperClass)}>
			{children}
			<div
				className={cn(
					'absolute z-50 px-3 py-2 rounded-md text-sm text-white bg-gray-800',
					'transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none',
					mods[position],
					tooltipClass
				)}
			>
				{content}
			</div>
		</div>
	);
});

export default React.memo(Tooltip);
