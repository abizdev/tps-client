'use client';
import React from 'react';
import { cn } from '../../lib/utils/utils';

interface Props {
  selectedStars?: number;
  onSelect?: (starCount: number) => void;
  size?: 'small' | 'medium' | 'large';
  wrapperClass?: string;
}

const stars = [1, 2, 3, 4, 5];

const StarRating: React.FC<Props> = (props) => {
	const {
		selectedStars = 0,
		onSelect,
		size = 'small',
		wrapperClass
	} = props;

	const [currentStarsCount, setCurrentStarsCount] = React.useState(selectedStars);
	const [isSelected, setIsSelected] = React.useState(Boolean(selectedStars));

	const starSize = {
		small: 'text-sm',
		medium: 'text-base',
		large: 'text-4xl',
	};

	const onHover = (starNumber: number) => () => {
		if (!isSelected) {
			setCurrentStarsCount(starNumber);
		}
	};

	const onLeave = () => {
		if (!isSelected) {
			setCurrentStarsCount(0);
		}
	};

	const onSelectStar = (starNumber: number) => () => {
		onSelect?.(starNumber);
		setCurrentStarsCount(starNumber);
		setIsSelected(true);
	};

	return (
		<div className={cn('flex items-center justify-center gap-2', wrapperClass)}>
			{stars.map((star) => (
				<span
					key={star}
					onMouseLeave={onLeave}
					onMouseEnter={onHover(star)}
					onClick={onSelectStar(star)}
					className={cn(
						'icon-star text-gray-200',
						{ 'cursor-pointer': !isSelected,
							'text-yellow-400': currentStarsCount >= star
						},
						starSize[size]
					)}
				/>
			))}
		</div>
	);
};

export default React.memo(StarRating);
