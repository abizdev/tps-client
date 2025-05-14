import React from 'react';
import { cn } from '../../../lib/utils/utils';

interface Props {
  labelId: string,
  labelText: string,
  required?: boolean,
  wrapperClass?: string;
  labelClass?: string;
  children: React.ReactElement,
}

const Label: React.FC<Props> = (props) => {
  const {
    labelId,
    labelText,
    required,
    wrapperClass,
    labelClass,
    children,
  } = props;

  return (
    <div className={cn('flex flex-col gap-2', wrapperClass)}>
      <div className='flex items-center gap-1'>
        {required && <span className='text-error text-sm leading-130 font-semibold'>*</span>}
        <label
          id={labelId}
          htmlFor={labelId}
          className={cn('text-sm leading-130 font-semibold', labelClass)}
        >
          {labelText}
        </label>
      </div>

      {children}
    </div>
  );
};

export default Label;
