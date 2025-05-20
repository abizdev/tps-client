import React from 'react';
import { Logo } from '@shared/ui';
import { IBrand } from '../model/types';
import { cn } from '@shared/lib/utils';
import { Link } from '@shared/config/i18n';

interface Props {
  brand: IBrand;
  wrapperClass?: string;
}

const BrandCard: React.FC<Props> = ({ brand, wrapperClass }) => {
  return (
    <article className={cn('bg-white flex-y-center rounded-2xl overflow-hidden group', wrapperClass)}>
      <Link href={brand?.linkUrl} className='w-full p-4 h-28 flex-center group-hover:scale-105 transition-300'>
        {brand?.imgUrl ? (
          <img src={brand.imgUrl} alt={brand.name} className="size-full object-contain" />
        ) : (
          <Logo className="w-full h-16 object-contain" hoverEnable />
        )}
      </Link>
    </article>
  );
};

export default React.memo(BrandCard);
