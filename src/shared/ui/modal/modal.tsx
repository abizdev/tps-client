import React from 'react';

import Portal from '../portal/portal';
import { cn } from '@shared/lib/utils';
import { Button } from '@shared/ui';

interface Props {
  open: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  lazy?: boolean;
}

const Modal: React.FC<Props> = (props) => {
	const {
		open,
		onClose,
		className = '',
		children,
		lazy
	} = props;

	React.useEffect(() => {
		if (open) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [open]);

	const onKeyDown = React.useCallback((event: KeyboardEvent) => {
		if (event.key !== 'Escape') {
			return;
		}

		onClose();
	}, [onClose]);

	const onContentCLick = (event: React.MouseEvent) => event.stopPropagation();

	if (lazy && !open) {
		return null;
	}

	return (
		<Portal>
			<div className={cn(
				'fixed top-0 left-0 w-screen h-screen opacity-0 pointer-events-none -z-10 transition-all duration-300',
				'opacity-100 pointer-events-auto transition-300 z-10',
			)}>
				<div className={cn('flex-center bg-black/60 size-full')} onClick={onClose}>
					<div className='flex items-start'>
						<div className={cn('bg-white', {}, [className])} onClick={onContentCLick}>
							{children}
						</div>
						<Button variant='clear' icon='icon-close' className='border border-gray-400 rounded-full' />
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
