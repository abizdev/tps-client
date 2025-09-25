'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@shared/lib/utils';
import { socialLinks } from '../../footer/model/data';
import { LangSwitcherLazy, TLocale } from '@features/lang-switcher';
import { usePathname, useRouter } from '@shared/config/i18n';
import { useParams } from 'next/navigation';

interface Props {
	locale: TLocale;
}

const HeaderTop = React.memo<Props>(({ locale }) => {
	const router = useRouter();
	const params = useParams();
	const pathname = usePathname();
	const t = useTranslations('header');

	// TODO: fix locale change /ru -> /uz/ru
	const onLangChange = React.useCallback((value: string) => {
		React.startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{
					locale: value,
				},
			);
		});
	}, [params, pathname, router]);

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
