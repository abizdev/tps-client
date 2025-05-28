import React from 'react';
import { cn } from '../../lib/utils/utils';

type TRadius = 'sm' | 'md' | 'lg' | 'full'

interface Props {
  wrapperClass?: string;
  src?: string;
  name?: string;
  size?: number;
  bordered?: boolean;
  radius?: TRadius
}

const Avatar = React.memo<Props>((props) => {
  const {
    wrapperClass,
    src,
    name,
    bordered,
    radius = 'full',
  } = props

  const mods = {
    'border border-2 border-gray-300': bordered,
    'rounded-sm': radius === 'sm',
    'rounded-md': radius === 'md',
    'rounded-lg': radius === 'lg',
    'rounded-full': radius === 'full',
  }

  return (
    <div className={cn(
      `overflow-hidden w-10 h-10 flex items-center justify-center flex-center bg-gray-400`, mods, wrapperClass
    )}>
      {src && <img src={src} alt="avatar" className='w-full h-full object-contain flex' />}
      {name && <span className='text-base uppercase icon-user text-gray-200' />}
    </div>
  );
});

export default Avatar;
