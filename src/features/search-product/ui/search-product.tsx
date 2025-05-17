'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import { Input } from '@shared/ui';
import SearchedProductsList from './searched-products-list';

export const SearchProduct: React.FC = () => {
  const t = useTranslations('placeholders')
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [showSearchedList, setShowSearchedList] = React.useState(false);

  // const products = []
  const products = [
    { name: 'Product 1', linkUrl: '#!' },
    { name: 'Product 2', linkUrl: '#!', },
    { name: 'Product 3', linkUrl: '#!', },
    { name: 'Product 4', linkUrl: '#!', },
  ]

  const toggleSearchedListShow = () => setShowSearchedList(!showSearchedList);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, [])

  const onClearInput = React.useCallback(() => {
    setSearchValue('')
  }, [])

  return (
    <div className='relative flex-grow'>
      <Input
        id='search-product'
        type='search'
        value={searchValue}
        defaultValue={searchValue}
        placeholder={t('search_product_input')}
        onChange={handleChange}
        onFocus={toggleSearchedListShow}
        onBlur={toggleSearchedListShow}
        inputWrapperClass='gap-2'
        startContent={<i className='icon-search text-gray' />}
        endContent={(
          <button
            type='button'
            onClick={onClearInput}
            className='icon-close-circle cursor-pointer text-xl leading-5 text-gray-200 hover-primary transition-300'
          />
        )}
      />

      {showSearchedList && <SearchedProductsList productsList={products} searchText={searchValue} />}
    </div>
  )
};
