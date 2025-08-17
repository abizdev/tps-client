import React from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { cn } from '@shared/lib/utils';

interface Props {
	activeLang: string;
	onLangChange: (lang: string) => void;
}

const languages: TLangs = {
	uz: {
		value: 'uz',
		label: 'O\'zbek',
	},
	ru: {
		value: 'ru',
		label: 'Русский'
	},
	en: {
		value: 'en',
		label: 'English'
	},
};

const LangSwitcher = React.memo(({ activeLang, onLangChange }: Props) => {
	return (
		<Listbox value={activeLang} onChange={onLangChange}>
			<ListboxButton className='flex-y-center cursor-pointer'>{languages[activeLang].label}</ListboxButton>
			<ListboxOptions anchor="bottom" className='z-31 bg-white rounded-xl overflow-hidden border-none'>
				{Object.entries(languages).map(([_, lang]) => (
					<ListboxOption
						key={lang.value}
						value={lang.value}
						className={cn(
							'data-focus:bg-blue-100 px-3 py-4 border-b border-gray-250 w-[150px]',
							'!hover:bg-primary-200 transition-300'
						)}
					>
						{lang.label}
					</ListboxOption>
				))}
			</ListboxOptions>
		</Listbox>
	);
}, (prevProps, nextProps) => prevProps.activeLang !== nextProps.activeLang);

export default LangSwitcher;
