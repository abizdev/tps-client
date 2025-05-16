import React from 'react';
import { cn } from '../../lib/utils/utils';
import { LazyLoading } from '@shared/ui';
import { IButtonColor, IButtonSize, IButtonVariant } from './types';
import { contained, outlined, sizes } from './style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: string;
  iconPosition?: 'right' | 'left'
  color?: IButtonColor
  variant?: IButtonVariant;
  size?: IButtonSize;
  loading?: boolean;
  className?: string;
  iconClass?: string;
}

export const Button = React.memo<Props>((props) => {
  const {
    text,
    icon,
    iconPosition = 'right',
    size = IButtonSize.medium,
    color = IButtonColor.primary,
    variant = IButtonVariant.contained,
    loading = false,
    disabled = false,
    className,
    iconClass,
    ...otherProps
  } = props;

  const mods = {
    [contained[color]]: variant === IButtonVariant.contained,
    [outlined[color]]: variant === IButtonVariant.outline,
    'border-none outline-none bg-none rounded-none': variant === IButtonVariant.clear,
    'flex-row-reverse': iconPosition === 'left',
    'opacity-30 pointer-events-none': disabled || loading
  }

  const additionalStyles = [
    sizes[size],
    className,
  ];

  return (
    <button
      className={cn(
        'flex-center gap-1.5',
        'text-base font-bold leading-100',
        'rounded-xl cursor-pointer active:scale-95',
        'transition-all duration-300',
        mods,
        additionalStyles
      )}
      {...otherProps}
    >
      {!loading && text && text}
      {!loading && icon && <i className={cn(icon, iconClass)} /> }
      {loading && <LazyLoading className='w-4 h-4' />}
    </button>
  );
});
