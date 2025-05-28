import React from 'react';
import Image from 'next/image';
import { NoImage } from '@shared/assets/images';
import { DiscountBadgeLazy } from '@shared/ui';

interface Props {
  image?: string;
  name: string;
  discount?: number;
}

const ProductImage: React.FC<Props> = ({ image, name, discount }) => {
	return (
		<div className='relative group w-[300px] max-h-[433px] h-full border border-gray-300 rounded-lg overflow-hidden'>
			{image
				? <img src={image} alt={name} className='w-full h-full object-contain' />
				: <Image src={NoImage} className='w-full h-full object-contain' alt={name} />
			}

			{discount && (
				<DiscountBadgeLazy className="group-hover:shadow-green" />
			)}
		</div>
	);
};

export default React.memo(ProductImage);
