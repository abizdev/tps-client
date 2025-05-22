'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import { Input } from '@shared/ui';
import { useSearchInput } from '@shared/lib/hooks';
// import { debounce } from '@shared/lib/utils';

const SearchedProductsListLazy =
  React.lazy(() => import('./searched-products-list'))

export const SearchProduct: React.FC = () => {
  const t = useTranslations('placeholders')
  const searchInput = useSearchInput({})
  const [showSearchedList, setShowSearchedList] = React.useState(false);

  // console.log('client', debounce('product', () => searchInput.value, 500));


  // const products = []
  const products = [
    { name: 'Product 1', linkUrl: '#!' },
    { name: 'Product 2', linkUrl: '#!', },
    { name: 'Product 3', linkUrl: '#!', },
    { name: 'Product 4', linkUrl: '#!', },
  ]

  const toggleSearchedListShow = () => setShowSearchedList(!showSearchedList);

  return (
    <div className='relative flex-grow'>
      <Input
        id='search-product'
        type='search'
        value={searchInput.value}
        defaultValue={searchInput.value}
        placeholder={t('search_product_input')}
        onChange={searchInput.handleChange}
        onFocus={toggleSearchedListShow}
        onBlur={toggleSearchedListShow}
        inputWrapperClass='gap-2'
        startContent={<i className='icon-search text-gray' />}
        endContent={(
          <button
            type='button'
            onClick={searchInput.onClearInput}
            className='icon-close-circle cursor-pointer text-xl leading-5 text-gray-200 hover-primary transition-300'
          />
        )}
      />

      {showSearchedList && <SearchedProductsListLazy productsList={products} searchText={searchInput.value} />}
    </div>
  )
};
