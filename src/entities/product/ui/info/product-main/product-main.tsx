'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@shared/lib/utils';
import { useCounter } from '@shared/lib/hooks';
import { Button, StarRatingLazy } from '@shared/ui';
import { SaveProductLazy } from '@features/save-product';
import { IProductInfoMain } from '../../../model/types';
import ProductCounter from '../../product-counter/product-counter';

const ProductMainImage = React.lazy(() => import('./product-image'));
const ProductCategoryTags =
	React.lazy(() => import('./product-category-tags'));
const ProductPrices = React.lazy(() => import('./product-prices'));
const ProductWeights = React.lazy(() => import('./product-weights'));

interface Props {
  product: IProductInfoMain
}

const ProductMain: React.FC<Props> = ({ product }) => {
	const tButtons = useTranslations('buttons');
	const counter = useCounter(product?.count);
	const [activeWeight, setActiveWeight] = React.useState(product?.weights[0]);

	return (
		<section className={cn('product-section-wrapper flex gap-3 md:gap-5')}>
			<ProductMainImage name={product.name} discount={product?.discount} />

			<div>
				<div className='flex flex-col gap-2 md:gap-4 pb-4 border-gray-500 border-b'>
					<div className="flex-center-between flex-wrap gap-2">
						<ProductCategoryTags categories={product.category} />

						<div className='flex-y-center gap-1'>
							<span className='text-base leading-130 font-semibold text-gray'>{product.rating}</span>
							<StarRatingLazy size='medium' selectedStars={product.rating} />
						</div>
					</div>

					<h1 className='text-base md:text-xl leading-130 font-semibold text-black'>
						{product.name}
					</h1>
				</div>

				<ProductWeights
					weights={product.weights}
					activeWeight={activeWeight}
					setActiveWeight={setActiveWeight}
				/>

				<div className='pt-4'>
					<ProductPrices price={product.price} discount={product?.discount} />

					<div className='flex-y-center gap-3'>
						{counter.value ? (
							<ProductCounter
								size='large'
								color='gray'
								wrapperClass='grow'
								count={counter.value}
								totalCount={product.totalCount}
								decrease={counter.decCount}
								increase={counter.incCount}
							/>
						) : (
							<Button
								size='small'
								icon='icon-cart'
								iconPosition='left'
								onClick={counter.incCount}
								text={tButtons('add_to_cart')}
							/>
						)}

						<Button
							icon='icon-share'
							color='gray'
							iconPosition='left'
							onClick={() => console.log('Share product')}
							text={tButtons('share')}
						/>

						<SaveProductLazy productId={product.id} isLiked={product.isLiked} />
					</div>
				</div>
			</div>

		</section>
	);
};

export default ProductMain;
