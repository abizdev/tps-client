'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@shared/lib/utils';
import { socialLinks } from '../../footer/model/data';
import { LangSwitcherLazy } from '@features/lang-switcher';
import { useLocale } from 'use-intl';
import { usePathname, useRouter } from '@shared/config/i18n';

const HeaderTop = React.memo(() => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations('header');

	const onLangChange = React.useCallback((value: string) => {
		router.replace(`/${value}/${pathname}`);
	}, [pathname, router]);

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
					<LangSwitcherLazy activeLang={locale} onLangChange={onLangChange} />
				</div>
			</div>
		</div>
	);
});

export default HeaderTop;
