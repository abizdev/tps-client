import React from 'react';
import { Link } from '@shared/config/i18n';
import { Button, LazyBadge, Logo } from '@shared/ui';
import { useTranslations } from 'next-intl';
import HeaderTop from './header-top';
import { SearchProduct } from '@features/search-product';

export const Header = React.memo(() => {
  const t = useTranslations('header')


  return (
    <header className='sticky top-0 z-30 hidden lg:block bg-white shadow-toast'>
      <HeaderTop />

      <div className='container flex-center-between py-4'>
        <Link href='/'>
          <Logo color='primary' className='h-13 mr-6' />
        </Link>

        <div className='flex-y-center gap-4 flex-grow'>
          <Button
            icon='icon-burger'
            iconPosition='left'
            text={t('catalog')}
            className='!bg-black-gradient hover:!shadow-none !p-2 text-white'
          />

          <SearchProduct />
        </div>

        <div className='flex-y-center gap-5 ml-8.5'>
          <Link href='/' className='flex-center flex-col group'>
            <LazyBadge
              count={0}
              wrapperClass='flex-center flex-col group'
              budgeClass='group-hover:!shadow-red transition-300'
              color='primary'
            >
              <i className='icon-box text-28 leading-7 text-gray group-primary' />
              <span className='text-gray text-xs leading-130 group-hover:text-primary transition-300'>
							{t('my_orders')}
						</span>

            </LazyBadge>
          </Link>

          <Link href='#!' className='flex-center flex-col group'>
            <LazyBadge
              count={13}
              wrapperClass='flex-center flex-col group'
              budgeClass='group-hover:!shadow-red transition-300'
              color='primary'
            >
              <i className='icon-cart text-28 leading-7 text-gray group-primary' />
              <span className='text-gray text-xs leading-130 group-primary'>
							{t('cart')}
						</span>
            </LazyBadge>
          </Link>

          <Link href='/saved' className='flex-center flex-col group'>
            <LazyBadge
              count={0}
              wrapperClass='flex-center flex-col group'
              budgeClass='group-hover:!shadow-red transition-300'
              color='primary'
            >
              <i className='icon-like text-28 leading-7 text-gray group-primary' />
              <span className='text-gray text-xs leading-130 group-primary transition-300'>
							  {t('liked')}
						  </span>
            </LazyBadge>
          </Link>
        </div>

        <Button text={t('login')} icon='icon-login' className='ml-8' />
      </div>

      {/* navigation */}
    </header>
  );
});
