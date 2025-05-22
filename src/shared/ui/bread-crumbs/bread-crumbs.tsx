import React from 'react';
import { Link } from '@shared/config/i18n';
import { useTranslations } from 'next-intl';
import { cn } from '@shared/lib/utils';

interface Props {
  paths: { name: string; link: string }[];
}

const pathsList = [
  {
    name: 'main',
    link: '/',
  }
]

const BreadCrumbs: React.FC<Props> = ({ paths }) => {
  const t = useTranslations('routes')

  return (
    <div className='container flex-y-center gap-2 py-3'>
      {[...pathsList, ...paths].map((path, index) => (
        <div key={index} className='flex-y-center gap-2'>
          <Link
            href={path.link}
            className={cn(
              'text-sm text-gray font-semibold leading-130 hover-primary',
              { 'text-gray-300': index === paths.length }
            )}
          >
            {t(path.name)}
          </Link>
          {index !== paths.length && <span className="w-1 h-1 rounded-full bg-gray-300" />}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
