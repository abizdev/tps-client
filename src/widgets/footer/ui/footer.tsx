'use client';

import React from 'react';

import Image from 'next/image';
import { Logo } from '@shared/ui';
import { Link } from '@shared/config/i18n';

import {
	TelegramIcon,
	TelegramGlass,
	AppleStore,
	GooglePlayStore,
} from '@shared/assets/images';

import { footerCustomers, footerSections, socialLinks } from '../model/data';
import { useTranslations } from 'next-intl';
import { cn } from '@shared/lib/utils';

export const Footer = React.memo(() => {
	const t = useTranslations('footer');

	return (
		<footer className='bg-white border-t-4 border-primary pt-8'>
			<div className='container'>
				{/* contacts */}
				<div className='flex-center-between flex-wrap gap-y-5.5 bg-gray-600 rounded-2xl py-4 px-5'>
					{/* contacts links */}
					<div className='flex-y-center flex-wrap gap-5.5'>
						<Link href='/public' className='mr-4'>
							<Logo hoverEnable={true} className='h-11.5' />
						</Link>

						<div className='flex-y-center flex-wrap gap-2 sm:gap-5.5'>
							<Link
								href='#!'
								className='flex-y-center gap-1 group'
							>
								<i className='icon-phone-calling text-gray-200 group-primary' />
								<span className='text-base text-black group-primary font-semibold'>
									+998 (99) 999 99 99
								</span>
							</Link>

							<Link
								href='#!'
								className='flex-y-center gap-1 group'
							>
								<i className='icon-email text-gray-200 group-primary' />
								<span className='text-base text-black group-primary font-semibold'>
									tashkentparfume@gmail.com
								</span>
							</Link>
						</div>
					</div>

					{/* app stores */}
					<div className='flex-y-center gap-4'>
						<Link href='#!'>
							<Image
								src={AppleStore}
								className='w-[118px] h-10 object-contain'
								alt='apple store'
							/>
						</Link>

						<Link href='#!'>
							<Image
								src={GooglePlayStore}
								className='w-[118px] h-10 object-contain'
								alt='apple store'
							/>
						</Link>
					</div>
				</div>

				{/* nav links */}
				<div className='container flex-center-between flex-wrap mt-8 gap-5'>
					{/* for customers */}
					<nav>
						<h3 className='text-base leading-5 text-black mb-3 font-semibold'>
							{t('for_clients')}
						</h3>

						<ul className='flex flex-col'>
							{footerCustomers.map((nav, key) => (
								<li key={key} className='hover:translate-x-2 transition-300'>
									<Link
										href={nav.url}
										className='size-full inline-block text-gray-200 text-sm leading-130 hover-primary font-semibold'
									>
										{t(nav.text)}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* sections */}
					<nav>
						<h3 className='text-base leading-5 text-black mb-3 font-semibold'>
							{t('sections')}
						</h3>

						<ul className='flex flex-col'>
							{footerSections.map((nav, key) => (
								<li key={key} className='hover:translate-x-2 transition-300'>
									<Link
										href={nav.url}
										className='size-full inline-block text-gray-200 text-sm leading-130 hover-primary font-semibold'
									>
										{t(nav.text)}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* user */}
					<div className='flex flex-col gap-4'>
						<nav>
							<h3 className='text-base leading-5 text-black mb-3 font-semibold'>
								{t('user')}
							</h3>

							<ul className='flex flex-col'>
								<li className='hover:translate-x-2 transition-300'>
									<Link
										href='#!'
										className='size-full inline-block text-gray-200 text-sm leading-130 hover-primary font-semibold'
									>
										{t('login')}
									</Link>
								</li>

								<li className='hover:translate-x-2 transition-300'>
									<Link
										href='#!'
										className='size-full inline-block text-gray-200 text-sm leading-130 hover-primary font-semibold'
									>
										{t('sign_up')}
									</Link>
								</li>
							</ul>
						</nav>

						<nav>
							<h3 className='text-base leading-5 text-black mb-3 font-semibold'>
								{t('socials_title')}
							</h3>

							<ul className='flex-y-center gap-4'>
								{socialLinks.map((nav, key) => (
									<li key={key}>
										{/*<Tooltip showArrow={true} content={nav.text}>*/}
										<Link
											href={nav.link}
											className={cn('relative group text-xl leading-5 text-gray-200 hover-primary', nav.icon)}
										/>
										{/*</Tooltip>*/}
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* telegram */}
					<div className='flex-center-between gap-15 bg-gray-100 p-5 rounded-2xl'>
						<div className='flex flex-col gap-3 max-w-90 w-full'>
							<h2 className='text-md lg:text-xl text-black font-bold'>
								{t('telegram_latest_news')}
							</h2>
							<a
								href='#!'
								className='flex-y-center rounded-10 p-3 gap-2 bg-blue/10 border hover:border-blue transition-300'
							>
								<Image
									src={TelegramIcon}
									className='rounded-full bg-telegram-gradient w-6 h-6 flex-center'
									alt='telegram logo'
								/>
								<p className='text-sm md:text-base text-blue font-semibold'>
									{t('connect_with_telegram')}
								</p>
							</a>
						</div>

						<Image
							src={TelegramGlass}
							className='hidden md:flex'
							alt='telegram'
						/>
					</div>
				</div>
			</div>

			{/* bottom */}
			<div className='bg-gray-100 py-5 mt-8'>
				<div className='container flex-center-between flex-wrap gap-5'>
					<p className='text-sm text-black leading-4.5'>
						{t('rights')}
					</p>

					<Link
						href='#!'
						className='text-sm leading-4.5 text-black hover-primary'
					>
						{t('policy_privacy')}
					</Link>
				</div>
			</div>
		</footer>
	);
});
