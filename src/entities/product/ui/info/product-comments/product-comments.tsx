import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button, TooltipLazy } from '@shared/ui';
import { EmptyComments } from '@shared/assets/images';
import { EmptyContentLazy } from '@widgets/empty-content';
import { IProductComments } from '../../../model/types';
import { CommentsListLazy, commentsList } from '../../../../comment';

const ProductCommentsRatingsLazy =
  React.lazy(() => import('../product-comments-ratings/product-comments-ratings'));

interface Props {
  product: IProductComments
}

const ProductComments: React.FC<Props> = ({ product }) => {
  const t = useTranslations('product_info');
  const tButton = useTranslations('buttons');

  return (
    <section className='product-section-wrapper flex-y-center flex-col gap-2 md:gap-4 mt-6'>
      <div className='flex-center-between w-full'>
        <h2 className='title'>
          {t('feedbacks')}
          <sup className='font-semibold text-xl ml-2 text-gray-200'>(23)</sup>
        </h2>

        <TooltipLazy position='top' content={t('feedback_btn_info')}>
          <Button text={tButton('add_comment')} />
        </TooltipLazy>
      </div>

      {commentsList.length ? (
        <>
          <ProductCommentsRatingsLazy
            rating={product?.rating}
            totalComments={product?.totalComments}
            totalRatings={product?.totalRatings}
          />
          <CommentsListLazy commentsList={commentsList} wrapperClass='w-full' />
          <Button
            icon='icon-arrow-down'
            iconPosition='left'
            text={tButton('download_more')}
            color='secondary'
          />
        </>
      ) : (
        <EmptyContentLazy wrapperClass='w-full flex-y-center'>
          <Image src={EmptyComments} className='w-72' alt='empty' />
        </EmptyContentLazy>
      )}
    </section>
  );
};

export default ProductComments;
