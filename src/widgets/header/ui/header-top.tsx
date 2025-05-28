import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@shared/lib/utils';
import { socialLinks } from '../../footer/model/data';

const HeaderTop = React.memo(() => {
	const t = useTranslations('header');

	return (
		<div className="hidden lg:flex bg-gray-100 py-3">
			<div className="container flex-center-between">
				{/* contacts links */}
				<div className="flex items-center gap-6">
					<a
						href="#!"
						className="icon-phone-inc flex items-center gap-1 text-gray hover-primary"
					>
						<span className="text-xs leading-[130%] font-semibold">
							+998 (99) 999 99 99
						</span>
					</a>

					<a
						href="#!"
						className="icon-map flex items-center gap-1 text-gray hover-primary"
					>
						<span className="text-xs leading-130 font-semibold">
							{t('address')}
						</span>
					</a>
				</div>

				{/* socials and lang toggle */}
				<div className="flex items-center gap-x-[30px]">
					{/* social links */}
					<div className="flex items-center gap-4">
						{socialLinks.map((nav, key) => (
							<a
								key={key}
								href={nav.link}
								className={cn('relative group text-xl leading-5 text-gray-200 hover-primary', nav.icon)}
							/>
						))}
					</div>

					{/* lang toggle */}
					<div className="relative flex items-center flex-row-reverse gap-1 group cursor-pointer">
						<i className="icon-chevron-down group-primary" />
						<span className="text-gray text-xs leading-[130%] group-primary">
							Русский
						</span>
					</div>
				</div>
			</div>
		</div>
	);
});

export default HeaderTop;
