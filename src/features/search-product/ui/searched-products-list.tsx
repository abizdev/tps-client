import React from 'react';
import Image from 'next/image';
import { cn } from '@shared/lib/utils';
import { useTranslations } from 'next-intl';
import { SearchEmpty } from '@shared/assets/images';
import { ISearchProduct, SearchedProductLazy } from '@entities/product';

interface Props {
  productsList: ISearchProduct[] | [];
  searchText: string;
}

const SearchedProductsList: React.FC<Props> = ({ productsList, searchText }) => {
	const t = useTranslations('header');

	const mods = {
		'max-h-[240px]': productsList.length < 0,
		'h-[240px]': !productsList.length
	};

	return (
		<div
			className={cn(
				'absolute top-14 left-0 z-10',
				'overflow-x-hidden overflow-y-scroll no-scrollbar',
				'w-full bg-white rounded-xl shadow-dropdown flex-x-center',
				mods
			)}
		>
			{productsList.length > 0 && (
				<div className="flex flex-col w-full">
					{productsList.map((product, index) => (
						<SearchedProductLazy key={index} product={product} text={searchText} />
					))}
				</div>
			)}

			{!productsList.length && (
				<div className="flex-center flex-col gap-y-4">
					<Image src={SearchEmpty} alt='empty-search' />
					<h4 className="text-base text-gray text-center font-semibold">
						{t('search_empty_text')}
					</h4>
				</div>
			)}

		</div>
	);
};

export default SearchedProductsList;
