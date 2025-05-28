import React from 'react';
import { IProductTotalRating } from '@entities/product/model/types';
import { StarRatingLazy, TooltipLazy } from '@shared/ui';

interface Props {
  rating?: number;
  totalComments?: number;
  totalRatings?: IProductTotalRating[];
}

const ProductCommentsRatings: React.FC<Props> = ({ rating, totalComments, totalRatings }) => {
	return (
		<div className='bg-gray-600/44 rounded-lg p-4 flex-y-center gap-5 w-full'>
			<div className='flex flex-col gap-1 border-r border-gray-400 py-2 pr-5'>
				<h2 className='text-[40px] leading-130 font-semibold text-black-400'>{rating}</h2>
				<StarRatingLazy selectedStars={rating} size='large' />
				<span className='text-xs leading-4 text-gray-200'>({totalComments} отзыва)</span>
			</div>

			<div className='flex flex-col-reverse gap-2 w-full'>
				{totalRatings?.map((item, index) => (
					<div key={index} className='flex-y-center gap-1'>
						<span className='text-sm leading-4 text-black-400'>{index + 1}</span>
						<span className='text-xs leading-4 text-gray-200 w-7'>{item.percent}%</span>
						<i className='icon-star text-yellow text-xs' />
						<TooltipLazy position='top' content={String(item.total)} wrapperClass='block grow h-3'>
							<span className='size-full rounded-lg bg-gray-400 flex' />
							<span
								style={{ width: `${item.percent}%` }}
								className='h-full rounded-lg bg-yellow group-hover:bg-yellow-100 transition-300 flex absolute top-0 left-0'
							/>
						</TooltipLazy>
					</div>
				))}
			</div>

		</div>
	);
};

export default ProductCommentsRatings;
