import React from 'react';
import Image from 'next/image';
import { cn } from '@shared/lib/utils';
import { NoImage } from '@shared/assets/images';
import { Button, DiscountBadgeLazy } from '@shared/ui';
import { IProduct } from '@entities/product/model/types';
import { Link } from '@shared/config/i18n';
import { useTranslations } from 'next-intl';

interface Props {
  product: IProduct;
  className?: string;
}

const ProductCard: React.FC<Props> = ({ product, className }) => {
  const t = useTranslations()

  return (
    <article
      className={cn(
        'relative cursor-pointer border  rounded-lg overflow-hidden group',
        'border-gray-500 bg-gray-500 hover:border-gray-300 hover:shadow-card transition-300',
        className
      )}
    >
      <div className="w-full h-44 md:h-49 rounded-t-lg overflow-hidden">
        {
          product?.image
            ? <Image src={NoImage} className="size-full object-cover" alt="no-image" />
            : <Image src={NoImage} className="size-full object-cover" alt="no-image" />
        }

        {product?.discount && (
          <DiscountBadgeLazy className="group-hover:shadow-green" />
        )}

        <Button
          variant='contained'
          className="absolute top-3 right-3 z-[1] bg-gray-500 p-2 group/button rounded-md opacity-0 group-hover:opacity-100"
          icon='icon-like'
          iconClass={cn(
            'text-black text-xl leading-5 group-hover/button:text-primary transition-300',
            (product.isLiked) && '!text-primary',
          )}
        />
      </div>

      <div className="flex flex-col p-3 bg-gray-500">
        <Link href={`/products/${product.id}`} className="flex flex-col gap-1">
          <h5 className="text-sm text-primary font-normal leading-130">
            {product?.title}
          </h5>
          <p className="text-sm text-black group-primary font-normal leading-130 line-clamp-2">
            {product?.name}
          </p>
        </Link>

        <div className="flex flex-col">
					<span className="text-sm text-red line-through font-bold">
						{product?.discount} UZS
					</span>
          <h4 className="text-black text-base font-bold mt-1">
            {product?.price} UZS
          </h4>

          <div className="flex-y-center mt-1 gap-1">
            <i className="icon-star text-yellow text-xs leading-3" />
            <span className="ml-1 text-sm text-gray-200">
							{product?.rating}
						</span>
          </div>
        </div>

        <Button
          text={t('add_to_cart')}
          color='primary'
          icon='icon-cart'
          iconPosition='left'
          className='mt-2 w-full'
          variant='contained'
          disabled={!product.count}
        />
      </div>
    </article>
  );
};

export default React.memo(ProductCard);
