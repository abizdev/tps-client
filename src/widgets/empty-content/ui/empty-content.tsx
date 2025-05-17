import React from 'react';
import { cn } from '@shared/lib/utils';

interface Props {
  children: React.ReactElement;
  title?: string;
  text?: string;
  wrapperClass?: string;
  titleClass?: string;
  textClass?: string;
}

const EmptyContent: React.FC<Props> = (props) => {
  const {
    children,
    title,
    text,
    wrapperClass,
    titleClass,
    textClass,
  } = props;

  return (
    <section className={cn('flex-y-center flex-col gap-4', wrapperClass)}>
      {children}

      <div className='text-center'>
        {title && <h4 className={cn('text-2xl leading-130 font-bold text-black mb-1', titleClass)}>{title}</h4>}
        {text && <p className={cn('text-base leading-130 font-semibold text-gray', textClass)}>{text}</p>}
      </div>
    </section>
  );
};

export default React.memo(EmptyContent);
