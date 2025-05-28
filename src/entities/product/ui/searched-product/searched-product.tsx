import React from 'react';
import Link from 'next/link';
import Highlighter from 'react-highlight-words';
import Image from 'next/image';
import { NoImage } from '@shared/assets/images';
import { ISearchProduct } from '@entities/product';

interface Props {
  product: ISearchProduct;
  text: string;
}

const SearchedProduct: React.FC<Props> = ({ product, text }) => {
	return (
		<article className="bg-white hover:bg-gray-100 transition-300">
			<Link href={product.linkUrl} className="flex justify-between items-center py-2 px-3">
				<div className="flex items-center gap-3">
					<span className="w-8 h-8 border border-gray-300 rounded-lg p-0.5 overflow-x-hidden">
						{product.image ? (
							<Image
								src={product.image}
								className="w-full h-full object-contain"
								alt="product"
							/>
						): (
							<Image
								src={NoImage}
								className="w-full h-full object-contain"
								alt="product"
							/>
						)}

					</span>

					<Highlighter
						className="text-black text-sm leading-[1.3]"
						highlightClassName="bg-yellow-300 rounded p-0.5"
						searchWords={[text]}
						textToHighlight={product?.name || ''}
					/>
				</div>

				<i className="icon-chevron-right" />
			</Link>
		</article>
	);
};

export default SearchedProduct;
