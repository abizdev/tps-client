import React from 'react';
import { cn } from '@shared/lib/utils';
import { CategoryCardLazy, ICategory } from '@entities/category';
import { SectionTitleLazy } from '../../section-title';

interface Props {
  wrapperClass?: string;
  categoriesList: ICategory[]
  title: string
  text?: string
  link?: string
}

const CategoriesSection: React.FC<Props> = (props) => {
	const {
		title,
		text,
		link,
		wrapperClass,
		categoriesList
	} = props;

	return (
		<section className={cn('py-14', wrapperClass)}>
			<div className="container">
				<SectionTitleLazy title={title} text={text} link={link} />

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4'>
					{categoriesList.map((category, key) => (
						<CategoryCardLazy
							key={key}
							title={category.title}
							link={category.link}
							imgUrl={category?.imgUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoriesSection;
