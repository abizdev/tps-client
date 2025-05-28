'use client';

import React from 'react';
import { Input } from '@shared/ui';
import { useSearchInput } from '@shared/lib/hooks';
import { useTranslations } from 'next-intl';
import { debounce } from '@shared/lib/utils';

interface Props {
  className?: string;
  onSearch: (value: string) => void;
}

const SearchBrandsInput: React.FC<Props> = ({ className, onSearch }) => {
	const t = useTranslations('placeholders');
	const searchInput = useSearchInput({});

	React.useEffect(() => onSearch(searchInput.value), [onSearch, searchInput.value]);

	return (
		<div className={className}>
			<Input
				id='search-product'
				type='search'
				value={searchInput.value}
				defaultValue={searchInput.value}
				placeholder={t('search_product_input')}
				onChange={searchInput.handleChange}
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
		</div>
	);
};

export default React.memo(SearchBrandsInput);
