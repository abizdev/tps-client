import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from '@shared/lib/utils';
import { NoImage } from '@shared/assets/images';

interface Props {
	title: string;
	link?: string;
	imgUrl?: string;
}

const CategoryCard: React.FC<Props> = ({ title, link = '#!', imgUrl }) => {
	const t = useTranslations();

	return (
		<article className='relative p-5 bg-white rounded-2xl overflow-hidden group hover:shadow-card transition-300'>
			<Link href={link} className='flex flex-col gap-10'>
				{imgUrl
					? (
						<Image
							src="/category.png"
							className="absolute bottom-0 right-0"
							alt="category"
							width="80"
							height="80"
						/>
					) : (
						<Image
							src={NoImage}
							className="absolute bottom-0 right-0"
							alt="category"
							width="80"
							height="80"
						/>
					)
				}

				<h5 className='text-xl leading-130 text-black font-proxima-nova'>
					{title}
				</h5>

				<button
					className={cn(
						'flex-y-center text-sm leading-130 text-primary font-normal opacity-0',
						'group-hover:opacity-100 transition-300'
					)}
					type='button'
				>
					{t('goto')} <i className='icon-arrow-right' />
				</button>
			</Link>
		</article>
	);
};

export default React.memo(CategoryCard);
