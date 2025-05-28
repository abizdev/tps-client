import React from 'react';
import { Link } from '@shared/config/i18n';
import { cn } from '@shared/lib/utils';


interface Props {
	title?: string;
	text?: string;
	link?: string;
}

const SectionTitle: React.FC<Props> = ({
	title = 'Популярные разделы',
	text = 'Все разделы',
	link
}) => {
	return (
		<div className='flex justify-between items-end mb-5'>
			<h2 className='text-18 md:text-32 leading-130 text-black font-bold'>
				{title}
			</h2>
			{link && (
				<Link
					href={link}
					className={cn(
						'flex-y-center gap-1 cursor-pointer hover-primary group hover-red',
						'text-sm md:text-base leading-130 font-semibold text-gray-200'
					)}
				>
					{text} <i className='icon-arrow-right' />
				</Link>
			)}
		</div>
	);
};

export default React.memo(SectionTitle);
