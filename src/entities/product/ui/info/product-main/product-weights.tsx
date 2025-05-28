import React from 'react';
import { cn } from '@shared/lib/utils';
import { useTranslations } from 'next-intl';
import { IProductWeight } from '../../../model/types';

interface Props {
  className?: string;
  activeWeight: IProductWeight;
  setActiveWeight: (weight: IProductWeight) => void;
  weights: IProductWeight[];
}

const ProductWeights: React.FC<Props> = ({ weights, activeWeight, setActiveWeight }) => {
	const t = useTranslations('product_info');

	return (
		<div className='flex flex-col gap-2 border-gray-500 border-b py-4'>
			<h5 className='text-base leading-130 font-semibold text-black'>{t('weight')}</h5>

			<div className='flex-y-center gap-3'>
				{weights.map((weight) => (
					<span
						key={weight.value}
						className={cn(
							'text-base leading-120 text-black border border-gray-300 rounded-md py-2 px-3 cursor-pointer',
							'transition-300',
							{
								'font-semibold border-primary': weight.value === activeWeight.value,
								'text-gray-400 pointer-events-none cursor-not-allowed': !weight.enabled
							},
						)}
						onClick={() => setActiveWeight(weight)}
					>
						{weight.value}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProductWeights;
