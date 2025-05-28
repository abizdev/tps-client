import React from 'react';
import { cn } from '@shared/lib/utils';
import { Button, IButtonSize } from '@shared/ui';

interface Props {
  productId: number;
  isLiked?: boolean;
  btnClass?: string;
  iconClass?: string;
  size?: IButtonSize;
}

const SaveProduct: React.FC<Props> = (props) => {
	const {
		size = 'medium',
		isLiked,
		btnClass,
		iconClass
	} = props;

	return (
		<Button
			size={size}
			icon='icon-like'
			color='gray'
			variant='contained'
			className={btnClass}
			iconClass={cn(iconClass, (isLiked) && '!text-primary')}
		/>
	);
};

export default React.memo(SaveProduct);
